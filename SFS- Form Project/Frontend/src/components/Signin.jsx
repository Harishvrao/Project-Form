import React, { useState } from 'react';
import { Button, Grid, TextField } from "@mui/material";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Signin({ setLoginUser }) {

    let navigate = useNavigate()

    const [formData, setformData] = useState({
        email: '',
        password: ''
    })

    const updateformData = (e) => {
        const { name, value } = e.target
        setformData({ ...formData, [name]: value })
        console.log(formData)
    }

    const signIn = () => {
        const { email, password } = formData

        if (email === '' || email === null) {
            alert("Enter the Valid Email")
        } else if (password === '' || password === null) {
            alert("Enter the Valid Password")
        } else {

            axios.post("http://localhost:5000/", formData).then(response => {
                if (response.data.user) {
                    navigate("/home")
                } else {
                    alert(response.data.message)
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }

    return (
        <Grid container style={{ minHeight: "100vh", width: '100%', padding: '100px' }} item xs={12} sm={6}>
            <Grid container style={{ display: 'flex', flexDirection: 'column', margin: '0 auto', padding: '20px', height: '60%', maxWidth: 600, minWidth: 600, border: '2px solid #999' }}>
                <h1> Sign in</h1>
                <TextField label="Email Address" margin='normal' name='email' value={formData.email} onChange={updateformData} required />
                <TextField label='Password' margin='normal' name='password' value={formData.password} onChange={updateformData} required />
                <Button color='primary' variant='contained' onClick={signIn}>Sign In Now</Button>
                <p>Don't have an account? <Button color='primary' onClick={() => { navigate("/signup") }}>Sign Up</Button></p>
            </Grid>
        </Grid>
    )
}

export default Signin