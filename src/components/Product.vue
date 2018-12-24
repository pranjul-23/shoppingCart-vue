<template>
  <div>
    <div class="prod-wrapper">
      <div v-for="(item, index) in list" :key="index">
        <div class="prod-box">
          <img :src="item.img" alt="description" class="image">
          <div>Brand: {{item.title}}</div>
          <div>Price: {{item.price}}</div>
          <div class="mt-2">
            <Button :handleClick="() => {addToCart(item)}" :isDisabled="item.selected">Add To Cart</Button>
          </div>
          <div class="mt-2">
            <Button :handleClick="() => {delFromCart(item)}" :isDisabled="!item.selected">Remove</Button>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-5 float-right">
      <Button :handleClick="checkout">Checkout</Button>
    </div>
  </div>
</template>

<script src="@/js/Product.js"></script>

<style lang="scss">
.image {
  width: 75px;
  height: 75px;
}
.prod-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.mt-2 {
  margin-top: 1rem;
}
.mb-5 {
  margin-bottom: 5rem;
}
.prod-box {
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  padding: 40px;
  margin: 30px;
}
.float-right {
  float: right !important;
}
</style>
