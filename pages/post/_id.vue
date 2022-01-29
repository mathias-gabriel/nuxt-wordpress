<template>
  <section>
    <post :id="id"></post>
  </section>
</template>

<script>
  import Post from '../../components/Post/Post.vue';

  export default {
    components: {
      Post
    },
    data(){
      return{
        id : null
      }
    },
    created(){
      var _id = this.$route.params.id;
      this.id = _id;
    }
  }
</script>
