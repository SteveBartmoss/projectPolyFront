import { useState } from "react";
import { TextBox } from "../../plank-jsx/textBox/textBox";
import { TextField } from "../../plank-jsx/textfield/textField";
import { Btn } from "../../ui/btn/btn";
import { apiClient } from "../../api/api";
import { Timeline } from "../../components/timeline/timeline";
import { TimelineForm } from "../../components/timeline/timelineForm";
import { Box } from "../../plank-jsx/containers/box";



export function Home(){

    
    return(
        <>
            <Box styles={{
                display: "flex",
                flexDirection: "row",
            }}>

                <Box styles={{
                    width: "10%",
                    margin: "auto",
                }}>
                    <h1>left aside</h1>
                </Box>
                <Box styles={{
                    width: "80%",
                    margin: "auto",
                }}>
                    <TimelineForm />

                    <Timeline />
                </Box>
                <Box styles={{
                    width: "10%",
                    margin: "auto",
                }}>
                    <h1>right aside</h1>
                </Box>
            </Box>
            
        </>
    )
}