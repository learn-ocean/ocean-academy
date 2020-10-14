export const HIDE_GDPR = 'HIDE_GDPR'

export const hideGdpr = () => (dispatch: any) => {
  dispatch({
    type: HIDE_GDPR,
  })
}
