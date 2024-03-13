/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  jit: true,
  content: [
    "./src/**/*.js",
    "./src/**/*.html",
     "./src/**/*.{html,js}",
    ],
  theme: {
    extend: {
      colors: {
        primary: '#8231D3',
        secondary: '#5840FF',
        success: '#01B81A',
        pink: '#f2eafb',
        warning: '#FA8B0C',
        danger: '#ff4d4f',
        info: '#00AAFF',
        link: '#1890ff',
        dark: '#0A0A0A',
        'primary-hbr': '#6726A8',
        'secondary-hbr': '#3520C8',
        'success-hbr': '#0D811D',
        'info-hbr': '#0787C7',
        'warning-hbr': '#D9790A',
        'danger-hbr': '#CB0000',
        'dark-hbr': '#272525',
        'gray-hbr': '#585858',
        'light-hbr': '#585858',
        'light-extra': '#585858',
        body: '#404040',
        'theme-gray': '#404040',
        'theme-grayDark': 'rgb(255, 255, 255, .06)',
        light: '#747474',
        lightDark: 'rgb(255, 255, 255, .06)',
        'light-extraDark': 'rgb(255, 255, 255, .06)',
        section: '#f4f5f7',
        breadcrumbs: '#666D92',
        active: '#01b81a',
        deactivated: '#FA8B0C',
        blocked: '#ff0f0f',
        early: '#8231d3',
        late: '#fa8b0c',
        progress: '#ff4d4f',
        complete: '#01b81a',
        'google-plus': 'rgb(240, 101, 72)',
        google: 'rgb(241, 67, 54)',
        facebook: 'rgb(58, 88, 155)',
        twitter: 'rgb(0, 0, 0)',
        github: 'rgb(9, 14, 48)',
        linkedin: 'rgb(0, 122, 185)',
        instagram: 'rgb(209, 32, 143)',
        whatsapp: '#25D366',
        youtube: 'rgb(205, 32, 31)',
        dribbble: '#c2185b',
        medium: '#66cdaa',
        regular: '#F1F2F6',
        normal: '#E3E6EF',
        deep: '#C6D0DC',
        regularBG: '#F8F9FB',
        normalBG: '#F4F5F7',
        deepBG: '#EFF0F3',
        white: '#ffffff',
        'main-dark': '#18191a',
        'box-dark': '#242526',
        'box-dark-up': '#3a3b3c',
        'box-dark-down':'#242526',
        'title-dark': 'rgba(255, 255, 255, 0.87)',
        'subtitle-dark': 'rgba(255, 255, 255, 0.60)',

      },
      boxShadow: {
        regular: '0 5px 20px rgba(160,160,160,0.05)',
        pricing: '0 5px 20px rgba(146,153,184,0.2)',
        action: '0 5px 20px rgba(64, 64, 64, 0.08)',
        box: '0 15px 25px rgba(146,153,184,0.2)',
        boxLarge: '0 10px 40px rgba(146,153,184,0.2)',
        boxLargeDark: '0 10px 40px rgba(0,0,0,0.50)',
        custom: '0 15px 50px #9299b820',
        dot: '0 0 0 1px #fff',
        btn: '0 8px 13px rgba(130, 49 ,211, 0.13)',
      },
      borderWidth: {
        1: '1px',
        5: '5px',
      },
      borderRadius: {
        4: '4px',
        6: '6px',
        10: '10px',
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
      fontSize: {
        10: ['10px', '14px'],
        11: ['11px', '15px'],
        13: ['13px', '18px'],
        14: ['14px', '20px'],
        15: ['15px', '24px'],
        16: ['16px', '25px'],
        17: ['17px', '26px'],
        18: ['18px', '27px'],
        22: ['22px', '30px'],
        42: ['42px', '62px'],
        58: ['58px', '86px'],
      },
      zIndex: {
        998: '998',
        99998: '99998',
      },
    },
    screens: {
      'xxs': '320px',
      'xs': '380px',
      'ssm': '480px',
      'sm': '575px',
      'md': '768px',
      'lg': '991px',
      'xl': '1199px',
      '2xl': '1299px',
      '3xl': '1599px',
      '4xl': '1699px',
    }
  },
  variants: {
    extend: {},
  },
  plugins:  [],
}
