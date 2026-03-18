package com.ape.apesystem.mapper;

import com.ape.apesystem.domain.ApeMenu;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @author shaozhujie
 * @version 1.0
 * @description: 菜单mapper
 * @date 2025/1/1 10:13
 */
public interface ApeMenuMapper extends BaseMapper<ApeMenu> {

    /**
    * @description: 根据用户获取菜单权限
    * @param: id
    * @return:
    * @author shaozhujie
     * @date 2025/1/1 10:13
    */
    List<ApeMenu> getMenuByUser(@Param("id") String id);

}
