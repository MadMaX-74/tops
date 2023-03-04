import React from 'react';
import classes from "./ReviewForm.module.css";
import cn from "classnames";
import {ReviewFormProps} from "@/components/ReviewForm/ReviewForm.props";
import Input from "@/components/Input/Input";
import Rating from "@/components/Rating/Rating";
import Textarea from "@/components/Textarea/Textarea";
import Button from "@/components/Button/Button";

function ReviewForm({productId, className, ...props} :ReviewFormProps) :JSX.Element {
    return (
        <div className={cn(classes.reviewForm, className)}
           {...props}>
            <Input placeholder={'Имя'}/>
            <Input className={classes.title} placeholder={'Заголовок отзыва'}/>
            <div className={classes.rating}>
                <span>Оценка:</span>
                <Rating rating={0}/>
            </div>
            <Textarea className={classes.description} placeholder={'Текст отзыва'}/>
            <div className={classes.submit}>
                <Button appearance={'primary'}>Отправить</Button>
            </div>
        </div>
    );
}

export default ReviewForm;
