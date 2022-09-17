// import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
// import { HYDRATE, createWrapper } from "next-redux-wrapper";
// import  thunkMiddleware  from "redux-thunk";
// import { allProductsReducer } from "./reducers/productReducers.js";

// import reducers from "./reducers/reducers";

// const bindMiddleware = (middleware) => {
//   if(process.env.NODE_ENV === 'production') {
//     const { composeWithDevTools } = require('redux-devtools-extension')
//     return composeWithDevTools(applyMiddleware(...middleware))
//   }
//   return applyMiddleware(...middleware)
// }

// const reducer = (state, action) => {
//   if(action.type === HYDRATE) {
//     const nextState = {
//       ...state,
//       ...action.payload
//     }
//     return nextState
//   } else {
//     return reducers(state, action)
//   }
// }

// const initStore = () => {
//   return configureStore({reducer }, bindMiddleware([thunkMiddleware]))
// }

// export const wrapper = createWrapper(initStore)

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
