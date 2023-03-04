import React, {ForwardedRef, forwardRef} from 'react';
import classes from "./Textarea.module.css";
import cn from "classnames";
import {TextareaProps} from "@/components/Textarea/Textarea.props";

export const Textarea =forwardRef(({className, ...props} :TextareaProps, ref:ForwardedRef<HTMLTextAreaElement>) :JSX.Element => {
    return (
        <textarea className={cn(classes.input, className)} {...props} ref={ref}/>
    );
}) ;

