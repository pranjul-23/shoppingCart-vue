<template>
  <div class="custom-select">
    <select @change="changeValue">
        <option v-for="option in classList" :key="option">{{option}}</option>
    </select>
  </div>
</template>

<script src="@/js/Select.js"></script>

<style>
.custom-select {
  position: relative;
  width: 617px;
}
.custom-select select {
  display: inline-block;
  border: 1px solid #ccc;
  padding: 12px;
  margin: 0;
  font: inherit;
  outline: none;
  line-height: 1.2;
  background: #fff;
  width: 100%;
  -webkit-appearance: none;

  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 4px;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .custom-select select {
    padding-right: 30px;
  }
}

.custom-select select:focus {
  -webkit-box-shadow: 0 0 3px 1px #ccc;
  -moz-box-shadow: 0 0 3px 1px #ccc;
  box-shadow: 0 0 3px 1px #ccc;
}

.custom-select:after {
  content: "▼";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  font-size: 60%;
  line-height: 30px;
  padding: 7px 7px;
  background: #bbb;
  color: white;

  pointer-events: none;

  -webkit-border-radius: 0 6px 6px 0;
  -moz-border-radius: 0 6px 6px 0;
  border-radius: 0 6px 6px 0;
}

.no-pointer-events .custom-select:after {
  content: none;
}
</style>
