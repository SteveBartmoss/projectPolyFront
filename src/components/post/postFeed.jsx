import { useEffect, useState } from "react"
import { apiClient } from "../../api/api"
import { Box } from "../../plank-jsx/containers/box"


export function PostFeed(){

    const [post, setPost] = useState([])

    const getPost = async () => {

        try{

            const response = await apiClient.get('/post')

            setPost(response.data)

            console.log(response)

        } catch(error){
            console.log(error1)
        }
    }

    useEffect(() => {
        getPost()
    },[])

    return(
        <>
            <Box>
                <h1>feed post</h1>
            </Box>
        </>
    )

}