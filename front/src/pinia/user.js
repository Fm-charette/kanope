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
        return (response.status);
      }).catch(err => {
        return err;
      })
    }
  }
});

