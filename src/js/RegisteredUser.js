import { mapGetters } from 'vuex'

export default {
  name: 'RegisteredUser',
  computed: {
    ...mapGetters({
      userData: 'getUserData'
    })
  }
}
