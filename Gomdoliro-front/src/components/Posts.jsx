import {React, useEffect, useState} from 'react'
import Post from './Post'
import axios from 'axios'

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getAll = async () => {
            try {
                const response = await axios.get('https://port-0-gomdoliro-board-back-m1qhzohka7273c65.sel4.cloudtype.app/board-all')
                console.log(response.data)
                setPosts(response.data)
            } catch (error) {
                console.error('Error : ', error)
            }
        }

        getAll()
    }, [])

    return (
        <>
            {posts.map((post) => (
                <Post key={post.id} post={post}/>
            ))}
        </>
    )
}

export default Posts