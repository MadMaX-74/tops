import React from 'react';
import classes from "./Devider.module.css";
import cn from "classnames";
import {DeviderProps} from "@/components/Devider/Devider.props";

function Devider({className, ...props} :DeviderProps) :JSX.Element {
    return (
        <hr className={cn(classes.hr, className)} {...props}/>
    );
}

export default Devider;
