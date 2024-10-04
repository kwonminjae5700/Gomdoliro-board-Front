    import {React, useEffect, useState} from 'react'
    import Post from './Post'
    import axios from 'axios'

    const Posts = ({searchValue}) => {
        const [posts, setPosts] = useState([])

        useEffect(() => {
            const getAll = async () => {
                try {
                    const response = await axios.get('https://port-0-gomdoliro-board-back-m1qhzohka7273c65.sel4.cloudtype.app/board-all')
                    setPosts(response.data)
                } catch (error) {
                    console.error('Error : ', error)
                }
            }

            getAll()
        }, [])

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