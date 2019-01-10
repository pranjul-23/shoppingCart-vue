import Input from '@/components/Input'
import Button from '@/components/Button'
import router from '../router'
import Modal from '@/components/Modal'
import { mapGetters } from 'vuex'
import Select from '@/components/Select'

export default {
  name: 'SignUp',
  data () {
    return {
      name: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      url: '',
      isName: false,
      isValidPhone: false,
      isEmail: false,
      isPassword: false,
      isConfirmPassword: false,
      isValidEmail: false,
      isModalVisible: false,
      className: ['A', 'B', 'C', 'XII'],
      class: 'A'
    }
  },
  methods: {
    getInput (e, field) {
      if (field === 'name') {
        this.name = e.target.value
      } else if (field === 'phone') {
        this.phone = e.target.value
      } else if (field === 'email') {
        this.email = e.target.value
      } else if (field === 'password') {
        this.password = e.target.value
      } else if (field === 'confirmPassword') {
        this.confirmPassword = e.target.value
      } else if (field === 'class') {
        this.class = e.target.value
      } else {
        this.url = e.target.value
      }
    },
    validateForm () {
      var emailRegex = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/
      var phoneRegex = /^\d{10}$/

      if (!this.name) {
        this.isName = true
      } else {
        this.isName = false
      }
      if (this.phone && !phoneRegex.test(this.phone)) {
        this.isValidPhone = true
      } else {
        this.isValidPhone = false
      }
      if (!this.email) {
        this.isEmail = true
        this.isValidEmail = false
      } else if (this.email && emailRegex.test(this.email) === false) {
        this.isValidEmail = true
        this.isEmail = false
      } else {
        this.isValidEmail = false
        this.isEmail = false
      }
      if (this.password && this.password.length >= 6) {
        this.isPassword = false
      } else {
        this.isPassword = true
      }
      if (this.confirmPassword !== this.password) {
        this.isConfirmPassword = true
      } else {
        this.isConfirmPassword = false
      }
      if (this.isEmail === false && this.isPassword === false && this.isConfirmPassword === false && this.isValidEmail === false) {
        return true
      } else {
        return false
      }
    },
    signUp (e) {
      e.preventDefault()
      let data = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        url: this.url,
        class: this.class
      }
      if (this.validateForm()) {
        this.showModal()
        this.$store.dispatch('setUserData', data)
      } else {
        return false
      }
    },
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
      if (this.msgForUser === 'User Registered Successfully!') {
        router.push({ name: 'Login' })
      } else {
        return false
      }
    },
    previewImage: function (event) {
      var input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = (e) => {
          this.url = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    }
  },
  computed: {
    ...mapGetters({
      msgForUser: 'getMsgForUser'
    })
  },
  components: { Input, Button, Modal, Select }
}
