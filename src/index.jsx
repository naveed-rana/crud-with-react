import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import './css/default.css';
import  App from './components/products.jsx';


//   const reducer = (state,action) =>
//   {
//     switch (action.type) {
//       case 'inc':
//        let data = state;
//         return data + action.payload;
//
//         case 'dec':
//         let data = state;
//           return data - action.payload;
//
//       default:
//       return state
//
//     }
//
//   }
//
//
// // creating store
//   const store = createStore (reducer,0)
//
//
//
//
//
//
//   store.subscribe(()=>{
//     alert(store.getState());
//   });
//
//
//   const decrement = () => {
//     return {
//       type:'dec',
//       payload:1
//   }
//   }
//
// const increment = () => {
//   return {
//     type:'inc',
//     payload:3,
//
//   };
// }
//
//   store.dispatch(increment());
//   store.dispatch(decrement());
//
//
// const UserApp = (props) => {
//
//
//         return(
//               <div>
//                           <h1>redux </h1>
//
//                   </div>
//         )
//
// }
//



ReactDOM.render(<App />, document.getElementById('content'));
