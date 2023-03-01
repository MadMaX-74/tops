import React from 'react';
import {SidebarProps} from "./Sidebar.props";
import Menu from "@/layout/Menu/Menu";
import Logo from '../logo.svg'
import classes from "./Sidebar.module.css";
import cn from "classnames";
import Search from "@/components/Search/Search";

function Sidebar({className, ...props} :SidebarProps) :JSX.Element{
    return (
        <div className={cn(className, classes.sidebar)} {...props} >
            <Logo className={classes.logo} />
            <Search />
            <Menu />
        </div>
    );
}

export default Sidebar;
