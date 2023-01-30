<template>
  <div class="home">
    <h2>我和曹诗婷的家</h2>
    <van-cell-group inset>
      <van-field v-model="value" label="文本" placeholder="请输入用户名" />
      <!-- 输入任意文本 -->
      <van-field v-model="text" label="文本" />
      <!-- 输入手机号，调起手机号键盘 -->
      <van-field v-model="tel" type="tel" label="手机号" />
      <!-- 允许输入正整数，调起纯数字键盘 -->
      <van-field v-model="digit" type="digit" label="整数" />
      <!-- 允许输入数字，调起带符号的纯数字键盘 -->
      <van-field v-model="number" type="number" label="数字" />
      <!-- 输入密码 -->
      <van-field v-model="password" type="password" label="密码" />
      <van-field label="文本" model-value="输入框只读" readonly />
      <van-field label="文本" model-value="输入框已禁用" disabled />
    </van-cell-group>
    <van-cell-group inset>
      <van-field
        v-model="value1"
        label="文本"
        left-icon="smile-o"
        right-icon="warning-o"
        placeholder="显示图标"
      />
      <van-field
        v-model="value2"
        clearable
        label="文本"
        left-icon="music-o"
        placeholder="显示清除图标"
      />
    </van-cell-group>
  </div>
</template>

<script setup>
import { ref } from "vue";
const value = ref("");
const tel = ref("");
const text = ref("");
const digit = ref("");
const number = ref("");
const password = ref("");
const value1 = ref("");
const value2 = ref("123");
</script>

<style lang="less" scoped></style>
