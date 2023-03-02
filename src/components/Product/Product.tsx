import React from 'react';
import classes from "./Product.module.css";
import cn from "classnames";
import {ProductProps} from "@/components/Product/Product.props";
import Card from "@/components/Card/Card";
import Htag from '../Htag/Htag';
import Rating from "@/components/Rating/Rating";
import Tag from "@/components/Tag/Tag";
import * as process from "process";
import Button from "@/components/Button/Button";
import {declOfNum, priceRu} from "@/helpers/helpers";
import Devider from "@/components/Devider/Devider";
import Image from "next/image";

function Product({product, className, ...props} :ProductProps) :JSX.Element {
    return (
       <Card className={classes.product}>
           <div className={classes.logo}>
               <Image src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} width={70} height={70} />
           </div>
           <div className={classes.title}>
               <Htag tag='h3'>{product.title}</Htag>
           </div>
           <div className={classes.price}>
               {priceRu(product.price)}
               {product.oldPrice && <Tag className={classes.oldPrice} color={'green'}>{priceRu(product.price - product.oldPrice)}</Tag>}
           </div>
           <div className={classes.credit}>
               {priceRu(product.credit)}/<small className={classes.small}>мес</small>
           </div>
           <div className={classes.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
           <div className={classes.tags}>{product.categories.map(c => <Tag key={c} color='ghost' className={classes.category}>{c}</Tag>)}</div>
           <div className={classes.priceTitle}>Цена</div>
           <div className={classes.creditTitle}>Кредит</div>
           <div className={classes.rateTitle}>{product.reviewCount} {declOfNum(product.reviewCount, ['Отзыв', 'Отзыва', 'Отзывов'])}</div>
           <Devider className={classes.hr} />
           <div className={classes.description}>{product.description}</div>
           <div className={classes.feature}>
               {product.characteristics.map((c) =>
                   (<div className={classes.characteristics} key={c.name}>
                        <span className={classes.characteristicName}>{c.name}</span>
                        <span className={classes.characteristicDots}></span>
                        <span className={classes.characteristicValue}>{c.value}</span>
               </div>) )}
           </div>
           <div className={classes.advBlock}>
               {product.advantages && <div className={classes.advantages}>
                   <div className={classes.advTitle}>Преимущества</div>
                   <div>{product.advantages}</div>
               </div>}
               {product.disAdvantages && <div className={classes.disadvantages}>
                   <div className={classes.advTitle}>Недостатки</div>
                   <div>{product.disAdvantages}</div>
               </div>}
           </div>
           <Devider className={cn(classes.hr, classes.hr2)} />
           <div className={classes.actions}>
               <Button appearance={'primary'}>Узнать подробнее</Button>
               <Button appearance={'ghost'} arrow={'right'} className={classes.reviewBtn}>Читать отзывы</Button>
           </div>
       </Card>
    );
}

export default Product;
