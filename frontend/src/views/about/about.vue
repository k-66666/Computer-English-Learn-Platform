<template>
  <div class="about">
    <headers></headers>
    <div class="about1">
      <div class="about2">关于我</div>
      <div class="about3">学习的同时也记得休息休息眼睛，保护好视力！</div>
    </div>
    <div class="about4">
      <div class="about5">
        <img class="about6" src="../../assets/image/avatar (3).jpeg">
        <div class="about7">ONESTAR</div>
        <div>_______________________________________</div>
        <div class="about8">基于SpringBoot的code learning英语学习平台</div>
        <div class="about8">作者：李良凯</div>
        <div class="about8">学校：大连工业大学艺术与信息工程学院</div>
        <div class="about8">院系：计算机系</div>
        <div class="about8">专业：计算机科学与技术</div>
        <div class="about8">QQ：3217408721</div>
        <div class="about8">微信：17513607707</div>
        <div class="about8">电话：17513607707</div>
        <div class="about8">微博：快餐店转圈圈</div>
        <div class="about8">邮箱：3217408721@qq.com</div>
        <div class="about8">地址：辽宁省大连市庄河市</div>
      </div>
    </div>
    <bottoms></bottoms>
  </div>
</template>

<script>
  import headers from '@/components/header'
  import bottoms from '@/components/bottom'
  export default {
    data() {
      return{
        
      }
    },
    components: {
      headers,
      bottoms
    },
    methods: {
      
    },
    created() {
     
    },
    mounted() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
 }
</script>

<style scoped>
  @import url('../../assets/css/about.css');
</style>