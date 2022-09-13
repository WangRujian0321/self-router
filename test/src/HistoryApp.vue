<template>
  <div>
    <router-link to="/">首页</router-link> |
    <router-link to="/about">关于</router-link>
  </div>
  <router-view></router-view>
</template>
<script setup>
import RouterLink from './router-made/RouterLink';
import RouterView from './router-made/RouterView';
</script>
