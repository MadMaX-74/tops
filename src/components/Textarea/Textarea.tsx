import React from 'react';
import classes from "./Textarea.module.css";
import cn from "classnames";
import {TextareaProps} from "@/components/Textarea/Textarea.props";

function Textarea({className, ...props} :TextareaProps) :JSX.Element {
    return (
        <textarea className={cn(classes.input, className)} {...props}/>
    );
}

export default Textarea;
