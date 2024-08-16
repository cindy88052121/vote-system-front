<template>
    <div id="home">
        若欲投票，請選擇「前台」；<br>
        欲投票項目管理，請選擇「後台」；
    </div>
</template>

<script>
export default {
    name: 'HomeView'
}
</script>

<style scoped>
#home {
  display: flex;
  justify-content: center; /* 水平置中 */
  align-items: center; /* 垂直置中 */
  text-align: center; /* 文字置中 */
  height: 100vh; /* 使容器高度為視口高度，以垂直置中 */
}
</style>
