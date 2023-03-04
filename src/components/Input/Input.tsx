import React, {ForwardedRef, forwardRef} from 'react';
import classes from "./Input.module.css";
import cn from "classnames";
import {InputProps} from "@/components/Input/Input.props";

export const Input = forwardRef(({className, ...props} :InputProps, ref:ForwardedRef<HTMLInputElement>) :JSX.Element => {
    return (
        <input className={cn(classes.input, className)} {...props} ref={ref}/>
    );
}) ;

