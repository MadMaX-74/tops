import React from 'react';
import {SidebarProps} from "./Sidebar.props";
import Menu from "@/layout/Menu/Menu";
import Logo from '../logo.svg'
import classes from "./Sidebar.module.css";
import cn from "classnames";

function Sidebar({className, ...props} :SidebarProps) :JSX.Element{
    return (
        <div className={cn(className, classes.sidebar)} {...props} >
            <Logo className={classes.logo} />
            <div>Search...</div>
            <Menu />
        </div>
    );
}

export default Sidebar;
