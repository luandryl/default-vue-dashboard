'use strict'
import config from '../config/app'
import axios from 'axios'

const API_URL = config.getApiURL()

export default {
  login (instance, credentials) {
    axios.post(API_URL + 'auth/login/', credentials).then((response) => {
      if (response.status === 200) {
        localStorage.setItem('auth', JSON.stringify(response.data))
        instance.$router.push('/')
      }
    }).catch((error) => {
      console.log(error.response.data)
      instance.openSnack('Login ou Senha Incorretos')
    })
  },
  logout () {
    localStorage.removeItem('auth')
    location.href = '#/login'
  }
}
