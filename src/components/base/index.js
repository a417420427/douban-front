import Vue from 'vue'
import BaseInput from './BaseInput.vue'
import FontIcon from './FontIcon.vue'
import Rate from './Rate.vue'
import SubjectInfo from './SubjectInfo.vue'
import SubjectMark from './SubjectMark.vue'
import SubjectIntro from './SubjectIntro.vue'
import Credits from './Credits.vue'
import PageFooter from './PageFooter.vue'
import Interests from './Interests.vue'
import Discuss from './Discuss.vue'

import TypeList from './TypeList.vue'

Vue.component(FontIcon.name, FontIcon)
Vue.component(BaseInput.name, BaseInput)
Vue.component(Interests.name, Interests)
Vue.component(PageFooter.name, PageFooter)
Vue.component(TypeList.name, TypeList)
Vue.component(Discuss.name, Discuss)
Vue.component(Credits.name, Credits)
Vue.component(SubjectIntro.name, SubjectIntro)
Vue.component(SubjectInfo.name, SubjectInfo)
Vue.component(SubjectMark.name, SubjectMark)
Vue.component(Rate.name, Rate)
