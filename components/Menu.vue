<template>
  <ul class="navbar-nav me-auto mb-2 mb-md-0">
    <li class="nav-item">
      <nuxt-link to="/" class="nav-link">{{ $t('home') }}</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link to="/blog" class="nav-link">Blog</nuxt-link>
    </li>
    <li class="nav-item" v-if="isAuthenticated==false">
      <nuxt-link to="/register" class="nav-link">register</nuxt-link>
    </li>
    <li class="nav-item" v-if="isAuthenticated==false">
      <nuxt-link to="/login" class="nav-link">login</nuxt-link>
    </li>
    <li class="nav-item" v-if="isAuthenticated==true">
      <nuxt-link to="/profile" class="nav-link">profile</nuxt-link>
    </li>
    <li class="nav-item" v-if="isAuthenticated==true">
      <a class="nav-link"  @click="logout">Logout</a>
    </li>
    <li class="nav-item">
      <nuxt-link to="/about" class="nav-link">About</nuxt-link>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </li>
  </ul>
</template>

<style>
</style>

<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters(['isAuthenticated', 'loggedInUser'])
    },
    methods: {
      async logout() {
        await this.$auth.logout();
      },
    },
  }
</script>
