import { mapGetters } from 'vuex'

export default {
  name: 'Checkout',
  computed: {
    ...mapGetters({
      details: 'getProducts',
      count: 'getCounts'
    }),
    getTotal () {
      var sum = 0
      this.details.map((value) => {
        sum += value.price
      })
      return sum
    }
  }
}
