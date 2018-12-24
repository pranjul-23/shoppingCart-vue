import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import img from '@/assets/logo.png'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    details: {},
    prodList: [],
    list: [
      {id: 1, img: img, title: 'Product 1', price: 200, selected: false},
      {id: 2, img: img, title: 'Product 2', price: 400, selected: false},
      {id: 3, img: img, title: 'Product 3', price: 600, selected: false},
      {id: 4, img: img, title: 'Product 4', price: 700, selected: false},
      {id: 5, img: img, title: 'Product 2', price: 400, selected: false},
      {id: 6, img: img, title: 'Product 3', price: 600, selected: false},
      {id: 7, img: img, title: 'Product 4', price: 700, selected: false}
    ],
    userData: [],
    msgForUser: '',
    credentialFlag: {
      isLogin: true,
      isSignUp: true,
      isLogOut: false
    }
  },
  getters: {
    getCounts (state) {
      return state.count
    },
    getUserDetails (state) {
      return state.details
    },
    getProducts (state) {
      return state.prodList
    },
    getList (state) {
      return state.list
    },
    getUserData (state) {
      return state.userData
    },
    getMsgForUser (state) {
      return state.msgForUser
    },
    getCredentialFlag (state) {
      return state.credentialFlag
    }
  },
  mutations: {
    getCount (state, value) {
      state.count += value
    },
    delCount (state, value) {
      state.count -= value
    },
    getDetails (state, value) {
      state.details = value
    },
    getProduct (state, value) {
      state.prodList.unshift(value)
    },
    delProduct (state, selectedProduct) {
      const currentSelectedProduct = state.prodList.filter(product => product.id !== selectedProduct.id)
      state.prodList = currentSelectedProduct
    },
    userData (state, value) {
      const isUserSignedIn = state.userData.filter(user => {
        return user.email === value.email
      })
      if (!isUserSignedIn.length) {
        state.userData.unshift(value)
        state.msgForUser = 'User Registered Successfully!'
      } else {
        state.msgForUser = 'User Exist Already!'
      }
    }
  },
  actions: {
    setGetCount ({commit}, value) {
      commit('getCount', value)
    },
    setDelCount ({commit}, value) {
      commit('delCount', value)
    },
    setDetails ({commit}) {
      Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => commit('getDetails', response.data))
    },
    setProduct ({commit}, value) {
      commit('getProduct', value)
    },
    removeProduct ({commit}, value) {
      commit('delProduct', value)
    },
    setUserData ({commit}, value) {
      commit('userData', value)
    }
  }
})
