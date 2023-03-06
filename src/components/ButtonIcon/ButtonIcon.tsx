import React from 'react';
import classes from "./ButtonIcon.module.css";
import cn from 'classnames';
import {ButtonIconProps, icons} from "@/components/ButtonIcon/ButtonIcon.props";

function ButtonIcon({appearance, icon, className, ...props} :ButtonIconProps) :JSX.Element{
    const IconComp = icons[icon];
    return (
        <button className={cn(classes.button, className, {
            [classes.primary] :appearance == 'primary',
            [classes.white] :appearance == 'white'
        })}
                {...props}>
            <IconComp />
        </button>
    );
}

export default ButtonIcon;
