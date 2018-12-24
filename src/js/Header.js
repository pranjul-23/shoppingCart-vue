import { mapGetters } from 'vuex'
import router from '../router'

export default {
  name: 'Header',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      count: 'getCounts',
      credentialFlag: 'getCredentialFlag'
    })
  },
  methods: {
    logOutUser () {
      this.credentialFlag.isLogin = true
      this.credentialFlag.isSignUp = true
      this.credentialFlag.isLogOut = false
      router.push({name: 'SignUp'})
    }
  }
}
