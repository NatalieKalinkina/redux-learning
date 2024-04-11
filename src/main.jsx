import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'

const defaultState = {
  cash: 0,
}

const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload }
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload }
    default:
      return state
  }
}

const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return { ...state, cash: state.cash + action.payload }
    case "GET_CUSTOMERS":
      return { ...state, cash: state.cash - action.payload }
    default:
      return state
  }
}

const store = configureStore({
  reducer: {
    cash: cashReducer,
    customer: customerReducer,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>



)
