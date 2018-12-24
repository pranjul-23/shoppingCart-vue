<template>
  <div>
    <div class="mb-1" v-for="item in details" :key="item.id">
      <h4>{{item.title}}</h4>
      <span class="mb-1">{{item.body}}</span>
    </div>
  </div>
</template>

<script src="@/js/Test.js"></script>

<style>
.mb-1 {
  margin-bottom: 1rem;
}
</style>
