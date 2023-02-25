import React from 'react';
import classes from "./Button.module.css";
import {ButtonProps} from "@/components/Button/Button.props";
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

function Button({appearance, children, arrow = 'none', className, ...props} :ButtonProps) :JSX.Element{
    return (
        <button className={cn(classes.button, className, {
            [classes.primary] :appearance == 'primary',
            [classes.ghost] :appearance == 'ghost'
        })}
                {...props}>
            {children}
            {arrow !== 'none' && <span className={cn(classes.arrow, {
                [classes.down]: arrow == 'down'
            })}>
                <ArrowIcon />
            </span>}
        </button>
    );
}

export default Button;
