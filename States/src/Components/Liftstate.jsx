import { useState } from "react"


export const Liftstate = () => {
    const [count, setCount] = useState("");  // lefted in this parent 
  return (
    <>
        <Inputstate count = {count} setCount = {setCount}/>  {/*sending state as props for input*/}
        <Displaycom count = {count} /> {/*sending state as props to display*/}
    </>
  )
}

const Inputstate = ({count , setCount}) => {
    // const [count, setCount] = useState(""); //Lifted State 
    return(
        <div>
            <input type="text" placeholder="Enter Your Number" value={count} onChange={(e) => setCount(e.target.value)} />
        </div>
    )
};


const Displaycom = ({count}) =>{
    return(
        <p>Your Current Element is: {count}</p>
    )
}



