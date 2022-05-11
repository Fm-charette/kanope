<template>
  <q-form @submit.prevent="submitForm">
    <q-input
      outlined
      v-model="email"
      label="E-mail"
      class="q-my-md"
      :rules="[val => validateEmail(val) || 'Email invalide']"
      lazy-rules
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

    <q-btn
      type="submit"
      color="primary"
      label="Se connecter"
    />
  </q-form>
</template>

<script setup>
  import {ref, reactive} from 'vue'
  import {userStore} from '../../pinia/user'

  const email = ref("");
  const password = ref("");

  function validateEmail (email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
  }

  function loginUser() {
    const body = reactive({
      email: email.value,
      password: password.value
    })
  }
</script>

<style>

</style>
