import React from 'react';

import { Container } from './styles';

export default function Header() {
    return (
        <div style={Container}> 
            <h1 style={{display: 'flex', alignItems: 'center'}}>Rocketfy</h1>
        </div>
    )
}