import Vue from 'vue'
import Router from 'vue-router'
import Event from '@/components/Event'
import Home from '@/components/Home'
import Team from '@/components/Team'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    }
  ]
})
