import {useEffect, useState} from "react";
import Comment from "./Comment";
import './Comments.css'

export default function Comments() {
    let [Comments, setComments] = useState([])
    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(value => value.json())
                .then(Comments => {
                    setComments(Comments);
                })
        },
        [])
    return (
        <div className='comments'>
            <ol>
                {Comments.map(value => <li key={value.id}><Comment description={value}/></li>)}
            </ol>
        </div>
)
}