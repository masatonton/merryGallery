import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        secondary:'#b0bec5',
        accent: '#8c9eff',
        error: '#8c9eff',
        background: '#8c9eff',
      },
      dark: {
        primary: '#8c9eff',
        background: '#8c9eff',
      }
    }
  }
});