<template>
  <div class="container">
    <div class="main-wrapper">
      <div class="wrapper">
        <form>
          <div class="mb-md">
            <label for="name">Name</label>
            <Input
              inputType="text"
              nameType="name"
              :requiredType="true"
              :changeInput="(event) => {getInput(event, 'name')}"
            />
            <span class="text-danger" v-if="isName">Please enter name</span>
          </div>
          <div class="mb-md">
            <label for="phone">Phone</label>
            <Input
              inputType="text"
              nameType="phone"
              :requiredType="false"
              :changeInput="(event) => {getInput(event, 'phone')}"
            />
            <span class="text-danger" v-if="isValidPhone">Please enter 10 digits no without zero</span>
          </div>
          <div class="mb-md">
            <label for="email">Email*</label>
            <Input
              inputType="text"
              nameType="email"
              :requiredType="true"
              :changeInput="(event) =>{getInput(event, 'email')}"
            />
            <span class="text-danger" v-if="isEmail">Please enter email</span>
            <span class="text-danger" v-if="isValidEmail">Please enter valid email</span>
          </div>
          <div class="mb-md">
            <label for="password">Password*</label>
            <Input
              inputType="password"
              nameType="password"
              :requiredType="true"
              :changeInput="(event) =>{getInput(event, 'password')}"
            />
            <span class="text-danger" v-if="isPassword">Please enter password atleast 6 digits</span>
          </div>
          <div class="mb-md">
            <label for="confirmPassword">Confirm Password</label>
            <Input
              inputType="password"
              nameType="confirmPassword"
              :requiredType="false"
              :changeInput="(event) =>{getInput(event, 'confirmPassword')}"
            />
            <span class="text-danger" v-if="isConfirmPassword">Please confirm password</span>
          </div>
          <div class="mb-md">
            <label for="image">Upload Image</label>
            <Input
              inputType="file"
              nameType="image"
              :requiredType="false"
              :changeInput="previewImage"
            />
          </div>
          <Button :handleClick="signUp">Sign Up</Button>
        </form>
      </div>
    </div>
    <div>
      <Modal v-if="isModalVisible">
        <template slot="header">
          <h4>Details</h4>
        </template>
        <template slot="body">{{msgForUser}}</template>
        <template slot="footer">
          <Button :handleClick="closeModal">Close</Button>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script src="@/js/SignUp.js"></script>

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
