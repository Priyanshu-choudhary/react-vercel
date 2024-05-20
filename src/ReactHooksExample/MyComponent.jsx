import React,{useState} from "react"
function MyComponent(params) {
    const [name,setName]=useState("yadi");
    const [age,setAge]=useState(0);
let bool=true;
    
    const changeName=()=>{
        if (bool) {
            setName("yadi");
            bool=false;
        }else{
        setName("Priyanshu");
            bool =true;
    }
    }

    const increaseAge=()=>{
    }

    return (
        <>
            <p>name: {name}</p>
            <button onClick={changeName}>change name</button>
            <p>Age: {age}</p>
            <button onClick={increaseAge}>increase age </button>        
        </>
    )
}
export default MyComponent