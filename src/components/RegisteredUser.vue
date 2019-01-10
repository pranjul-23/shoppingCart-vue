<template>
  <div class="text-center">
    <div v-for="(item, index) in userData" :key="index" class="user-box">
      <p>Name: {{item.name}}</p>
      <p>Phone: {{item.phone}}</p>
      <p>Class: {{item.class}}</p>
      <p>Email: {{item.email}}</p>
      <img :src="item.url" alt="description" class="image-box" v-if="item.url.length">
    </div>
  </div>
</template>

<script src="@/js/RegisteredUser.js"></script>

<style>
.text-center {
  text-align: center;
}
.image-box {
  width: 150px;
  height: 180px;
}
.user-box {
    padding: 10px;
    width: 30%;
    box-shadow: 1px 1px 4px 1px #ccc;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>
