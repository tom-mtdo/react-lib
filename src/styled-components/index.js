import React from 'react';
import PassToSubComponent from './pass-to-sub-component';

export default function StyledComponent () {
    return(
        <>
            <PassToSubComponent name="Tom"/>
            <br></br>
            <PassToSubComponent name="Hailey"/>
        </>
    )
}