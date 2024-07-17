import PropTypes from 'prop-types'
import { useReducer } from 'react'

export const UseReducer = () => {

  const initialState = {count: 0};
  
  function reducer(state, action){
    switch (action.type){
      case 'increment':
        return {count: state.count + 1};
      case 'decrease':
        return {count: state.count - 1};
      case 'reset': 
        return initialState;
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <h2>Ejercicio useReducer</h2>
        <button onClick={() => dispatch({type: 'increment'})}>
          Increment
        </button>
        <button onClick={() => dispatch({type: 'decrease'})}>
          Decrease
        </button>
        <button onClick={() => dispatch({type: 'reset'})}>
          Reset
        </button>
        <p>Count is {state.count}</p>
    </div>
  )
}