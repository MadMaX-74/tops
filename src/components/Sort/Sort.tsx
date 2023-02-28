import React from 'react';
import classes from "./Sort.module.css";
import cn from "classnames";
import {SortEnum, SortProps} from "@/components/Sort/Sort.props";
import SortIcon from './Sort.svg';

function Sort({sort, setSort, className, ...props} :SortProps) :JSX.Element {
    return (
       <div className={cn(classes.sort, className)} {...props}>
           <span onClick={() => setSort(SortEnum.Rating)} className={cn({[classes.active]: sort == SortEnum.Rating})}>
               <SortIcon className={classes.sort_icon} />
               По рейтингу
           </span>
           <span onClick={() => setSort(SortEnum.Price)} className={cn({[classes.active]: sort == SortEnum.Price})}>
               <SortIcon className={classes.sort_icon} />
               По цене
           </span>
       </div>
    );
}

export default Sort;
