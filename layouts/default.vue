<template>
  <div>
    <Header/>
    <main class="flex-shrink-0">
      <nuxt />
    </main>
    <Footer/>
  </div>

<!--  <div>
    <Header/>
  <main class="flex-shrink-0">
  </main>-->
  <!-- Begin page content
    <main class="flex-shrink-0">
      <nuxt />
    </main>
    <Footer/>-->
  <!--</div>-->
</template>

<script>
  import Header from '~/components/Header'
  import Footer from '~/components/Footer'
  export default {
    components: {
      Header,
      Footer
    },
    computed: {
    },
    watch: {
    }
  }
</script>

<style>
  main > .container {
    padding: 60px 15px 0;
  }
</style>
