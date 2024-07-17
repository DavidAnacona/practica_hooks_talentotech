import PropTypes from 'prop-types'
import { useRef } from 'react'

export const UseRef = ( {count, setCount}) => {

    const countRef = useRef();

    const handleClick = () => {
        setCount(count + 1);
        countRef.current.textContent = `Count is now ${count + 1}`;
    }

    const handleDoubleClick = () => {
        setCount(0);
        countRef.current.textContent = `Count is now 0`;
    }

  return (
    <div>
        <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
            Increment
        </button>
        <p ref={countRef}>
            Count is {count}
        </p>
    </div>
  )
}

UseRef.propTypes = {
    count: PropTypes.number.isRequired,
    setCount: PropTypes.func.isRequired
}