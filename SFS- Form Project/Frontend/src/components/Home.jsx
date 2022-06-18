import { Grid, Typography, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()

    return (
        <Grid container style={{ minHeight: '100vh', width: '100%', display: 'flex' }}>
            <Grid container style={{ minHeight: '100vh', width: '25%', backgroundColor: 'black' }}>
                <Typography><Button color='primary' variant='contained' onClick={() => navigate("/")}> Sign Out</Button></Typography>
            </Grid>
            <Grid>
                <Typography style={{ fontSize: '75px', margin: '50px' }}> Welcome to Smart Food Safe</Typography>
                <Typography style={{ fontSize: '25px', margin: '50px' }}>Transforming the World of Food Safety with Smart Software Solutions.</Typography>
            </Grid>
        </Grid>
    )
}

export default Home