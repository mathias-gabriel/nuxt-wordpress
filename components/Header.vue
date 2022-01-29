<template>

    <header>
      <!-- Fixed navbar -->
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Fixed navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <Menu></Menu>
            <!--<div @click="$router.push(localePath('/about'))">
              <nuxt-link class="text-header-bold text-middle" :to="switchLocalePath('en')">EN</nuxt-link>
            </div>
            <div @click="$router.push(localePath('/about'))">
              <nuxt-link class="text-header-bold text-middle" :to="switchLocalePath('fr')">FR</nuxt-link>
            </div>-->
            <form class="d-flex">
              <select class="select" v-model="$i18n.locale" v-on:input="onChange($event)" >
                <option v-for="locale in availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
              </select>
            </form>
          </div>
        </div>
      </nav>
    </header>

</template>

<script>
  import Menu from '~/components/Menu'
  export default {
    components: { Menu },
    data() {
      return {
        selectedValue: "",
        langues: ""
      };
    },
    created() {
      this.selectedValue = this.$i18n.locale;
      this.langues = this.$i18n.locales;
    },
    methods: {
      onChange(event) {
        this.$router.replace(this.switchLocalePath(event.target.value));
        //this.$router.push(this.localePath('/'));
      }
    },
    computed: {
      availableLocales () {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      }
    }
  }

</script>

<style>
</style>
