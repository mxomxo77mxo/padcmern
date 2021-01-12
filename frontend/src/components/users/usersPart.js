import React from "react";
import { useDispatch } from 'react-redux';
import {Button} from "@material-ui/core";
import { MoreHoriz } from "@material-ui/icons";
import DeleteIcon from '@material-ui/icons/Delete';

import { deleteUser } from '../../actions/users'
import s from './table.module.css'



const UsersPart = ({ user, setCurrentId } ) => {
    const userInfo = [user._id, user.firstname, user.lastname, user.email, user.phonenumber ]

    const dispatch = useDispatch();
    return (
        <div className={s.divRow}>
            {userInfo.map(userInfo =>
                <div className={s.divCell} align="center">{userInfo}</div>
            )}
            <Button size='small'
                    onClick={() => setCurrentId(user._id)}>
                <MoreHoriz   fontSize='default'/>
            </Button>
            <Button size='small'
                    onClick={() => dispatch(deleteUser(user._id))}>
                <DeleteIcon  fontSize='small' />
            </Button>
        </div>
    )
}

export default UsersPart