import React from "react";

import {Container} from './Styles';

export default function List(){
    return(
        <div style={Container}> 
            <header>
                <h2>Tarefas</h2>
                
                <button type='button'>
                    +
                </button>
            </header>
        </div>
    )
}