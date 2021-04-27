import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify, {
  iconfont: 'md',
});

//TODO: 
const opts = {
  theme: {
    themes: {
      light: {
        primary: '#0d8f30',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      }
    }
  }
}

export default new Vuetify(opts)