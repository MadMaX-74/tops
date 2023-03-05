import React, {ForwardedRef, forwardRef} from 'react';
import classes from "./Input.module.css";
import cn from "classnames";
import {InputProps} from "@/components/Input/Input.props";

export const Input = forwardRef(({error, className, ...props} :InputProps, ref:ForwardedRef<HTMLInputElement>) :JSX.Element => {
    return (
        <div className={cn(classes.inputWrapper, className)}>
            <input className={cn(classes.input, {
                [classes.error]: error
            })} {...props} ref={ref}/>
            {error && <span className={classes.errorMessage}>{error.message}</span>}
        </div>
    );
}) ;

