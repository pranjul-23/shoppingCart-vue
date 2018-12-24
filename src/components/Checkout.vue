<template>
  <div>
    <div class="cart">
        <div class="cart-box">
            <h3>Cart</h3>
            <h3>{{count}}</h3>
        </div>
        <div class="cart-box" v-for="item in details" :key="item.id">
            <div>{{item.title}}</div>
            <div>$ {{item.price}}</div>
        </div>
        <hr>
        <div class="cart-box">
            <div><b>Total</b></div>
            <div><b>$ {{getTotal}}</b></div>
        </div>
    </div>
  </div>
</template>

<script src="@/js/Checkout.js"></script>

<style>
.cart {
    margin: 0 auto;
    width: 25rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 2rem 1.3rem;
    background-color: #cccccc2e;
}
.cart-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
