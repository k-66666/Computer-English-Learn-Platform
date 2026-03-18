package com.ape.apeadmin.controller.login;

import com.alibaba.fastjson2.JSONObject;
import com.ape.apecommon.annotation.Log;
import com.ape.apecommon.constant.Constants;
import com.ape.apecommon.domain.Result;
import com.ape.apecommon.enums.BusinessType;
import com.ape.apecommon.utils.JwtUtil;
import com.ape.apecommon.utils.PasswordUtils;
import com.ape.apecommon.utils.UserAgentUtil;
import com.ape.apeframework.event.LoginLogEvent;
import com.ape.apeframework.utils.RedisUtils;
import com.ape.apeframework.utils.RequestUtils;
import com.ape.apeframework.utils.ShiroUtils;
import com.ape.apesystem.domain.ApeLoginLog;
import com.ape.apesystem.domain.ApeMenu;
import com.ape.apesystem.domain.ApeUser;
import com.ape.apesystem.service.ApeLoginLogService;
import com.ape.apesystem.service.ApeMenuService;
import com.ape.apesystem.service.ApeUserService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.checkerframework.checker.units.qual.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
import java.util.Properties;
import java.util.Random;

/**
 * @author shaozhujie
 * @version 1.0
 * @description: 登陆
 * @date 2025/1/1 10:13
 */
@Controller
@ResponseBody
@RequestMapping("login")
public class LoginController {

    @Autowired
    private ApeUserService apeUserService;

    @Autowired
    private ApeLoginLogService apeLoginLogService;

    @Resource
    private ApplicationEventPublisher eventPublisher;

    @Autowired
    private ApeMenuService apeMenuService;

    @Autowired
    private RedisUtils redisUtils;

    @PostMapping()
    public Result login(HttpServletRequest request,@RequestBody JSONObject jsonObject) {
        String ipAddr = RequestUtils.getRemoteHost(request);
        String username = jsonObject.getString("username");
        String password = jsonObject.getString("password");
        QueryWrapper<ApeUser> query = new QueryWrapper<>();
        query.lambda().eq(ApeUser::getLoginAccount,username);
        ApeUser apeUser = apeUserService.getOne(query);
        if (apeUser == null) {
            saveLoginLog(request,"用户名不存在",username,ipAddr,1);
            return Result.fail("用户名不存在！");
        }
        //比较加密后得密码
        boolean decrypt = PasswordUtils.decrypt(password, apeUser.getPassword() + "$" + apeUser.getSalt());
        if (!decrypt) {
            saveLoginLog(request,"用户名或密码错误",username,ipAddr,1);
            return Result.fail("用户名或密码错误！");
        }
        if (apeUser.getStatus() == 1) {
            saveLoginLog(request,"用户被禁用",username,ipAddr,1);
            return Result.fail("用户被禁用！");
        }
        //密码正确生成token返回
        String token = JwtUtil.sign(apeUser.getId(), password);
        JSONObject json = new JSONObject();
        json.put("token", token);
        saveLoginLog(request,"登陆成功",username,ipAddr,0);
        return Result.success(json);
    }

    @Log(name = "登出", type = BusinessType.OTHER)
    @GetMapping("logout")
    public Result logout() {
        ApeUser user = ShiroUtils.getUserInfo();
        redisUtils.remove(Constants.PREFIX_USER_TOKEN + user.getId());
        return Result.success();
    }

    @Log(name = "验证密码", type = BusinessType.OTHER)
    @GetMapping("verPassword")
    public Result verPassword(HttpServletRequest request,@RequestParam("password") String password) {
        ApeUser user = ShiroUtils.getUserInfo();
        ApeUser apeUser = apeUserService.getById(user.getId());
        String ipAddr = RequestUtils.getRemoteHost(request);
        if (apeUser.getStatus() == 1) {
            saveLoginLog(request,"用户被禁用",apeUser.getLoginAccount(),ipAddr,1);
            return Result.fail("用户被禁用！");
        }
        boolean decrypt = PasswordUtils.decrypt(password, apeUser.getPassword() + "$" + apeUser.getSalt());
        if (!decrypt) {
            saveLoginLog(request,"验证密码错误",apeUser.getLoginAccount(),ipAddr,1);
            return Result.fail("用户名或密码错误！");
        }
        saveLoginLog(request,"验证成功",apeUser.getLoginAccount(),ipAddr,0);
        return Result.success();
    }


