import RdfForm from './components/RdfForm.vue'

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import DatetimePicker from 'vuetify-datetime-picker'
import 'vuetify/dist/vuetify.min.css'
import RdfFieldDate from './components/fields/RdfFieldDate.vue'
import RdfFieldString from './components/fields/RdfFieldString.vue'
import RdfFieldText from './components/fields/RdfFieldText.vue'
import RdfFieldTags from './components/fields/RdfFieldTags.vue'

Vue.component('RdfFieldDate', RdfFieldDate)
Vue.component('RdfFieldString', RdfFieldString)
Vue.component('RdfFieldTags', RdfFieldTags)
Vue.component('RdfFieldText', RdfFieldText)

Vue.use(Vuetify)
Vue.use(DatetimePicker)

Vue.config.productionTip = false

new Vue({
  vuetify: new Vuetify(),
  components: {
    RdfForm
  }
}).$mount('#app')
