import './ToggleBtn.css'
import { useState } from 'react';
export default function ToggleBtn() {

    const [isON, setisON] = useState(false);

    const handleToggle = () =>{
        setisON(!isON);
    }

  return (
    <>
        <div className='divbtn' style={{backgroundColor : isON ? "#4caf50" : "rgb(235, 231, 226)"}} onClick={handleToggle}>
            <div className={isON ? 'on' : 'off'}>
                <span>{isON ? "ON" : "OFF"}</span>
            </div>
        </div>
    </>
  )
}
