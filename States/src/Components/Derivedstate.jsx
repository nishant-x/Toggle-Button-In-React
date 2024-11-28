import { useState } from "react";
export default function Derivedstate() {
    const [users, setCount] = useState([
        { id: 1, name: "John", age: 25 },
        { id: 2, name: "Nishant", age: 30 },
        { id: 3, name: "Kaka", age: 35 },
        { id: 4, name: "Nikhil", age:40  },
        { id: 5, name: "bob", age: 45 }
    ]);


    const userCount = users.length;
    const average = users.reduce((accum,currele) => accum + currele , 0) / userCount

  return (
    <>
    <h1>Derived State</h1>
    <ul>
        {users.map((user,index) => (
            <li key={index}>
                <h2>Name: {user.name}</h2>
                <h2>Age: {user.age}</h2> 
            </li>
        ))}
    </ul>

    <h1>Total User: {userCount}</h1>
    <h1>Average Age is : {average}</h1>
    </>
  )
}
