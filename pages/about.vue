<template>
  <h1>test about</h1>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      title: "a propos"
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Description de la page d'a propos"
        }
      ]
    }
  }
}
</script>
