import React from "react";

import List from '../List';

import {Container} from './styles';

export default function Board(){
    return(
        <div style={Container}>
            <List />    
            <List />    
            <List />    
            <List />    
        </div>
    )
}