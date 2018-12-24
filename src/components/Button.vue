<template>
  <div>
    <button
      @click="handleClick"
      :disabled="isDisabled"
      :class="{'isDisable': isDisabled, 'isEnable': !isDisabled}"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script src='@/js/Button.js'></script>

<style lang="scss">
button {
  background-color: #4caf46d9;
  border: none;
  border-radius: 2px;
  color: #fff;
  padding: 12px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
    color: #fff;
  }
  &:focus {
    color: #fff;
    outline: none;
    background-color: #4caf50;
  }
}
.isDisable {
  background-color: #ccc;
  cursor: not-allowed;

  &:hover {
    background-color: #ccc;
  }
}
.isEnable {
  background-color: #4caf50;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
    color: #fff;
  }
  &:focus {
    color: #fff;
    outline: none;
    background-color: #4caf50;
  }
}
</style>
