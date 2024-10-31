    import {React, useEffect, useState} from 'react'
    import Post from './Post'
    import axios from 'axios'

    const Posts = ({searchValue}) => {
        const server = import.meta.env.VITE_SERVER_ADDRESS
        const [posts, setPosts] = useState([])

        const getAll = async () => {
            try {
                const response = await axios.get(`${server}/board-all`)
                setPosts(response.data)
            } catch (error) {
                console.error('Error : ', error)
            }
        }

        useEffect(() => {
            getAll()
        }, [posts])

        const searchFilter = () => {
            if(searchValue && searchValue !== '') {
                return (
                    posts.filter(post => {

                        return post.title.includes(searchValue)
                    })
                )
            } else return posts
        }

        const filteredValue = searchFilter()

        return (
            <>
                {filteredValue.slice().reverse().map((post) => (
                    <Post key={post.id} post={post}/>
                ))}
            </>
        )
    }

    export default Posts