import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Output from '@/components/outputs'
import Skill from '@/components/skills'
import About from '@/components/about'
import Post from '@/components/post'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/outputs',
      name: 'outputs',
      component: Output
    },

    {
      path: '/skills',
      name: 'skills',
      component: Skill
    },

    {
      path: '/about',
      name: 'about',
      component: About
    },

    {
      path: '/post',
      name: 'post',
      component: Post
    }
  ]
})
