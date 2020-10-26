import Vue from 'vue'
import moment from 'moment'
import VueMoment from 'vue-moment'

moment.locale('en')

Vue.use(VueMoment, {
  moment,
})

export default VueMoment
