import { configureStore,applyMiddleware,getDefaultMiddleware} from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga"
import reducer from './CombineReducer'
import { rootSaga } from './saga/rootSaga'

let sagaMiddleWare = createSagaMiddleware() //instance of createSagaMiddleware

const store=configureStore({
    reducer:reducer,
    middleware:[...getDefaultMiddleware({thunk:false}), sagaMiddleWare]

})
sagaMiddleWare.run(rootSaga)

export default store