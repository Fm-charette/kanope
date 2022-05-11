<template>
  <q-page padding>
    <q-card class="login">
      <q-tabs
        v-model="tab"
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Se connecter" />
        <q-tab name="register" label="Créer un compte" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <loginForm/>
        </q-tab-panel>

        <q-tab-panel name="register">
          <registerForm/>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script setup>

import loginForm from '../components/Login/loginForm';
import registerForm from '../components/Login/registerForm';
import {ref} from 'vue';

const tab = ref('login');

</script>

<style scoped>
  .login {
    max-width: 500px;
    width: auto;
    margin: 0 auto;
  }
</style>