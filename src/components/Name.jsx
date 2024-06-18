import React from "react";
import { Typography, useMediaQuery } from "@mui/material";

export default function Name() {
    const isMobile = useMediaQuery("(max-width:600px)");

    let marginBottom;
    if (isMobile) {
        marginBottom = '90vh';
    } else {
        marginBottom = '60vh';
    }

    return (
        <div>
            <div style={{ marginBottom: marginBottom ,marginLeft: '15%', marginRight: 'auto', marginTop:'10%' }}>
                <Typography sx={{  color:'white', fontSize: '5rem', fontFamily: 'Bricolage Grotesque'}}>
                    hi, my name is
                </Typography>
                
                <Typography sx={{  marginTop:'-4%', color:'white', fontSize: '10rem', fontWeight:'bold', fontFamily: 'Bricolage Grotesque'}}>
                    elise
                </Typography>
            </div>
        </div>
    );
}
