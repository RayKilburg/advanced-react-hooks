import {useState} from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <button className="btn btn-danger" onClick={() => setCount(count + 1)}>
                    {count}
            </button>
            <div><h3>{count}</h3></div>
        </div>
        
    )
}

export default Counter

