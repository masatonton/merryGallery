<template>
  <v-app>
    <v-content>
      <Scrool/>
      <Toolbar/>
      <Menu/>

      <div>
      <router-view>
      </router-view>
      </div>

    </v-content>
  </v-app>
</template>

<script>

import Toolbar from './components/Toolbar';
import Scrool from './components/Scrool';
import Menu from './components/Menu';


export default {
  name: 'App',

  components: {
    Toolbar,
    Scrool,
    Menu,
    // Girlscard,
  },

  data: () => ({
    //
  }),
};
</script>


<style scoped>

    
</style>>