import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import Charts from '@/views/Charts'
import Widgets from '@/views/Widgets'

// Views - Components
import Buttons from '@/views/components/Buttons'
import SocialButtons from '@/views/components/SocialButtons'
import Cards from '@/views/components/Cards'
import Forms from '@/views/components/Forms'
import Modals from '@/views/components/Modals'
import Switches from '@/views/components/Switches'
import Tables from '@/views/components/Tables'

// Views - Icons
import FontAwesome from '@/views/icons/FontAwesome'
import SimpleLineIcons from '@/views/icons/SimpleLineIcons'

// Views - Pages
import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import Login from '@/views/pages/Login'
import Register from '@/views/pages/Register'

Vue.use(Router)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: '홈',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: '대시보드',
          component: Dashboard
        },
        {
          path: 'charts',
          name: '차트',
          component: Charts
        },
        {
          path: 'widgets',
          name: '위젯',
          component: Widgets
        },
        {
          path: 'components',
          redirect: '/components/buttons',
          name: '구성요소',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'buttons',
              name: '버튼',
              component: Buttons
            },
            {
              path: 'social-buttons',
              name: 'SNS 버튼',
              component: SocialButtons
            },
            {
              path: 'cards',
              name: '카드뷰',
              component: Cards
            },
            {
              path: 'forms',
              name: '양식',
              component: Forms
            },
            {
              path: 'modals',
              name: '모달뷰',
              component: Modals
            },
            {
              path: 'switches',
              name: '스위치',
              component: Switches
            },
            {
              path: 'tables',
              name: '표',
              component: Tables
            }
          ]
        },
        {
          path: 'icons',
          redirect: '/icons/font-awesome',
          name: '아이콘',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'font-awesome',
              name: 'Font Awesome',
              component: FontAwesome
            },
            {
              path: 'simple-line-icons',
              name: 'Simple Line Icons',
              component: SimpleLineIcons
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/p404',
      name: '페이지 이동',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: '에러코드 404',
          component: Page404
        },
        {
          path: '500',
          name: '에러코드 500',
          component: Page500
        },
        {
          path: 'login',
          name: '로그인',
          component: Login
        },
        {
          path: 'register',
          name: '회원가입',
          component: Register
        }
      ]
    }
  ]
})
