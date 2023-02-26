import React from 'react';
import {SidebarProps} from "./Sidebar.props";
import Menu from "@/layout/Menu/Menu";

function Sidebar({...props} :SidebarProps) :JSX.Element{
    return (
        <div {...props}>
            <Menu />
        </div>
    );
}

export default Sidebar;
