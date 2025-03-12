import React,{useState} from 'react'

const Counter = () => {
    let cnt = 0
    const [count,setCount] = useState(0)
    const [name,setName] = useState("")
    const [flag,setFlag] = useState(false)
    const [arr,setArr] = useState([1,2,3])
    const [obj,setObj] = useState({"":"","":"","":""})
    const handleAdd = () => {
       {/* react*/}  setCount(5)
        {/* js*/} cnt++
        console.log(cnt);
    }
    return (
        <>
           {/* js*/} <p>{cnt}</p> 
           {/* react*/} <p>{count}</p>
            <button onClick={handleAdd}>+</button>
            <button>-</button>
<br/>
        --------------
<br/>

        </>
    )
}

export default Counter