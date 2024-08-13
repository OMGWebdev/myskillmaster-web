const middleware = {}

middleware['dev'] = require('../middleware/dev.js')
middleware['dev'] = middleware['dev'].default || middleware['dev']

middleware['guest'] = require('../middleware/guest.js')
middleware['guest'] = middleware['guest'].default || middleware['guest']

middleware['onboarded'] = require('../middleware/onboarded.js')
middleware['onboarded'] = middleware['onboarded'].default || middleware['onboarded']

middleware['remember-me'] = require('../middleware/remember-me.js')
middleware['remember-me'] = middleware['remember-me'].default || middleware['remember-me']

middleware['route-guard'] = require('../middleware/route-guard.js')
middleware['route-guard'] = middleware['route-guard'].default || middleware['route-guard']

middleware['verified'] = require('../middleware/verified.js')
middleware['verified'] = middleware['verified'].default || middleware['verified']

export default middleware
