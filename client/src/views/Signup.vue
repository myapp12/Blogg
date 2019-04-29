<template>
  <v-layout row wrap>
    <v-flex xs4 offset-xs4 class="mt-5 center" dark>
      <h2 class="colorGreen">Đăng nhập</h2>
      <v-text-field label="FirstName" v-model="firstName"></v-text-field>

      <v-text-field label="LastName" v-model="lastName"></v-text-field>

      <v-text-field label="E-mail" v-model="email"></v-text-field>

      <v-text-field label="Password" v-model="password"></v-text-field>

      <v-text-field label="Confirm Password" v-model="confirmPassword"></v-text-field>

      <v-btn color="green" @click="createUser" dark>Đăng ký</v-btn>
      <p>
        Bạn đã có tài khoản?
        <router-link flat to="/login">Đăng nhập</router-link>
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    createUser: async function() {
      let newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      };
      await AuthenticationService.register(newUser);
    }
  }
};
</script>

<style>
</style>
