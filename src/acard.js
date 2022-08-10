import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Container, ImageList, ImageListItem} from "@mui/material";
import BasicModal from "./aModal";


export default function BasicCard() {

    return (<Container sx={{display: "flex", flexDirection: "row"}}>
        <ImageList sx={{display: "flex-grow", flexGrow: "1", width: 600, height: 350, pt: 20}} rowHeight={164}>
            <ImageListItem key={1} sx={{display: "inline"}}>
                <img
                    src={`https://img02.mockplus.cn/image/2022-08-10/e037d780-185b-11ed-8b0d-7fcffbd6e43f.jpeg?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`https://img02.mockplus.cn/image/2022-08-10/e037d780-185b-11ed-8b0d-7fcffbd6e43f.jpeg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    loading="lazy"
                />
            </ImageListItem>
        </ImageList>
        <Container sx={{display: "flex", flexGrow: "1", flexDirection: "column"}}>
            <Container sx={{display: "flex-grow", flexGrow: "1"}}>
                <Typography variant="h4" component="div" gutterBottom textAlign={"center"} paddingTop={3}>
                    New With Tags Mens Under Armour Gym UA Muscle Athletic Logo Shorts
                </Typography>
            </Container>
            <Container sx={{display: "flex-grow", flexGrow: "1", ml: 18, mt: 1}}>
                <Box sx={{width: '90%', maxWidth: 500}}>
                    <Typography variant="h4" component="div" gutterBottom>
                        Price: {'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'} US $259.00
                    </Typography>
                </Box>
                <Box sx={{width: '100%', maxWidth: 500}}>
                    <Typography variant="h4" component="div" gutterBottom>
                        Dividend:{'\u00A0\u00A0\u00A0'} 9%
                    </Typography>
                </Box>
            </Container>

            <Container sx={{display: "flex", flexDirection: "row"}}>
                <Container sx={{display: "flex-grow"}}>
                    <BasicModal variant="contained">ff</BasicModal>
                </Container>
                <Container sx={{display: "flex-grow"}}><Button
                    variant="contained">Add to My Adsset</Button></Container>
            </Container>
        </Container>
    </Container>);
}
