<template>
  <div>
    <footer class="footer f-nav fixed-bottom">
      <div class="f-text">@2018</div>
    </footer>
  </div>
</template>

<script src="@/js/Footer.js"></script>

<style>
.f-nav {
  background: #223875;
  max-height: 40px;
  padding: 10px 20px;
}
.fixed-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 111;
}
.f-text {
  font-size: 18px;
  line-height: 20px;
  color: #ccc;
}
</style>
