import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import { computeToData } from './computeToData'
import { ocean101 } from './ocean101'
import { oceanBusiness } from './oceanBusiness'
import { oceanOutreach } from './oceanOutreach'

export const chapterReducers = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    computeToData,
    ocean101,
    oceanBusiness,
    oceanOutreach
})