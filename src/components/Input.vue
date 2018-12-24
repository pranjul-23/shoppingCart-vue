<template>
  <div>
    <input :type="inputType" :name="nameType" class="form-control" @change="changeInput" :required="requiredType">
  </div>
</template>

<script src="@/js/Input.js"></script>

<style>
input[type="text"]:focus,
input[type="password"]:focus {
  outline: none;
  border: 1px solid #223875;
}
.form-control {
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 5px;
}
</style>
