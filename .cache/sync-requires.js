const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-product-page-js": hot(preferDefault(require("/Users/devi4nt/identity/with-gatsby/src/templates/ProductPage.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/devi4nt/identity/with-gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/devi4nt/identity/with-gatsby/src/pages/index.js")))
}

