(function () {
  window.va =
    window.va ||
    function () {
      ;(window.vaq = window.vaq || []).push(arguments)
    }

  if (document.querySelector('script[data-ronin-analytics]')) {
    return
  }

  var script = document.createElement('script')
  script.defer = true
  script.src = '/_vercel/insights/script.js'
  script.dataset.roninAnalytics = 'vercel-web-analytics'
  document.head.appendChild(script)
})()
