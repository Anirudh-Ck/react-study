import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import UseReducerFn from './UseReducerFn';
import UseMemoFile from './components/UseMemoFile';
// import Demo from './componentForCustomHook/Demo';
import MainHome from './componentsForUseContexHook.jsx/MainHome';
import Demo from './componentsforUseRef/Demo';
import LayoutEffectExample from './compontsForUserLayoutEffect.jsx/LayoutEffectExample';
import UseEffetcDemo from './compontsForUserLayoutEffect.jsx/UseEffetcDemo';
import Taining from './Taining';




function App() {

  // const reducer = (state,action)=>{
  //   switch(action.type){
  //     case 'INCREMENT': 
  //       return {count : state.count+1}
  //     case 'DECREMENT':
  //       return {count : state.count -1}  
  //     default:
  //       return state  
  //   }
  // }

  // const initialState = {
  //   count: 0
  // }
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
  

  <div className="">
      {/* <h1 className=''>Hello world</h1>

      <button onClick={()=>dispatch({type: 'DECREMENT'})}>-</button>
      <span>{state.count}</span>
      <button onClick={()=>dispatch({type: 'INCREMENT'})}>+</button> */}
      {/* <UseReducerFn/> */}
        {/* <UseMemoFile/> */}
        {/* <MainHome/> */}
        {/* <UseEffetcDemo/>
        <LayoutEffectExample/> */}
        <Taining/>
        
    </div>
  );
}

export default App;
