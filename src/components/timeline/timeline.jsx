import { useEffect, useState } from "react"
import { apiClient } from "../../api/api"
import { ItemTimeline } from "../../plank-jsx/itemTimeline/itemTimeline"
import { Box } from "../../plank-jsx/containers/box"


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
            <Box styles={{
                width: "40rem",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                {
                    items.map(item =>
                        <ItemTimeline content={item.content}/>
                    )
                }
            </Box>
        </>
    )

}