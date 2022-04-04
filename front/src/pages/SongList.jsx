import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { showErrorMsg } from '../services/event-bus.service.js'
import { LoadCSV } from '../cmps/LoadCSV.jsx';

import {setSongList} from '../store/songList.actions'

export function _SongList({user, songList, setSongList}){
    let navigate = useNavigate();
    console.log(songList);
    useEffect(()=>{
        if(!user){
            navigate('/login')
            showErrorMsg('Login first!')
        } 
    },[])

   

    return(
        <section className='song-list'>
         <LoadCSV setSongList={setSongList}/>
        </section>
    )
}

function mapStateToProps(state) {
    return {
        user: state.userModule.user,
        songList: state.songListModule.songList
    }
}
const mapDispatchToProps = {
    setSongList
}

export const SongList = connect(mapStateToProps, mapDispatchToProps)(_SongList)