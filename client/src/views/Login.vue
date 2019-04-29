<template>
  <v-layout row wrap>
    <v-flex xs4 offset-xs4 class="mt-5 center" dark>
      <h2 class="colorGreen">Đăng nhập</h2>

      <v-text-field label="E-mail"></v-text-field>

      <v-text-field label="Password"></v-text-field>
      <v-btn color="green" dark>Đăng nhập</v-btn>
      <p>
        Bạn chưa có tài khoản?
        <router-link flat to="/signup">Đăng ký</router-link>
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>

<style>
</style>
