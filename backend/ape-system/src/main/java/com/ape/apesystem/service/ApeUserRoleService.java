package com.ape.apesystem.service;

import com.ape.apesystem.domain.ApeUserRole;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.Set;

/**
 * @author shaozhujie
 * @version 1.0
 * @description: 用户角色关系service
 * @date 2025/1/1 10:13
 */
public interface ApeUserRoleService extends IService<ApeUserRole> {

    /**
    * @description: 根据账号获取角色
    * @param: loginAccount
    * @return:
    * @author shaozhujie
     * @date 2025/1/1 10:13
    */
    Set<String> getUserRolesSet(String loginAccount);

}
