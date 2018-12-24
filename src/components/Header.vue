<template>
  <div>
    <header class="header h-nav fixed-top">
      <div class="h-brand">
        <div>Shopping Cart</div>
        <ul class="h-navbar">
          <li>
            <router-link to="/">Product</router-link>
          </li>
          <li>
            <router-link to="/test">Test</router-link>
          </li>
        </ul>
      </div>
      <div>
        <ul class="h-navbar">
          <li>
            <a class="btn">{{count}}&nbsp;Item Added To Cart</a>
          </li>
          <li>
            <router-link class="btn btn-primary" to="/signUp" v-if="credentialFlag.isSignUp">Sign Up</router-link>
          </li>
          <li>
            <router-link class="btn btn-primary" to="/login" v-if="credentialFlag.isLogin">Login</router-link>
          </li>
          <li>
            <span class="btn btn-primary" v-if="credentialFlag.isLogOut" @click="logOutUser">Logout</span>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script src="@/js/Header.js"></script>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 999;
}
.h-nav {
  background: #223875;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.fixed-top {
  max-height: 40px !important;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.h-brand {
  display: flex;
  font-size: 18px;
  text-decoration: none;
  color: #ccc;
}
.h-navbar {
  display: flex;
  list-style-type: none;
  color: #ccc;
  margin-bottom: 0;
  margin-top: 0;
}
.h-navbar li {
  padding: 0 0.5rem;
}
.h-navbar li a {
  text-decoration: none;
  color: #ccc;

  &:hover {
    color: #fff;
  }
}
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
.btn-primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}
.mr-1 {
  margin-right: 1rem;
}
</style>
