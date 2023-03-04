import React from 'react';
import classes from "./ReviewForm.module.css";
import cn from "classnames";
import {ReviewFormProps} from "@/components/ReviewForm/ReviewForm.props";
import {Input} from "@/components/Input/Input";
import {Rating} from "@/components/Rating/Rating";
import {Textarea} from "@/components/Textarea/Textarea";
import Button from "@/components/Button/Button";
import CloseIcon from './close.svg';
import {Controller, useForm} from "react-hook-form";
import {ReviewFormInterface} from "@/interfaces/reviewForm.interface";

function ReviewForm({productId, className, ...props} :ReviewFormProps) :JSX.Element {
    const {register, control, handleSubmit} = useForm<ReviewFormInterface>();
    const onSubmit = (data: ReviewFormInterface) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(classes.reviewForm, className)}
               {...props}>
                <Input {...register("name")} placeholder={'Имя'}/>
                <Input {...register('title')} className={classes.title} placeholder={'Заголовок отзыва'}/>
                <div className={classes.rating}>
                    <span>Оценка:</span>
                    <Controller control={control} render={({field}) => (
                        <Rating isEditable rating={field.value} ref={field.ref} setRating={field.onChange}/>
                    )} name={'rating'} />
                </div>
                <Textarea {...register('description')} className={classes.description} placeholder={'Текст отзыва'}/>
                <div className={classes.submit}>
                    <Button appearance={'primary'} type={"submit"}>Отправить</Button>
                </div>
            </div>
            <div className={classes.success}>
                <div className={classes.successTitle}>Ваш отзыв отправлен</div>
                <div className={classes.successDescription}>Ваш отзыв будет опубликован после проверки</div>
                <CloseIcon className={classes.closeIcon} />
            </div>

        </form>
    );
}

export default ReviewForm;
