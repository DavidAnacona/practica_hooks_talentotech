import PropTypes from 'prop-types'
import { useMemo } from 'react'

export const UseMemo = ( {count, setCount} ) => {

    const doubleCount = useMemo(() => {
        return count * 2;
    }, [count]);

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>
            Increment
        </button>
        <p>Count is {count}</p>
        <p>Double count is {doubleCount}</p>
    </div>
  )
}

UseMemo.propTypes = {
    count: PropTypes.number.isRequired,
    setCount: PropTypes.func.isRequired
}