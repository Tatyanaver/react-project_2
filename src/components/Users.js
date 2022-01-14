import {useEffect, useState} from "react";
import User from "./User";
import './Users.css'

export default function Users() {
    let [Users,setUsers] = useState([])
    useEffect(()=> {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json())
                .then(Users=> {
                    setUsers(Users);
                })
        }
        ,[])
    return (
        <div className='users'>
            <ol>
                {Users.map(value => <li key={value.id}><User item={value}/></li>)}
            </ol>
        </div>
    )
}