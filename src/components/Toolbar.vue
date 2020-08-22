<template>

<v-app-bar app hide-on-scroll>

      <v-toolbar-title>MerryGallery</v-toolbar-title>

      <v-spacer></v-spacer>
       <v-switch
        v-model="$vuetify.theme.dark"
        hide-details
        inset
      ></v-switch>
      
      <v-btn to="/recruit">
      求人
      </v-btn>

</v-app-bar>

</template>

<script>
  export default {
    props: {
      attrs: {
        type: Object,
        default: () => ({}),
      },
    },

    data: vm => ({
      initialDark: vm.$vuetify
        ? vm.$vuetify.theme.dark
        : false,
    }),

    beforeDestroy () {
      if (!this.$vuetify) return

      this.$vuetify.theme.dark = this.initialDark
    },
  }
</script>