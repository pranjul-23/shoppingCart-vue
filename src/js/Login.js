import Input from '@/components/Input'
import Button from '@/components/Button'
import { mapGetters } from 'vuex'
import Modal from '@/components/Modal'
import RegisteredUser from '@/components/RegisteredUser'
import router from '../router'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      isEmail: false,
      isPassword: false,
      isValidEmail: false,
      isModalVisible: false,
      isEmailCorrect: false,
      isPasswordCorrect: false
    }
  },
  methods: {
    getInput (e, field) {
      if (field === 'email') {
        this.email = e.target.value
      } else {
        this.password = e.target.value
      }
    },
    validateForm () {
      var emailRegex = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/
      if (!this.email) {
        this.isEmail = true
        this.isValidEmail = false
        this.isEmailCorrect = false
      } else if (this.email && emailRegex.test(this.email) === false) {
        this.isValidEmail = true
        this.isEmail = false
      } else {
        this.isValidEmail = false
        this.isEmail = false
        this.isEmailCorrect = false
      }
      if (this.password && this.password.length >= 6) {
        this.isPassword = false
      } else {
        this.isPassword = true
        this.isPasswordCorrect = false
      }
      if (this.isEmail === false && this.isPassword === false && this.isValidEmail === false) {
        return true
      } else {
        return false
      }
    },
    login (e) {
      e.preventDefault()
      if (this.validateForm()) {
        const registeredEmail = this.userData.filter(user => user.email === this.email)
        const registeredPassword = this.userData.filter(user => user.password === this.password)
        if (!registeredEmail.length) {
          this.isEmailCorrect = true
        } else {
          this.isEmailCorrect = false
        }
        if (!registeredPassword.length) {
          this.isPasswordCorrect = true
        } else {
          this.isPasswordCorrect = false
        }
        if (this.isEmailCorrect === false && this.isPasswordCorrect === false) {
          this.showModal()
        }
      } else {
        return false
      }
    },
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
      this.credentialFlag.isLogin = false
      this.credentialFlag.isSignUp = false
      this.credentialFlag.isLogOut = true
      router.push({name: 'RegisteredUser'})
    }
  },
  computed: {
    ...mapGetters({
      userData: 'getUserData',
      credentialFlag: 'getCredentialFlag'
    })
  },
  components: { Input, Button, Modal, RegisteredUser }
}
