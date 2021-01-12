import React from "react";

import s from './table.module.css'
import {Button} from "@material-ui/core";
import {MoreHoriz} from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";


const FixPart = () => {
    const params = ['ID', 'First Name', 'Last Name', 'E-mail', 'Phone']

    return (
        <div className={`${s.divRow} ${s.fixRow}`}>
            {params.map(params =>
                <div className={s.divCell} align="center">{params}</div>
            )}
            <Button size='small'>
                <MoreHoriz   fontSize='default'/>
            </Button>
            <Button size='small'>
                <DeleteIcon  fontSize='small' />
            </Button>
        </div>
    )
}
export default FixPart