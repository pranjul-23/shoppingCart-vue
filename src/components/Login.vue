<template>
  <div class="container">
    <div class="main-wrapper">
      <div class="wrapper">
        <form>
          <div class="mb-md">
            <label for="email">Email</label>
            <Input inputType="text" nameType="email" :requiredType="true" :changeInput="(event) =>{getInput(event, 'email')}"/>
            <span class="text-danger" v-if="isEmail">Please enter email</span>
            <span class="text-danger" v-if="isValidEmail">Please enter valid email</span>
            <span class="text-danger" v-if="isEmailCorrect">Please enter correct email</span>
          </div>
          <div class="mb-md">
            <label for="password">Password</label>
            <Input inputType="password" nameType="password" :requiredType="true" :changeInput="(event) =>{getInput(event, 'password')}" minlength="6" />
            <span class="text-danger" v-if="isPassword">Please enter password atleast 6 digits</span>
            <span class="text-danger" v-if="isPasswordCorrect">Please enter correct password</span>
          </div>
          <Button :handleClick="login">Login</Button>
        </form>
      </div>
    </div>
    <div>
      <Modal v-if="isModalVisible">
        <template slot="header">
          <h4>Details</h4>
        </template>
        <template slot="body">
          User Logged in Successfully!
        </template>
        <template slot="footer">
          <Button :handleClick="closeModal">Close</Button>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script src="@/js/Login.js"></script>

<style>
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.main-wrapper {
  width: 50%;
  padding: 15px;
  margin: 0 auto;
  background: #cccccc26;
  box-shadow: 0px 1px 4px 2px #92929229;
}
label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
}
.wrapper {
  width: 96%;
}
.mb-md {
  margin-bottom: 15px;
}
.text-danger {
  color: red;
}
</style>
