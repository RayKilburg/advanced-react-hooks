import {useRef} from 'react'

function UseRefExample() {
    const inputRef = useRef()
    const paraRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(inputRef.current.value)
        inputRef.current.value = 'hello'
        inputRef.current.style.backgroundColor = 'coral'
        paraRef.current.innerText = "goodbye"
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={inputRef} className="form-control mb-2" />
                <button type="submit" className="btn btn-primary">Submit</button>
                <p onClick={() => inputRef.current.focus()} ref={paraRef}>hello</p>
            </form>
        </div>
    )
}

export default UseRefExample
