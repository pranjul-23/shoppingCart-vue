import { mapGetters } from 'vuex'
import Button from '@/components/Button'

export default {
  name: 'Test',
  created () {
    this.$store.dispatch('setDetails')
  },
  computed: {
    ...mapGetters({
      details: 'getUserDetails'
    })
  },
  components: {Button}
}
