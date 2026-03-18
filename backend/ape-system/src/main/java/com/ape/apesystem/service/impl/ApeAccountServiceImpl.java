package com.ape.apesystem.service.impl;

import com.ape.apesystem.domain.ApeAccount;
import com.ape.apesystem.mapper.ApeAccountMapper;
import com.ape.apesystem.service.ApeAccountService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * @author shaozhujie
 * @version 1.0
 * @description: 公告service实现类
 * @date 2025/1/1 10:13
 */
@Service
public class ApeAccountServiceImpl extends ServiceImpl<ApeAccountMapper, ApeAccount> implements ApeAccountService {
}
