import React, {ForwardedRef, forwardRef} from 'react';
import classes from "./Card.module.css";
import cn from "classnames";
import {CardProps} from "@/components/Card/Card.props";

export const Card = forwardRef( ({color = 'white', children,  className, ...props} :CardProps, ref: ForwardedRef<HTMLDivElement>) :JSX.Element => {
    return (
        <div className={cn(classes.card, className, {
            [classes.blue]: color == 'blue'
        })} ref={ref} {...props}>
            {children}
        </div>
    );
});


