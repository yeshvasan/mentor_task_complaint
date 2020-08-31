import React from 'react';

interface HeaderProps {
    title?:string
}

export default function Header() {
    return(
        <header>
            <h1>COMPLAINT MANAGER</h1>
        </header>
    )
}