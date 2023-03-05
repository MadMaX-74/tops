import React, {useState} from 'react';
import classes from "./ReviewForm.module.css";
import cn from "classnames";
import {ReviewFormProps} from "@/components/ReviewForm/ReviewForm.props";
import {Input} from "@/components/Input/Input";
import {Rating} from "@/components/Rating/Rating";
import {Textarea} from "@/components/Textarea/Textarea";
import Button from "@/components/Button/Button";
import CloseIcon from './close.svg';
import {Controller, useForm} from "react-hook-form";
import {ReviewFormInterface, ReviewSentResponse} from "@/interfaces/reviewForm.interface";
import axios from "axios";
import {API} from "@/helpers/api";

function ReviewForm({productId, className, ...props} :ReviewFormProps) :JSX.Element {
    const {register, control, handleSubmit, formState: {errors}, reset} = useForm<ReviewFormInterface>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const onSubmit = async (formData: ReviewFormInterface) => {
        try {
            const {data} = await axios.post<ReviewSentResponse>(API.review.createDemo, {...formData, productId });
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError('Что то пошло не так');
            }
        } catch (e:any) {
            setError(e.message);
        }
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
            {isSuccess &&  <div className={classes.success}>
                <div className={classes.successTitle}>Ваш отзыв отправлен</div>
                <div className={classes.successDescription}>Ваш отзыв будет опубликован после проверки</div>
                <CloseIcon className={classes.closeIcon} onClick={() => setIsSuccess(false)} />
            </div>}
            {error &&  <div className={classes.error}>
                <div className={classes.errorTitle}>Отзыв не отправлен</div>
                <div className={classes.errorDescription}>{error}</div>
                <CloseIcon className={classes.closeIcon} onClick={() => setError(undefined)}/>
            </div>}

        </form>
    );
}

export default ReviewForm;
