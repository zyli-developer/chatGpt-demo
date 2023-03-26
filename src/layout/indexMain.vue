<template>
  <div class="layout">
    <header class="header">
      <img src="@/assets/logo.svg">
    </header>
    <section class="main">
      <div class="chat">
        <div class="user">
          你好
        </div>
        <div class="gpt">
        你好</div>
      </div>
      <div class="edit">
        <textarea ></textarea>
        <input type="button" value="发送" class="edit-send-btn">
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.layout {
  background-color: #373737;
  // width: 100%;
  // height: 100%;
  .header {
    // width: 80%;
    margin: auto;
    background-color: #fff;
    img {
      // height: 40px;
      width: 100px;
    }
  }
  .main {
    // width: 80%;
    // height: 80%;
    margin: auto;
    .chat {
      // width: 100%;
      padding: 5px ;
      // height: 300rem;
    }
  }
}
</style>
