import Button from '@/components/Button'
import router from '../router'
import { mapGetters } from 'vuex'

export default {
  name: 'Product',
  data () {
    return {
      counter: 1
    }
  },
  components: {Button},
  methods: {
    addToCart (selectedProduct) {
      this.$store.dispatch('setGetCount', this.counter)
      this.$store.dispatch('setProduct', selectedProduct)
      selectedProduct.selected = true
    },
    delFromCart (selectedProduct) {
      this.$store.dispatch('setDelCount', this.counter)
      this.$store.dispatch('removeProduct', selectedProduct)
      selectedProduct.selected = false
    },
    checkout () {
      router.push({name: 'Checkout'})
    }
  },
  computed: {
    ...mapGetters({
      list: 'getList'
    })
  }
}
