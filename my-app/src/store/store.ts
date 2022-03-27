import { combineReducers, createStore } from 'redux'
import { IClickedValid, IFields, ILoader } from '../types/Intefaces'

const defaultState: IFields = {
  name: '',
  telephone: '',
  email: '',
  profile: '',
  studio: '',
  receiver: '',
  city: '',
  sources: ''
}

const fieldsReducer = (state: IFields = defaultState, action: any) => {
  if (action.type === 'clear') return defaultState
  return { ...state, [action.type]: action.payload }
}

const loadingState : ILoader = {
  loading: false
}

const loadReducer = (state: ILoader = loadingState, action : any) => {
  return { ...state, [action.type]: action.payload }
}

const validate : IClickedValid = {
  valid: false
}

const validateReducer = (state: IClickedValid = validate, action : any) => {
  return { ...state, [action.type]: action.payload }
}

const rootReducer = combineReducers({ fieldsReducer, loadReducer, validateReducer })

const store = createStore(rootReducer)

export default store
