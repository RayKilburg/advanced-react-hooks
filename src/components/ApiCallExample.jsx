import {useState, useEffect} from 'react'
import axios from 'axios'

function ApiCallExample() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments");
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(data)

    return (
        <div>
            <ul>
                {data.map((item) => {
                    return (
                        <>
                            <li key={item.id}>Id: {item.id}</li>
                            <li key={item.name}>Name: {item.name}</li>
                            <li key={item.email}>Email: {item.email}</li>
                            <p key={item.body}><b>{item.body}</b></p>
                            <hr />
                        </>
                    )
                })}
            </ul>
        </div>
    )
}

export default ApiCallExample

