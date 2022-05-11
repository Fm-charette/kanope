<template>
  <q-form @submit.prevent="submitForm">

    <q-input
      outlined
      v-model="email"
      label="E-mail"
      class="q-my-md"
      :rules="[val => validateEmail(val) || 'Email invalide']"
    />

    <q-input
      type="password"
      outlined
      v-model="password"
      label="Mot de passe"
      class="q-my-md"
      :rules="[ val => val.length >= 4 || 'Minimum 4 caractère']"
      lazy-rules
    />

    <q-input
      type="password"
      outlined
      v-model="password_confirmation"
      label="Confirmer le mot de passe"
      class="q-my-md"
      :rules="[ val => val === password || 'Les mots de passe sont différents']"
      lazy-rules
    />

    <q-btn
      type="submit"
      color="primary"
      label="Créer un compte"
      v-on:click="validateCreateUser" 
    />
  </q-form>
</template>

<script setup>
// reactive non réasignable 
// ref type primitif
  import {ref, reactive} from 'vue'
  import {userStore} from '../../pinia/user'

  const userAuth = userStore();
  const email = ref("");
  const password = ref("");

    function validateEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    }
  function validateCreateUser() {
    const bodyData = reactive({
      email: email.value,
      password: password.value
    })
    userAuth.createUser(JSON.stringify(bodyData))
  }

</script>

<style>

</style>