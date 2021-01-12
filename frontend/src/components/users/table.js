import React, {useState} from "react";
import {Container, IconButton, InputBase} from "@material-ui/core";
// import {useSelector} from 'react-redux';

import s from './table.module.css'
import FixPart from "./fixPart";
import UsersPart from "./usersPart";
import SearchIcon from "@material-ui/icons/Search";

const Table = ({setCurrentId, loading, users}) => {
    // const users = useSelector((state) => state.users);
    const [searchTerm, setSerachTerm] = useState('')
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <Container className={s.divTable}>
                <Container>
                    <form>
                        <InputBase type='text' name='search' className={s.input} placeholder='    Search User'
                                   onChange={ e => { setSerachTerm(e.target.value) }  }
                        />
                        <IconButton>
                            <SearchIcon className={s.iconser}/>
                        </IconButton>
                    </form>
                </Container>
                <FixPart/>
                {users.filter( (val) =>{
                    if( searchTerm ===  ''){
                        return val
                    }else if( val.firstname.toLocaleLowerCase().includes(searchTerm) ||
                              val.lastname.toLocaleLowerCase().includes(searchTerm)  ||
                              val.email.includes(searchTerm)){
                        return val
                    }
                } ).map((user) => (
                    <UsersPart user={user} setCurrentId={setCurrentId}/>
                ))
                }
            </Container>
        </div>
    )
}


export default Table