import { useState } from "react";
export default function Usestatehook() {
    
    const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button width="20px" height ="20px" onClick={()=>setCount(()=>count+1)}>Click Me!</button>
    </div>
  )
}
