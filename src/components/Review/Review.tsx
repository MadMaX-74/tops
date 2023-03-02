import React from 'react';
import classes from "./Review.module.css";
import cn from "classnames";
import {ReviewProps} from "@/components/Review/Review.props";
import UserIcon from './user.svg';
import { format } from 'date-fns';
import {ru} from "date-fns/locale";
import Rating from "@/components/Rating/Rating";

function Review({review, className, ...props} :ReviewProps) :JSX.Element {
    const {name, title, description, createdAt, rating} = review;
    return (
        <div className={cn(classes.review, className)}
           {...props}>
            <UserIcon className={classes.user} />
            <div className={classes.title}>
                <span className={classes.name}>{name}:</span>&nbsp;&nbsp;
                <span>{title}</span>
            </div>
            <div className={classes.date}>
                {format(new Date(createdAt), 'dd MMMM yyyy', {locale: ru})}
            </div>
            <div className={classes.rating}>
                <Rating rating={rating} />
            </div>
            <div className={classes.description}>
                {description}
            </div>

        </div>
    );
}

export default Review;
