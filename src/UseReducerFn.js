import React, { useReducer } from 'react'


function UseReducerFn() {
    console.log("render useReducerFn");

    const reducer = (state,action)=>{
        switch(action.type){
            case 'INCREMENT':
                return {
                    count: state.count+1
                }
            case 'DECREMENT':
                return{
                    count: state.count-1
                }  
            default : 
            return state      
        }
    }
    const initialState ={
        count: 0,
    }
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <button onClick={()=>dispatch({type: 'INCREMENT'})}>Increment</button>
        <span style={{color:'red', margin:'10px'}}>count: {state.count}</span>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
    </div>
  )
}

export default UseReducerFn


