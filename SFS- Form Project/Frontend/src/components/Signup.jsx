import React, { useState } from 'react'
import { Button, Grid, TextField } from "@mui/material";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Signup() {
    let navigate = useNavigate()

    const [formData, setformData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })

    const updateformData = (e) => {
        const { name, value } = e.target
        setformData({ ...formData, [name]: value })
        console.log(formData)
    }

    const signUp = () => {
        const { firstname, lastname, email, password } = formData

        if (firstname === '' || firstname === null) {
            alert("Enter the valid First Name")
        } else if (lastname === '' || lastname === null) {
            alert("Enter the Valid Last Name")
        } else if (email === '' || email === null) {
            alert("Enter the Valid Email")
        } else if (password === '' || password === null) {
            alert("Enter the Valid Password")
        } else {
            axios.post("http://localhost:5000/signup", formData).then(response => {
                if (response.data.user) {
                    alert(response.data.message)
                    navigate("/")

                } else {
                    alert(response.data.message)
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }

    return (
        <div><Grid container style={{ minHeight: "100vh", width: '100%', padding: '20px' }} item xs={12} sm={6}>
            <Grid container style={{ display: 'flex', flexDirection: 'column', margin: '0  auto', padding: '20px', height: '60%', maxWidth: 600, minWidth: 600, border: '2px solid #999' }}>
                <h1> Create a new account </h1>
                <p> Use your email to create a new account</p>
                <TextField label="First Name" margin='normal' name='firstname' value={formData.firstname} onChange={updateformData} />
                <TextField label="Last Name" margin='normal' name='lastname' value={formData.lastname} onChange={updateformData} />
                <TextField label="Email Address" margin='normal' name='email' value={formData.email} onChange={updateformData} />
                <TextField label='Password' margin='normal' name='password' value={formData.password} onChange={updateformData} />
                <input type='checkbox' id='terms' required /><label htmlFor='terms'>I have read the <a href='#'>Terms and Condtions</a></label>
                <Button color='primary' variant='contained' style={{ marginTop: '10px' }} onClick={signUp}>Sign up Now</Button>
                <p>Don't have an account? <Button color='primary' onClick={() => navigate("/")}>Sign in</Button></p>
            </Grid>
        </Grid></div>
    )
}

export default Signup