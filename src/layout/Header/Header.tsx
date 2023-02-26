import React from 'react';
import {HeaderProps} from "./Header.props";

function Header({...props} :HeaderProps) :JSX.Element{
    return (
        <div {...props}>
            Header
        </div>
    );
}

export default Header;
