package com.ape.apeframework.config;

import org.apache.shiro.authc.AuthenticationToken;

/**
 * @author shaozhujie
 * @version 1.0
 * @description: 自定义token
 * @date 2025/1/21 16:42
 */
public class JwtToken implements AuthenticationToken {

    private static final long serialVersionUID = 1L;

    private String token;

    public JwtToken(String token){
        this.token = token;
    }

    @Override
    public String getPrincipal() {
        return token;
    }

    @Override
    public Object getCredentials() {
        return token;
    }

}
