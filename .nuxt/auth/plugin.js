import Auth from './auth'

import './middleware'

// Active schemes
import scheme_003d9a64 from './schemes/local.js'

export default function (ctx, inject) {
  // Options
  const options = {"resetOnError":false,"scopeKey":"scope","rewriteRedirects":true,"fullPathRedirect":false,"watchLoggedIn":false,"redirect":{"login":"/login","logout":"/login","home":"/","callback":"/login"},"vuex":{"namespace":"auth"},"cookie":{"prefix":"auth.","options":{"path":"/","maxAge":28800}},"localStorage":{"prefix":"auth."},"token":{"prefix":"_token."},"refresh_token":{"prefix":"_refresh_token."},"defaultStrategy":"local"}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // local
  $auth.registerStrategy('local', new scheme_003d9a64($auth, {"endpoints":{"login":{"url":"auth/login","method":"POST","propertyName":"data.access_token"},"logout":false,"user":{"url":"auth/me","method":"GET","propertyName":"data"}},"_name":"local"}))

  // local2
  $auth.registerStrategy('local2', new scheme_003d9a64($auth, {"endpoints":{"login":{"url":"auth/register","method":"POST","propertyName":"data.access_token"},"logout":false,"user":{"url":"auth/me","method":"GET","propertyName":"data"}},"_name":"local2"}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      console.error('[ERROR] [AUTH]', error)
    }
  })
}
