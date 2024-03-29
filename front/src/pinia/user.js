import { defineStore } from 'pinia'
import apiManager from '../http/apiManager'

export const userStore = defineStore({
  id: 'createUser',
  state: () => ({
    email: '',
    password: '',
  }),
  getters: {

  }, 
  actions: {
    async createUser(bodyData) {
      return await apiManager.register(bodyData).then(response => {
        console.log("Res", response.status);
        return (response.status);
      }).catch(err => {
        return err;
      })
    },
    async userLogin(id) {
      return await apiManager.login(id).then(response => {
        localStorage.setItem("access_token", response.data);
        console.log("Res", response.status);
        setAuthToken(res.data.token);
        return (response.status);
      }).catch(err => {
        return err;
      })
    },
    async setAuthToken() {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      localStorage.setItem(AUTH_TOKEN_KEY, token);
    },
    async getAuthtoken() {
      return localStorage.getItem(AUTH_TOKEN_KEY);
    },
    async clearAurthToken() {
      axios.defaults.headers.common['Authorization'] = ''
      localStorage.removeItem(AUTH_TOKEN_KEY);
    },
    async isLoggedIn() {
      let authToken = getAuthToken()
      return !!authToken && !isTokenExpired(authToken);
    }
  }
});

