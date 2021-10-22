import React,{useEffect, useState} from 'react'
import Cookie from 'js-cookie'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

import { logOutAction } from "./redux/userActions.js";

import { useDispatch } from 'react-redux';
import {Button} from "semantic-ui-react"
const Secret = (props) =>{

    const history = useHistory()
    const [info, setInfo] = useState({
        username:"",
        time:"",
        path:""
    })


    const dispatch = useDispatch()

    const id = props.match.params.id

    
    useEffect(() =>{
        async function myFunc(){
            const res = await axios.get(`https://fabbackend.herokuapp.com/api/user/${id}`)
        const {data} = res
        const username = data.user.username
        const ct = data.user.currentTime.slice(0,10)
        setInfo({
            username : username,
            time:ct,
            path:process.cwd()
        })
        }
        myFunc()
    },[id])

    const handleClick = () =>{
        Cookie.remove("userInfo");
        dispatch(logOutAction())
        history.push("/")

    }

    return(
        <div className='info-wrapper'>
            <div className="info-container">
            <h1>{info.username}</h1>
            <h1>{info.time}</h1>
            <h1>{info.path}</h1>
            <Button positive onClick={handleClick}>Logout</Button>
        </div>
        </div>

        
    )
}

export default Secret