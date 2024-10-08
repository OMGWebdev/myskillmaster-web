import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_f470fca8 from 'nuxt_plugin_plugin_f470fca8' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_gtm_ade8a724 from 'nuxt_plugin_gtm_ade8a724' // Source: ./gtm.js (mode: 'all')
import nuxt_plugin_axios_143040d0 from 'nuxt_plugin_axios_143040d0' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_filters_98405076 from 'nuxt_plugin_filters_98405076' // Source: ../plugins/filters (mode: 'all')
import nuxt_plugin_axios_3566aa80 from 'nuxt_plugin_axios_3566aa80' // Source: ../plugins/axios (mode: 'all')
import nuxt_plugin_vueapiquery_964c47d0 from 'nuxt_plugin_vueapiquery_964c47d0' // Source: ../plugins/vue-api-query (mode: 'all')
import nuxt_plugin_vue2datepicker_04943087 from 'nuxt_plugin_vue2datepicker_04943087' // Source: ../plugins/vue2-datepicker (mode: 'all')
import nuxt_plugin_vuetelinputvuetify_00185d1c from 'nuxt_plugin_vuetelinputvuetify_00185d1c' // Source: ../plugins/vue-tel-input-vuetify (mode: 'all')
import nuxt_plugin_vueslickcarousel_6fea79dc from 'nuxt_plugin_vueslickcarousel_6fea79dc' // Source: ../plugins/vue-slick-carousel (mode: 'all')
import nuxt_plugin_vueinfinitescroll_18d3fb29 from 'nuxt_plugin_vueinfinitescroll_18d3fb29' // Source: ../plugins/vue-infinite-scroll (mode: 'all')
import nuxt_plugin_plugin_5f3edad4 from 'nuxt_plugin_plugin_5f3edad4' // Source: ./auth/plugin.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":"%smyskillmaster","title":"Learn Life Skills from Local Experts | MySkillMaster","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"MySkillMaster is a marketplace app where you can learn a variety of life skills from local experts in your neighborhood. Discover and master skills like surfing, latte art, guitar playing, and more. Choose between in-person lessons or video tutorials. Book affordable 1-3 lesson packages for no more than $200. Start learning today with MySkillMaster!"},{"hid":"keywords","name":"keywords","content":"life skills, local experts, marketplace app, learn from locals, surfing lessons, latte art classes, guitar lessons, in-person learning, instructional videos, affordable lessons, skill sharing"},{"name":"msapplication-TileColor","content":"#da532c"},{"name":"msapplication-TileImage","content":"\u002Ffavicon\u002Fmstile-150x150.png"},{"name":"msapplication-config","content":"\u002Ffavicon\u002Fbrowserconfig.xml"},{"name":"theme-color","content":"#ffffff"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"apple-touch-icon","sizes":"180x180","href":"\u002Fapple-touch-icon.png"},{"rel":"icon","sizes":"32x32","href":"\u002Ffavicon-32x32.png"},{"rel":"icon","sizes":"16x16","href":"\u002Ffavicon-16x16.png"},{"rel":"mask-icon","href":"\u002Fsafari-pinned-tab.svg","color":"#5bbad5"},{"rel":"manifest","href":"\u002Fsite.webmanifest"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"style":[],"script":[{"hid":"gtm-script","innerHTML":"if(!window._gtm_init){window._gtm_init=1;(function(w,n,d,m,e,p){w[d]=(w[d]==1||n[d]=='yes'||n[d]==1||n[m]==1||(w[e]&&w[e][p]&&w[e][p]()))?1:0})(window,navigator,'doNotTrack','msDoNotTrack','external','msTrackingProtectionEnabled');(function(w,d,s,l,x,y){w[x]={};w._gtm_inject=function(i){if(w.doNotTrack||w[x][i])return;w[x][i]=1;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https:\u002F\u002Fwww.googletagmanager.com\u002Fgtm.js?id='+i;f.parentNode.insertBefore(j,f);}})(window,document,'script','dataLayer','_gtm_ids','_gtm_inject')}"}],"noscript":[{"hid":"gtm-noscript","pbody":true,"innerHTML":""}],"__dangerouslyDisableSanitizersByTagID":{"gtm-script":["innerHTML"],"gtm-noscript":["innerHTML"]}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_f470fca8 === 'function') {
    await nuxt_plugin_plugin_f470fca8(app.context, inject)
  }

  if (typeof nuxt_plugin_gtm_ade8a724 === 'function') {
    await nuxt_plugin_gtm_ade8a724(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_143040d0 === 'function') {
    await nuxt_plugin_axios_143040d0(app.context, inject)
  }

  if (typeof nuxt_plugin_filters_98405076 === 'function') {
    await nuxt_plugin_filters_98405076(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_3566aa80 === 'function') {
    await nuxt_plugin_axios_3566aa80(app.context, inject)
  }

  if (typeof nuxt_plugin_vueapiquery_964c47d0 === 'function') {
    await nuxt_plugin_vueapiquery_964c47d0(app.context, inject)
  }

  if (typeof nuxt_plugin_vue2datepicker_04943087 === 'function') {
    await nuxt_plugin_vue2datepicker_04943087(app.context, inject)
  }

  if (typeof nuxt_plugin_vuetelinputvuetify_00185d1c === 'function') {
    await nuxt_plugin_vuetelinputvuetify_00185d1c(app.context, inject)
  }

  if (typeof nuxt_plugin_vueslickcarousel_6fea79dc === 'function') {
    await nuxt_plugin_vueslickcarousel_6fea79dc(app.context, inject)
  }

  if (typeof nuxt_plugin_vueinfinitescroll_18d3fb29 === 'function') {
    await nuxt_plugin_vueinfinitescroll_18d3fb29(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_5f3edad4 === 'function') {
    await nuxt_plugin_plugin_5f3edad4(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
