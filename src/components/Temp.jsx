import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../store/Reducers/Reducer'
export default function Temp() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(20))}
        >
          incrememt by value
        </button>
      </div>
    </div>
  )
}