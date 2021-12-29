import {useState} from 'react'
 
function AddandDeleteItems() {
    const [list, setList] = useState([])
    const [value, setValue] = useState('')

    // input value
    const onChange = (e) => {
        setValue(e.target.value)
    }

    // add item 
    const handleClick = () => {
        setList([...list, value]);
        setValue("");
    }

    // delete
    const handleDelete = (item) => {
        setList(list.filter((deletes) => deletes !== item))
    }

    return (
        <div>
            <h3>Type items in the input too add to list</h3>
            <h4>Click on items in the list to delete them</h4>
            <br />
            <input type="text" value={value} onChange={onChange} />{" "}
            <button onClick={handleClick}>Add</button>

            <hr />
            <ul>
                {list.length > 0 && list.map((item) => {
                    return <li onClick={() => handleDelete(item)} key={item}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default AddandDeleteItems

//https://hackernoon.com/top-3-coding-challenges-for-mid-level-react-developers