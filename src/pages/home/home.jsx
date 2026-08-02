import { useState } from "react";
import { TextBox } from "../../plank-jsx/textBox/textBox";
import { TextField } from "../../plank-jsx/textfield/textField";
import { Btn } from "../../ui/btn/btn";
import { apiClient } from "../../api/api";
import { Timeline } from "../../components/timeline/timeline";
import { TimelineForm } from "../../components/timeline/timelineForm";



export function Home(){

    
    return(
        <>
            <div style={{
                width: "70%",
                margin: "auto",
            }}>

                <TimelineForm />

                <Timeline />
                
            </div>
            
        </>
    )
}