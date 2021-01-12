import React, { useEffect, useState } from 'react'
import { Container, TextField, Button, Typography, Paper  } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { createUser, updateUser } from '../../actions/users';


function Form ({ currentId, setCurrentId  }) {
    const [userData, setUserData] = useState({ firstname: '', lastname: '', email: '', phonenumber: ''})
    const user = useSelector((state) => (currentId ? state.users.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) setUserData(user);
    }, [user]);


    const clear = () => {
        setCurrentId(0);
        setUserData({ firstname: '', lastname: '', email: '', phonenumber: ''});
    };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
          if (currentId === 0) {
              dispatch(createUser(userData));
              clear();
          }
          else {
              dispatch(updateUser(currentId, userData));
              clear();
      }
    }

    return (
        <Container>
            <Paper>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <Typography variant="h6" align={"center"}>Add User</Typography>
                    <TextField name="firstname" variant="outlined" label=" First name" fullWidth
                    value={userData.firstname}
                    onChange={ (e) => setUserData({ ...userData,  firstname: e.target.value}) }
                    />
                    <TextField name="lastname" variant="outlined" label=" Last name" fullWidth
                    value={userData.lastname}
                    onChange={ (e) => setUserData({ ...userData,  lastname: e.target.value}) }
                    />
                    <TextField name="email" variant="outlined" label=" E-mail" fullWidth 
                    value={userData.email}
                    onChange={ (e) => setUserData({ ...userData,  email: e.target.value }) }
                    />
                    <TextField name="phonenumber" variant="outlined" label=" Phone Number" fullWidth 
                    value={userData.phonenumber}
                    onChange={ (e) => setUserData({ ...userData,  phonenumber: e.target.value }) }
                    />
                    <Button variant="contained" color="primary" size="large" type="submit" fullWidth>
                        Submit
                    </Button>
                    <Button variant="contained" color="secondary" size="small" 
                    onClick={clear}
                    >
                        Clear
                    </Button>
                </form>
        </Paper>
        </Container>
    )
}

export default Form
