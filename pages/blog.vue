<template>
  <main class="wp__content">
      <recent-posts-widget limit="5" class="mb-10">Recent Posts</recent-posts-widget>
      <!--<pages-widget limit="5">Pages</pages-widget>-->

  </main>
</template>

<script>
  import RecentPostsWidget from '../components/widgets/RecentPosts.vue';
  import PagesWidget from '../components/widgets/Pages.vue';

  export default {
    components: {
      RecentPostsWidget,
      PagesWidget,
    },
  };
</script>

<style>

</style>
