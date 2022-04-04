import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { showErrorMsg } from '../services/event-bus.service.js'
import { LoadCSV } from '../cmps/LoadCSV.jsx';

export function _SongList({user}){
    let navigate = useNavigate();

    useEffect(()=>{
        if(!user){
            navigate('/login')
            showErrorMsg('Login first!')
        } 
    },[])

   

    return(
        <section className='song-list'>
         <LoadCSV/>
        </section>
    )
}

function mapStateToProps(state) {
    return {
        user: state.userModule.user,
    }
}
const mapDispatchToProps = {
    
}

export const SongList = connect(mapStateToProps, mapDispatchToProps)(_SongList)