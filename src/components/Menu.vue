<template>

  <v-app-bar app  fixed bottom> 
    <v-bottom-navigation 
      :value="activeBtn"
      color="purple lighten-1"
      absolute>
      <!-- ボトムナビゲーション -->
      <v-btn v-for="menu in menus" :key="menu.title" :to="menu.url">
        <span>{{ menu.title }}</span>
        <v-icon>{{ menu.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>

  </v-app-bar>

</template>

<script>
export default {
  name: 'App',
  data: () => ({
      activeBtn: 0,
      drawer: false,
      menus: [
        { title: 'Home', icon: 'mdi-web', url: '/' },
        { title: 'Price System', icon: 'mdi-home', url: '/price' },
        { title: 'Guide', icon: 'mdi-heart', url: '/guide' },
        { title: 'Reserve', icon: 'mdi-information-variant', url: '/reserve' },
        { title: 'Q＆A', icon: 'mdi-information-variant', url: '/qa' }
      ]
  })
}
</script>

<style scoped>
 .v-bottom-navigation{
   width:100vw;
 }

 .v-toolbar__content{
   width:100vw;
 }
</style>>