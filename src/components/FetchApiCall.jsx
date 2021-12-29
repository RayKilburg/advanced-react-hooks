import {useState, useEffect} from 'react'

function FetchApiCall() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
        <ul>
            <h1>Getting API data with fetch</h1>
            <br />
        {items.map(item => (
            <>
            <li key={item.id}>Id: {item.id}</li>
            <li key={item.name}>Name: {item.name}</li>
            <li key={item.email}>Email: {item.email}</li>
            <p key={item.body}><b>{item.body}</b></p>
            <hr />
            </>
        ))}
      </ul>
        )
    }
}

export default FetchApiCall

// https://reactjs.org/docs/faq-ajax.html
// https://jsonplaceholder.typicode.com/posts/1/comments
