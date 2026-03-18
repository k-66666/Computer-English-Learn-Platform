package com.ape.apeadmin.controller.spoken;

import com.ape.apecommon.annotation.Log;
import com.ape.apecommon.domain.Result;
import com.ape.apecommon.enums.BusinessType;
import com.ape.apecommon.enums.ResultCode;
import com.ape.apeframework.utils.ShiroUtils;
import com.ape.apesystem.domain.ApeLiteratureUser;
import com.ape.apesystem.domain.ApeSpokenUser;
import com.ape.apesystem.domain.ApeUser;
import com.ape.apesystem.domain.ApeVocabularyUser;
import com.ape.apesystem.service.ApeSpokenUserService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

/**
 * @author 超级管理员
 * @version 1.0
 * @description: 用户口语controller
 * @date 2025/1/1 10:13
 */
@Controller
@ResponseBody
@RequestMapping("user")
public class ApeSpokenUserController {

    @Autowired
    private ApeSpokenUserService apeSpokenUserService;

    /** 分页获取用户口语 */
    @Log(name = "分页获取用户口语", type = BusinessType.OTHER)
    @PostMapping("getApeSpokenUserPage")
    public Result getApeSpokenUserPage(@RequestBody ApeSpokenUser apeSpokenUser) {
        Page<ApeSpokenUser> page = new Page<>(apeSpokenUser.getPageNumber(),apeSpokenUser.getPageSize());
        QueryWrapper<ApeSpokenUser> queryWrapper = new QueryWrapper<>();
        queryWrapper.lambda()
                .eq(StringUtils.isNotBlank(apeSpokenUser.getContent()),ApeSpokenUser::getContent,apeSpokenUser.getContent())
                .eq(StringUtils.isNotBlank(apeSpokenUser.getChinese()),ApeSpokenUser::getChinese,apeSpokenUser.getChinese())
                .eq(StringUtils.isNotBlank(apeSpokenUser.getUserId()),ApeSpokenUser::getUserId,apeSpokenUser.getUserId())
                .orderByDesc(ApeSpokenUser::getCreateTime);
        Page<ApeSpokenUser> apeSpokenUserPage = apeSpokenUserService.page(page, queryWrapper);
        return Result.success(apeSpokenUserPage);
    }

    @GetMapping("getSpokenCountByUserAndV")
    public Result getSpokenCountByUserAndV(@RequestParam("id")String id) {
        ApeUser userInfo = ShiroUtils.getUserInfo();
        QueryWrapper<ApeSpokenUser> queryWrapper = new QueryWrapper<>();
        queryWrapper.lambda().eq(ApeSpokenUser::getUserId,userInfo.getId())
                .eq(ApeSpokenUser::getSpokenId,id).last("limit 1");
        ApeSpokenUser one = apeSpokenUserService.getOne(queryWrapper);
        if (one != null) {
            return Result.success(one);
        } else {
            return Result.fail();
        }
    }

    /** 根据id获取用户口语 */
    @Log(name = "根据id获取用户口语", type = BusinessType.OTHER)
    @GetMapping("getApeSpokenUserById")
    public Result getApeSpokenUserById(@RequestParam("id")String id) {
        ApeSpokenUser apeSpokenUser = apeSpokenUserService.getById(id);
        return Result.success(apeSpokenUser);
    }

    /** 保存用户口语 */
    @Log(name = "保存用户口语", type = BusinessType.INSERT)
    @PostMapping("saveApeSpokenUser")
    public Result saveApeSpokenUser(@RequestBody ApeSpokenUser apeSpokenUser) {
        ApeUser userInfo = ShiroUtils.getUserInfo();
        apeSpokenUser.setUserId(userInfo.getId());
        boolean save = apeSpokenUserService.save(apeSpokenUser);
        if (save) {
            return Result.success();
        } else {
            return Result.fail(ResultCode.COMMON_DATA_OPTION_ERROR.getMessage());
        }
    }

    /** 编辑用户口语 */
    @Log(name = "编辑用户口语", type = BusinessType.UPDATE)
    @PostMapping("editApeSpokenUser")
    public Result editApeSpokenUser(@RequestBody ApeSpokenUser apeSpokenUser) {
        ApeUser userInfo = ShiroUtils.getUserInfo();
        apeSpokenUser.setUserId(userInfo.getId());
        boolean save = apeSpokenUserService.updateById(apeSpokenUser);
        if (save) {
            return Result.success();
        } else {
            return Result.fail(ResultCode.COMMON_DATA_OPTION_ERROR.getMessage());
        }
    }

    /** 删除用户口语 */
    @GetMapping("removeApeSpokenUser")
    @Log(name = "删除用户口语", type = BusinessType.DELETE)
    public Result removeApeSpokenUser(@RequestParam("id")String id) {
        ApeUser userInfo = ShiroUtils.getUserInfo();
        QueryWrapper<ApeSpokenUser> queryWrapper = new QueryWrapper<>();
        queryWrapper.lambda().eq(ApeSpokenUser::getUserId,userInfo.getId())
                .eq(ApeSpokenUser::getSpokenId,id);
        boolean remove = apeSpokenUserService.remove(queryWrapper);
        if (remove) {
            return Result.success();
        } else {
            return Result.fail();
        }
    }

}