window.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    console.info('skipWaiting')
    window.skipWaiting()
    window.location.reload()
  }
})
