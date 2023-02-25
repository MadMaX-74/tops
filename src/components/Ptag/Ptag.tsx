import React from 'react';
import {PtagProps} from "@/components/Ptag/Ptag.props";
import classes from "./Ptag.module.css";
import cn from "classnames";

function Ptag({children, size = 'm', className, ...props} :PtagProps) :JSX.Element {
    return (
        <p className={cn(classes.p, className, {
            [classes.s]: size == 's',
            [classes.m]: size == 'm',
            [classes.l]: size == 'l',
        })}
           {...props}>
            {children}
        </p>
    );
}

export default Ptag;
