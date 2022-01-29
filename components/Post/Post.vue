<template>
  <div class="bv-example-row pt-4">
    <template v-if="post">
      <h1>{{ post.title.rendered }}</h1>
      <div v-html="post.content.rendered"></div>
    </template>
    <Loader v-else/>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../partials/Loader.vue";
// eslint-disable-next-line no-unused-vars
import { mapGetters } from "vuex";
import SETTINGS from "../../settings";

export default {
  props: ['id'],
  data() {
    return {
      post: false,
      description: ""
    };
  },

  computed: {},

  beforeMount() {
    this.getPost();
  },

  methods: {
    getPost: function() {
      axios
        .get(
          SETTINGS.API_BASE_PATH + "posts?slug=" + this.id
        )
        .then(response => {
          this.post = response.data[0];
          this.description = this.post.yoast_head_json.description;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },

  components: {
    Loader
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ]
    }
  }
};
</script>
