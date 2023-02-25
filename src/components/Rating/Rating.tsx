import React, {useEffect, useState, KeyboardEvent} from 'react';
import classes from "./Rating.module.css";
import cn from "classnames";
import {RatingProps} from "@/components/Rating/Rating.props";
import StarIcon from './star.svg';

function Rating({isEditable = false, rating, setRating, ...props} :RatingProps) :JSX.Element {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating :number) => {
        const updatedArray = ratingArray.map((r:JSX.Element, i:number) => {
            return (
                <span className={cn(classes.star, {
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
        <div {...props}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    );
}

export default Rating;
