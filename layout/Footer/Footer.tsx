import React from 'react';
import {FooterProps} from "./Footer.props";

function Footer({...props} :FooterProps) :JSX.Element{
    return (
        <div {...props}>
            Footer
        </div>
    );
}

export default Footer;
