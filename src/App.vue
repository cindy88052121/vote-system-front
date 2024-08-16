<template>

  <nav>
    <router-link to="/front">前台</router-link> |
    <router-link to="/backage">後台</router-link>
  </nav>
  <router-view/>

</template>

<script>
export default {
  name: "App"
};

</script>

<style scoped>
nav {
  display: flex;
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中（可選） */
  padding: 1rem; /* 內邊距，根據需要調整 */
  background-color: #f8f9fa; /* 背景顏色（可選） */
}
</style>