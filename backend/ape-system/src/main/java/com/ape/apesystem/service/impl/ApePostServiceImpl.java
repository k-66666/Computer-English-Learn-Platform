package com.ape.apesystem.service.impl;

import com.ape.apesystem.domain.ApePost;
import com.ape.apesystem.mapper.ApePostMapper;
import com.ape.apesystem.service.ApePostService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * @author shaozhujie
 * @version 1.0
 * @description: 岗位service实现类
 * @date 2025/1/1 10:13
 */
@Service
public class ApePostServiceImpl extends ServiceImpl<ApePostMapper, ApePost> implements ApePostService {
}
