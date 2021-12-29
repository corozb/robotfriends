import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS } from './constants'

const initialStateSearch = {
  searchField: '',
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload }

    default:
      return state
  }
}

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: '',
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS.PENDING:
      return Object.assign({}, state, { isPending: true })

    case REQUEST_ROBOTS.SUCCESS:
      return { ...state, robots: action.payload, isPending: false }

    case REQUEST_ROBOTS.FAILED:
      return { ...state, error: action.payload, isPending: false }

    default:
      return state
  }
}
