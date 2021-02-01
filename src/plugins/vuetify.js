import Vue from 'vue';
// import Vuetify from 'vuetify/lib/framework';
import vSelect from 'vue-select';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);
Vue.component('v-select', vSelect)

export default new Vuetify({
});
