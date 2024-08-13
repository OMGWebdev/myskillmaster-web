import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _55d2e5bc = () => interopDefault(import('../pages/accounts.vue' /* webpackChunkName: "pages/accounts" */))
const _0e33a20c = () => interopDefault(import('../pages/add-a-lesson.vue' /* webpackChunkName: "pages/add-a-lesson" */))
const _c7ed20e2 = () => interopDefault(import('../pages/add-a-lesson/index.vue' /* webpackChunkName: "pages/add-a-lesson/index" */))
const _0cd8cd0f = () => interopDefault(import('../pages/add-a-lesson/create.vue' /* webpackChunkName: "pages/add-a-lesson/create" */))
const _62b3d100 = () => interopDefault(import('../pages/add-a-lesson/success.vue' /* webpackChunkName: "pages/add-a-lesson/success" */))
const _8e6556e8 = () => interopDefault(import('../pages/change-password.vue' /* webpackChunkName: "pages/change-password" */))
const _8623100e = () => interopDefault(import('../pages/forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */))
const _2cc485f2 = () => interopDefault(import('../pages/go-pro/index.vue' /* webpackChunkName: "pages/go-pro/index" */))
const _ea4b7346 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _c107294e = () => interopDefault(import('../pages/my-lessons/index.vue' /* webpackChunkName: "pages/my-lessons/index" */))
const _d781e852 = () => interopDefault(import('../pages/onboarding.vue' /* webpackChunkName: "pages/onboarding" */))
const _e299d5cc = () => interopDefault(import('../pages/onboarding/index.vue' /* webpackChunkName: "pages/onboarding/index" */))
const _37243448 = () => interopDefault(import('../pages/onboarding/become-a-master.vue' /* webpackChunkName: "pages/onboarding/become-a-master" */))
const _cfa1e7b4 = () => interopDefault(import('../pages/onboarding/master-profile.vue' /* webpackChunkName: "pages/onboarding/master-profile" */))
const _b702f2d6 = () => interopDefault(import('../pages/onboarding/subscribe/index.vue' /* webpackChunkName: "pages/onboarding/subscribe/index" */))
const _21947e10 = () => interopDefault(import('../pages/onboarding/subscribe/_slug/index.vue' /* webpackChunkName: "pages/onboarding/subscribe/_slug/index" */))
const _728d4982 = () => interopDefault(import('../pages/past-lessons/index.vue' /* webpackChunkName: "pages/past-lessons/index" */))
const _532068d3 = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _10e09ee4 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _9a51b242 = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _4abcca22 = () => interopDefault(import('../pages/settings/index.vue' /* webpackChunkName: "pages/settings/index" */))
const _34e6ffc4 = () => interopDefault(import('../pages/settings/master-profile.vue' /* webpackChunkName: "pages/settings/master-profile" */))
const _7ce35f88 = () => interopDefault(import('../pages/settings/my-interests.vue' /* webpackChunkName: "pages/settings/my-interests" */))
const _27a1804b = () => interopDefault(import('../pages/settings/payment-details.vue' /* webpackChunkName: "pages/settings/payment-details" */))
const _3289617b = () => interopDefault(import('../pages/settings/payout-details.vue' /* webpackChunkName: "pages/settings/payout-details" */))
const _b0e278c2 = () => interopDefault(import('../pages/sign-up.vue' /* webpackChunkName: "pages/sign-up" */))
const _da08523c = () => interopDefault(import('../pages/sign-up/index.vue' /* webpackChunkName: "pages/sign-up/index" */))
const _391c2a52 = () => interopDefault(import('../pages/sign-up/details.vue' /* webpackChunkName: "pages/sign-up/details" */))
const _b3f915f4 = () => interopDefault(import('../pages/subscription-tier.vue' /* webpackChunkName: "pages/subscription-tier" */))
const _2660b5b0 = () => interopDefault(import('../pages/terms-and-conditions.vue' /* webpackChunkName: "pages/terms-and-conditions" */))
const _04b21d96 = () => interopDefault(import('../pages/verify.vue' /* webpackChunkName: "pages/verify" */))
const _41d5bae8 = () => interopDefault(import('../pages/dev/components.vue' /* webpackChunkName: "pages/dev/components" */))
const _17066025 = () => interopDefault(import('../pages/dev/typography.vue' /* webpackChunkName: "pages/dev/typography" */))
const _57dbd0ac = () => interopDefault(import('../pages/my-lessons/to-learn/_reference_code.vue' /* webpackChunkName: "pages/my-lessons/to-learn/_reference_code" */))
const _763c262f = () => interopDefault(import('../pages/my-lessons/to-learn/_reference_code/index.vue' /* webpackChunkName: "pages/my-lessons/to-learn/_reference_code/index" */))
const _d01aee26 = () => interopDefault(import('../pages/my-lessons/to-learn/_reference_code/cancel.vue' /* webpackChunkName: "pages/my-lessons/to-learn/_reference_code/cancel" */))
const _694f0abd = () => interopDefault(import('../pages/my-lessons/to-learn/_reference_code/reschedule.vue' /* webpackChunkName: "pages/my-lessons/to-learn/_reference_code/reschedule" */))
const _60c90daa = () => interopDefault(import('../pages/my-lessons/to-rate/_reference_code.vue' /* webpackChunkName: "pages/my-lessons/to-rate/_reference_code" */))
const _6889a6a6 = () => interopDefault(import('../pages/my-lessons/to-rate/_reference_code/index.vue' /* webpackChunkName: "pages/my-lessons/to-rate/_reference_code/index" */))
const _6ceabe9e = () => interopDefault(import('../pages/my-lessons/to-rate/_reference_code/success.vue' /* webpackChunkName: "pages/my-lessons/to-rate/_reference_code/success" */))
const _22be2d8e = () => interopDefault(import('../pages/my-lessons/to-teach/_scheduleId.vue' /* webpackChunkName: "pages/my-lessons/to-teach/_scheduleId" */))
const _ffac5cde = () => interopDefault(import('../pages/my-lessons/to-teach/_scheduleId/index.vue' /* webpackChunkName: "pages/my-lessons/to-teach/_scheduleId/index" */))
const _688b6c6a = () => interopDefault(import('../pages/my-lessons/to-teach/_scheduleId/cancel.vue' /* webpackChunkName: "pages/my-lessons/to-teach/_scheduleId/cancel" */))
const _0121a6ca = () => interopDefault(import('../pages/my-lessons/to-teach/_scheduleId/reschedule.vue' /* webpackChunkName: "pages/my-lessons/to-teach/_scheduleId/reschedule" */))
const _d1d8f532 = () => interopDefault(import('../pages/past-lessons/master/_scheduleId.vue' /* webpackChunkName: "pages/past-lessons/master/_scheduleId" */))
const _93ebbaac = () => interopDefault(import('../pages/past-lessons/master/_scheduleId/index.vue' /* webpackChunkName: "pages/past-lessons/master/_scheduleId/index" */))
const _7d63ded9 = () => interopDefault(import('../pages/past-lessons/student/_reference_code.vue' /* webpackChunkName: "pages/past-lessons/student/_reference_code" */))
const _397a1e9c = () => interopDefault(import('../pages/past-lessons/student/_reference_code/index.vue' /* webpackChunkName: "pages/past-lessons/student/_reference_code/index" */))
const _1b0cd1fc = () => interopDefault(import('../pages/go-pro/_slug/index.vue' /* webpackChunkName: "pages/go-pro/_slug/index" */))
const _7c90d72a = () => interopDefault(import('../pages/lessons/_slug.vue' /* webpackChunkName: "pages/lessons/_slug" */))
const _243453a6 = () => interopDefault(import('../pages/lessons/_slug/index.vue' /* webpackChunkName: "pages/lessons/_slug/index" */))
const _3f5c537f = () => interopDefault(import('../pages/lessons/_slug/edit.vue' /* webpackChunkName: "pages/lessons/_slug/edit" */))
const _a866764a = () => interopDefault(import('../pages/lessons/_slug/enroll.vue' /* webpackChunkName: "pages/lessons/_slug/enroll" */))
const _3ceafb1e = () => interopDefault(import('../pages/lessons/_slug/enroll/index.vue' /* webpackChunkName: "pages/lessons/_slug/enroll/index" */))
const _4128ed52 = () => interopDefault(import('../pages/lessons/_slug/enroll/payment.vue' /* webpackChunkName: "pages/lessons/_slug/enroll/payment" */))
const _234f1fd6 = () => interopDefault(import('../pages/lessons/_slug/enroll/price.vue' /* webpackChunkName: "pages/lessons/_slug/enroll/price" */))
const _5160b4cf = () => interopDefault(import('../pages/lessons/_slug/enroll/success.vue' /* webpackChunkName: "pages/lessons/_slug/enroll/success" */))
const _5d758cd6 = () => interopDefault(import('../pages/lessons/_slug/enroll/to-learn.vue' /* webpackChunkName: "pages/lessons/_slug/enroll/to-learn" */))
const _180b1269 = () => interopDefault(import('../pages/lessons/_slug/report.vue' /* webpackChunkName: "pages/lessons/_slug/report" */))
const _7d9ab974 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/accounts",
    component: _55d2e5bc,
    name: "accounts"
  }, {
    path: "/add-a-lesson",
    component: _0e33a20c,
    children: [{
      path: "",
      component: _c7ed20e2,
      name: "add-a-lesson"
    }, {
      path: "create",
      component: _0cd8cd0f,
      name: "add-a-lesson-create"
    }, {
      path: "success",
      component: _62b3d100,
      name: "add-a-lesson-success"
    }]
  }, {
    path: "/change-password",
    component: _8e6556e8,
    name: "change-password"
  }, {
    path: "/forgot-password",
    component: _8623100e,
    name: "forgot-password"
  }, {
    path: "/go-pro",
    component: _2cc485f2,
    name: "go-pro"
  }, {
    path: "/login",
    component: _ea4b7346,
    name: "login"
  }, {
    path: "/my-lessons",
    component: _c107294e,
    name: "my-lessons"
  }, {
    path: "/onboarding",
    component: _d781e852,
    children: [{
      path: "",
      component: _e299d5cc,
      name: "onboarding"
    }, {
      path: "become-a-master",
      component: _37243448,
      name: "onboarding-become-a-master"
    }, {
      path: "master-profile",
      component: _cfa1e7b4,
      name: "onboarding-master-profile"
    }, {
      path: "subscribe",
      component: _b702f2d6,
      name: "onboarding-subscribe"
    }, {
      path: "subscribe/:slug",
      component: _21947e10,
      name: "onboarding-subscribe-slug"
    }]
  }, {
    path: "/past-lessons",
    component: _728d4982,
    name: "past-lessons"
  }, {
    path: "/privacy-policy",
    component: _532068d3,
    name: "privacy-policy"
  }, {
    path: "/search",
    component: _10e09ee4,
    name: "search"
  }, {
    path: "/settings",
    component: _9a51b242,
    children: [{
      path: "",
      component: _4abcca22,
      name: "settings"
    }, {
      path: "master-profile",
      component: _34e6ffc4,
      name: "settings-master-profile"
    }, {
      path: "my-interests",
      component: _7ce35f88,
      name: "settings-my-interests"
    }, {
      path: "payment-details",
      component: _27a1804b,
      name: "settings-payment-details"
    }, {
      path: "payout-details",
      component: _3289617b,
      name: "settings-payout-details"
    }]
  }, {
    path: "/sign-up",
    component: _b0e278c2,
    children: [{
      path: "",
      component: _da08523c,
      name: "sign-up"
    }, {
      path: "details",
      component: _391c2a52,
      name: "sign-up-details"
    }]
  }, {
    path: "/subscription-tier",
    component: _b3f915f4,
    name: "subscription-tier"
  }, {
    path: "/terms-and-conditions",
    component: _2660b5b0,
    name: "terms-and-conditions"
  }, {
    path: "/verify",
    component: _04b21d96,
    name: "verify"
  }, {
    path: "/dev/components",
    component: _41d5bae8,
    name: "dev-components"
  }, {
    path: "/dev/typography",
    component: _17066025,
    name: "dev-typography"
  }, {
    path: "/my-lessons/to-learn/:reference_code",
    component: _57dbd0ac,
    children: [{
      path: "",
      component: _763c262f,
      name: "my-lessons-to-learn-reference_code"
    }, {
      path: "cancel",
      component: _d01aee26,
      name: "my-lessons-to-learn-reference_code-cancel"
    }, {
      path: "reschedule",
      component: _694f0abd,
      name: "my-lessons-to-learn-reference_code-reschedule"
    }]
  }, {
    path: "/my-lessons/to-rate/:reference_code",
    component: _60c90daa,
    children: [{
      path: "",
      component: _6889a6a6,
      name: "my-lessons-to-rate-reference_code"
    }, {
      path: "success",
      component: _6ceabe9e,
      name: "my-lessons-to-rate-reference_code-success"
    }]
  }, {
    path: "/my-lessons/to-teach/:scheduleId",
    component: _22be2d8e,
    children: [{
      path: "",
      component: _ffac5cde,
      name: "my-lessons-to-teach-scheduleId"
    }, {
      path: "cancel",
      component: _688b6c6a,
      name: "my-lessons-to-teach-scheduleId-cancel"
    }, {
      path: "reschedule",
      component: _0121a6ca,
      name: "my-lessons-to-teach-scheduleId-reschedule"
    }]
  }, {
    path: "/past-lessons/master/:scheduleId",
    component: _d1d8f532,
    children: [{
      path: "",
      component: _93ebbaac,
      name: "past-lessons-master-scheduleId"
    }]
  }, {
    path: "/past-lessons/student/:reference_code",
    component: _7d63ded9,
    children: [{
      path: "",
      component: _397a1e9c,
      name: "past-lessons-student-reference_code"
    }]
  }, {
    path: "/go-pro/:slug",
    component: _1b0cd1fc,
    name: "go-pro-slug"
  }, {
    path: "/lessons/:slug?",
    component: _7c90d72a,
    children: [{
      path: "",
      component: _243453a6,
      name: "lessons-slug"
    }, {
      path: "edit",
      component: _3f5c537f,
      name: "lessons-slug-edit"
    }, {
      path: "enroll",
      component: _a866764a,
      children: [{
        path: "",
        component: _3ceafb1e,
        name: "lessons-slug-enroll"
      }, {
        path: "payment",
        component: _4128ed52,
        name: "lessons-slug-enroll-payment"
      }, {
        path: "price",
        component: _234f1fd6,
        name: "lessons-slug-enroll-price"
      }, {
        path: "success",
        component: _5160b4cf,
        name: "lessons-slug-enroll-success"
      }, {
        path: "to-learn",
        component: _5d758cd6,
        name: "lessons-slug-enroll-to-learn"
      }]
    }, {
      path: "report",
      component: _180b1269,
      name: "lessons-slug-report"
    }]
  }, {
    path: "/",
    component: _7d9ab974,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
