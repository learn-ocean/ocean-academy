import ReactGA from 'react-ga'

const options = {}

const trackPage = (page: any) => {
  ReactGA.set({
    page,
    ...options,
  })
  ReactGA.pageview(page)
}

let currentPage = ''

export const googleAnalytics = (store: any) => (next: any) => (action: any) => {
  if (action.type === '@@router/LOCATION_CHANGE') {
    const nextPage = `${action.payload.location.pathname}${action.payload.location.search}`

    if (currentPage !== nextPage) {
      currentPage = nextPage
      trackPage(nextPage)
    }
  }

  return next(action)
}
