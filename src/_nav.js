export default {
  items: [
    {
      name: '대시보드',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: '관리도구'
    },
    {
      name: '구성요소',
      url: '/components',
      icon: 'icon-puzzle',
      children: [
        {
          name: '버튼',
          url: '/components/buttons',
          icon: 'icon-puzzle'
        },
        {
          name: 'SNS 버튼',
          url: '/components/social-buttons',
          icon: 'icon-puzzle'
        },
        {
          name: '카드뷰',
          url: '/components/cards',
          icon: 'icon-puzzle'
        },
        {
          name: '양식',
          url: '/components/forms',
          icon: 'icon-puzzle'
        },
        {
          name: '모달뷰',
          url: '/components/modals',
          icon: 'icon-puzzle'
        },
        {
          name: '스위치',
          url: '/components/switches',
          icon: 'icon-puzzle'
        },
        {
          name: '표',
          url: '/components/tables',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: '아이콘',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star'
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: '위젯',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'danger',
        text: 'NEW'
      }
    },
    {
      name: '차트',
      url: '/charts',
      icon: 'icon-pie-chart'
    },
    {
      divider: true
    },
    {
      title: true,
      name: '기타'
    },
    {
      name: '페이지 이동',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: '로그인',
          url: '/pages/login',
          icon: 'icon-star'
        },
        {
          name: '회원가입',
          url: '/pages/register',
          icon: 'icon-star'
        },
        {
          name: '에러코드 404',
          url: '/pages/404',
          icon: 'icon-star'
        },
        {
          name: '에러코드 500',
          url: '/pages/500',
          icon: 'icon-star'
        }
      ]
    }
  ]
}
