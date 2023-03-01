import React from 'react';
import classes from "./Input.module.css";
import cn from "classnames";
import {InputProps} from "@/components/Input/Input.props";

function Input({className, ...props} :InputProps) :JSX.Element {
    return (
        <input className={cn(classes.input, className)} {...props}/>
    );
}

export default Input;
