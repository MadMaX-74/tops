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
    const {register, control, handleSubmit, formState: {errors}} = useForm<ReviewFormInterface>();
    const onSubmit = (data: ReviewFormInterface) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(classes.reviewForm, className)}
               {...props}>
                <Input
                    {...register("name", {required: {value: true, message: 'Заполните имя'}})}
                    placeholder={'Имя'}
                    error={errors.name}
                />
                <Input {...register('title', {required: {value: true, message: 'Заполните заголовок'}})} className={classes.title} placeholder={'Заголовок отзыва'} error={errors.title}/>
                <div className={classes.rating}>
                    <span>Оценка:</span>
                    <Controller control={control} rules={{required: {value: true, message: 'Поставьте оценку'}}} render={({field}) => (
                        <Rating isEditable rating={field.value} ref={field.ref } setRating={field.onChange} error={errors.rating}/>
                    )} name={'rating'}  />
                </div>
                <Textarea {...register('description', {required: {value: true, message: 'Заполните описание'}})} className={classes.description} placeholder={'Текст отзыва'} error={errors.description}/>
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
