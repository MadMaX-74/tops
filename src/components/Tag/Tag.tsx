import React from 'react';
import classes from "./Tag.module.css";
import cn from "classnames";
import {TagProps} from "@/components/Tag/Tag.props";

function Tag({children, size = 'm', color = 'ghost', href, className, ...props} :TagProps) :JSX.Element {
    return (
        <div className={cn(classes.tag, className, {
            [classes.s]: size == 's',
            [classes.m]: size == 'm',
            [classes.ghost] :color == 'ghost',
            [classes.red] :color == 'red',
            [classes.grey] :color == 'grey',
            [classes.green] :color == 'green',
            [classes.primary] :color == 'primary'
        })}
           {...props}>
            {href
                ? <a>{children}</a>
                : <>{children}</>}

        </div>
    );
}

export default Tag;
