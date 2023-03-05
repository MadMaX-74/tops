import React, {ForwardedRef, forwardRef} from 'react';
import classes from "./Textarea.module.css";
import cn from "classnames";
import {TextareaProps} from "@/components/Textarea/Textarea.props";

export const Textarea = forwardRef(({error, className, ...props} :TextareaProps, ref:ForwardedRef<HTMLTextAreaElement>) :JSX.Element => {
    return (
        <div className={cn(classes.textareaWrapper, className) }>
            <textarea className={cn(classes.textarea, {
                [classes.error] : error
            })} {...props} ref={ref}/>
            {error && <span className={classes.errorMessage}>{error.message}</span>}
        </div>
    );
}) ;

