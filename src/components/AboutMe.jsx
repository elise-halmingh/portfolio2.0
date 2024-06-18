import React from "react";
import { Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import profileImage from "../assets/profielimage.jpeg";
import AboutMeBackground from "../assets/aboutme2.jpg";
import { Box, Container, IconButton, Link } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export default function AboutMe() {
    const isMobile = useMediaQuery('(max-width: 600px)');
    const isCustomResolution = useMediaQuery('(min-width: 1440px)');

    let marginTop;
    if (isMobile) {
        marginTop = '-50vh';
    } else if (isCustomResolution) {
        marginTop = '65vh';
    } else {
        marginTop = '25vh';
    }

    return (
        <div   style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            height: '110vh', 
            marginTop:  marginTop, 
            backgroundImage: `url(${AboutMeBackground})`, 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            textAlign: 'center' 
        }}>
            <div style={{ maxWidth: "500px", marginTop: '20px' }}>
                <img src={profileImage} alt="Profile" style={{ maxWidth: "100%", height: "auto", borderRadius:"1%" }} />
            </div>
            <div style={{ marginLeft: '200px' }}>
                <Typography sx={{ position:'relative', maxWidth: "170px", fontSize: '2.5rem', fontFamily: 'Bricolage Grotesque', color: '#C0C0C0', backgroundColor: "#0E0E0E", padding: "0 20px", marginBottom: "10px", textAlign: "center" }}>
                    About Me
                </Typography>
                <Card sx={{ marginTop:'-7%', height: '50vh', width: '50vh', backgroundColor: '#0E0E0E', border: "1px solid #C0C0C0", borderRadius: "10px", padding: '10px' }}>
                    <CardContent>
                        <Typography variant='h5' sx={{ fontFamily: 'Bricolage Grotesque', color: '#C0C0C0', textAlign: 'left', width: '100%', paddingTop: '10%' }}>
                            Hello, I'm Elise Halmingh, a 21-year-old Software Development student interested in UX/UI design. <br></br><br></br>
                            I enjoy creating intuitive digital experiences and listening to music in my free time.<br></br>
                            As I learn more about technology, I find inspiration in combining user-friendly design with creativity.<br></br><br></br>
                            Welcome to my page, where I share my projects and my journey in software development.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
           
            <Box sx={{ padding:'10px', display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 0, marginBottom:'70px', border: "1px solid #412BA3", borderRadius: "10px",}}>
                <Container maxWidth="sm">
                    <Typography sx={{fontFamily: 'Bricolage Grotesque', color: '#412BA3'}} variant="body1">Elise Halmingh © {new Date().getFullYear()}</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <IconButton
                        component={Link}
                        href="https://github.com/elise-halmingh"
                        target="_blank"
                        rel="noopener"
                        aria-label="GitHub"
                        sx={{ color: '#412BA3' }}
                    >
                        <GitHub />
                    </IconButton>
                    <IconButton
                        component={Link}
                        href="https://www.linkedin.com/in/elise-halmingh-8a257a240/"
                        target="_blank"
                        rel="noopener"
                        aria-label="LinkedIn"
                        sx={{ color: '#412BA3' }}
                    >
                        <LinkedIn />
                    </IconButton>
                    <IconButton
                        component={Link}
                        href="mailto:elise.halmingh@gmail.com"
                        target="_blank"
                        rel="noopener"
                        aria-label="Email"
                        sx={{ color: '#412BA3' }}
                    >
                        <Email />
                    </IconButton>
                    </Box>
                </Container>
            </Box>
        </div>
    );
}
