import { useEffect, useState } from "react"
import { apiClient } from "../../api/api"


export function Timeline(){

    const [items, setItems] = useState([])

    const getTimeLine = async () => {

        try {

            const response = await apiClient.get('/user-timeline/')

            setItems(response.data)

            console.log(response)

        } catch (error){
            console.log(error)
        }

    }

    useEffect(() => {
        getTimeLine()
    },[])

    return(
        <>
            <div>
                <h1>Time line</h1>
                {
                    items.map(item => 
                        <p>{item.content}</p>
                    )
                }
            </div>
        </>
    )

}