import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h2 className='mb-3'>React Hooks Sandbox</h2>
      <ul className='list-group'>
      <Link
          className='list-group-item list-group-item-action'
          to='usestate-counter'
        >
          useState Example Counter
        </Link>
        <Link
          className='list-group-item list-group-item-action'
          to='add-delete-items'
        >
          useState Example Add and Delete Items
        </Link>
        <Link
          className='list-group-item list-group-item-action'
          to='useref-example-1'
        >
          useRef Example 1
        </Link>
        <Link
          className='list-group-item list-group-item-action'
          to='useref-example-2'
        >
          useRef Example 2
        </Link>
        <Link
          className='list-group-item list-group-item-action'
          to='useref-example-3'
        >
          useRef Example 3
        </Link>
        <Link
          className='list-group-item list-group-item-action'
          to='usememo-example'
        >
          useMemo Example
        </Link>
        <Link
          className='list-group-item list-group-item-action'
          to='usecallback-example'
        >
          useCallback Example
        </Link>
        <Link
          className='list-group-item list-group-item-action'
          to='custom-hook-example-1'
        >
          Custom Hook - useFetch()
        </Link>
        <Link
          className='list-group-item list-group-item-action'
          to='custom-hook-example-2'
        >
          Custom Hook - useLocalStorage()
        </Link>
        <Link
          className='list-group-item list-group-item-action'
          to='api-call-example'
        >
          API Call - useState / useEffect
        </Link>
      </ul>
    </>
  )
}

export default Home