    public void saveLoginLog(HttpServletRequest request,String msg,String username,String ipAddr,Integer state) {
        String agent = request.getHeader("User-Agent");
        String userAgent = UserAgentUtil.getUserAgent(agent);
        String browser = UserAgentUtil.judgeBrowser(userAgent);
        ApeLoginLog apeLoginLog = new ApeLoginLog();
        apeLoginLog.setUserName(username);
        apeLoginLog.setLoginIp(ipAddr);
        apeLoginLog.setBrowser(browser);
        apeLoginLog.setOs(userAgent);
        apeLoginLog.setStatus(state);
        apeLoginLog.setLoginTime(new Date());
        apeLoginLog.setMsg(msg);
        eventPublisher.publishEvent(new LoginLogEvent(apeLoginLog));
    }

   @GetMapping("getEmailReg")
public Result getEmailReg(@RequestParam("email") String email) {
    String str="abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ0123456789";
    Random r=new Random();
    String arr[]=new String [4];
    String reg="";
    for(int i=0;i<4;i++) {
        int n=r.nextInt(62);
        arr[i]=str.substring(n,n+1);
        reg+=arr[i];
    }
    try {
        redisUtils.set(email + "forget",reg.toLowerCase(),300L);
        JavaMailSenderImpl sender = new JavaMailSenderImpl();
        sender.setPort(465);
        sender.setHost("smtp.163.com");
        sender.setUsername("code_learning@163.com");
        sender.setPassword("JYn7UPERcGQZ7hef");
        sender.setDefaultEncoding("utf-8");
        Properties properties = new Properties();
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.ssl.enable", "true");
        properties.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        properties.put("mail.smtp.socketFactory.port", "465");
        properties.put("mail.smtp.timeout", "25000");
        sender.setJavaMailProperties(properties);
        MimeMessage msg = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(msg, true);
        helper.setFrom(sender.getUsername());
        helper.setTo(email);
        helper.setSubject("CODE Learning英语学习平台-修改密码验证");
        // 发送内容
        String htmlContent = "<div style='background-color: #f6f6f6; padding: 20px; font-family: Arial, sans-serif;'>" +
        "<div style='background-color: white; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);'>" +
        "<h2 style='color: #333; margin-bottom: 20px;'>密码重置验证码</h2>" +
        "<p style='color: #666; font-size: 16px; line-height: 1.6;'>尊敬的CODE Learning用户：</p>" +
        "<p style='color: #666; font-size: 16px; line-height: 1.6;'>您正在进行密码重置操作，请使用以下验证码完成验证：</p>" +
        "<div style='background-color: #f8f9fa; padding: 15px; border-radius: 4px; margin: 20px 0; text-align: center;'>" +
        "<span style='font-size: 24px; font-weight: bold; color: #1BBFB4; letter-spacing: 5px;'>" + reg + "</span>" +
        "</div>" +
        "<p style='color: #666; font-size: 14px;'>验证码有效期为5分钟，请尽快完成验证。</p>" +
        "<p style='color: #666; font-size: 14px;'>如果这不是您的操作，请忽略此邮件。</p>" +
        "<hr style='border: none; border-top: 1px solid #eee; margin: 20px 0;'>" +
        "<p style='color: #999; font-size: 12px;'>此邮件由系统自动发送，请勿回复。</p>" +
        "</div>" +
        "</div>";

        helper.setText(htmlContent, true);
        sender.send(msg);
    }catch (Exception e){
        e.printStackTrace();
        return Result.fail("邮件发送失败: " + e.getMessage());
    }
    return Result.success();
}

}
