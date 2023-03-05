import React, {useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef} from 'react';
import classes from "./Rating.module.css";
import cn from "classnames";
import {RatingProps} from "@/components/Rating/Rating.props";
import StarIcon from './star.svg';

export const Rating  = forwardRef( ({isEditable = false, rating, error, setRating, ...props} :RatingProps, ref: ForwardedRef<HTMLDivElement>) :JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating :number) => {
        const updatedArray = ratingArray.map((r:JSX.Element, i:number) => {
            return (
                <span key={i} className={cn(classes.star, {
                    [classes.filled]: i < currentRating,
                    [classes.editable]: isEditable})}
                      onMouseEnter={() => changeRatingView(i + 1)}
                      onMouseLeave={() => changeRatingView(rating)}
                      onClick={() => changeRating(i + 1)}>
                    <StarIcon
                              tabIndex={isEditable ? 0 : -1}
                              onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e) }
                    />
                </span>
            );
        });
        setRatingArray(updatedArray);
    };
    const changeRatingView = (i:number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };
    const changeRating = (i:number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };
    const handleSpace = (i:number, e: KeyboardEvent<SVGElement>) => {
        if (e.code !== 'Space' || !setRating) {
            return;
        }
        setRating(i);
    };
    return (
        <div {...props} ref={ref} className={cn(classes.ratingWrapper, {
             [classes.error]: error
        })}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
            {error && <span className={classes.errorMessage}>{error.message}</span>}
        </div>
    );
});

