<template>
  <main>
    <h1>Home page</h1>
  </main>
</template>

<script>
  export default {
    name: 'IndexPage',
    data() {
      return {
        title: "Page d'accueil"
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: "Description de la page d'accueil"
          }
        ]
      }
    }
  }

</script>
