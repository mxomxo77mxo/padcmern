import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Container} from '@material-ui/core';
import {useDispatch} from 'react-redux';

import './style.css'
import Form from './components/form/Form';
import {getUsers} from './actions/users'
import s from "./components/users/table.module.css";
import Table from "./components/users/table";
import Pagination from "./components/users/Pagination";

function App() {
    const [currentId, setCurrentId] = useState(0);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(4);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [currentId, dispatch])

    const fetchAllUsers = async () => {
        setLoading(true);
        const res = await axios.get('http://localhost:5000/users');
        setUsers(res.data);
        setLoading(false);
    };
    useEffect(() => {
        fetchAllUsers()
    }, [])
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    return (
        <Container>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
            <Container className={s.divTable}>
                <Table loading={loading}
                       users={currentUsers}
                       setCurrentId={setCurrentId}
                       setUsers={setUsers}
                />
                <Pagination
                    usersPerPage={usersPerPage}
                    totalUsers={users.length}
                    paginate={paginate}
                    setCurrentPage={setCurrentPage}
                />
            </Container>
        </Container>
    )
}

export default App
