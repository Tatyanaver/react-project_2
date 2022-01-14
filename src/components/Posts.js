import {useEffect, useState} from "react";
import Post from "./Post";
import './Posts.css'

export default function Posts() {
    let [Posts,setPosts] = useState([])
    useEffect(()=> {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(value => value.json())
                .then(Posts=> {
                    setPosts(Posts);
                })
        }
        ,[])
    return (
        <div className='posts'>
            <ul>
                {Posts.map(value => <li key={value.id}><Post information={value}/></li>)}
            </ul>
        </div>
    )
}