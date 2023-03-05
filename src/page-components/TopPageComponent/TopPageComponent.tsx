import React, {useEffect, useReducer} from 'react';
import {TopPageComponentProps} from "@/page-components/TopPageComponent/TopPageComponent.props";
import Htag from "@/components/Htag/Htag";
import Tag from "@/components/Tag/Tag";
import classes from "./TopPageComponent.module.css";
import HhData from "@/components/hhData/hhData";
import {TopLevelCategory} from "@/interfaces/page.interface";
import Advantages from "@/components/Advantages/Advantages";
import {SortEnum} from "@/components/Sort/Sort.props";
import Sort from '@/components/Sort/Sort';
import {SortReducer} from "@/page-components/TopPageComponent/sort.reducer";
import Product from "@/components/Product/Product";

function TopPageComponent({page, firstCategory, products} :TopPageComponentProps) :JSX.Element {
    const [{products: sortedProducts, sort}, dispatchSort] = useReducer(SortReducer, {products, sort: SortEnum.Rating});
    const setSort = (sort: SortEnum) => {
         dispatchSort({type: sort});
    };
    useEffect(() => {
        dispatchSort({type: 'reset', initialState: products});
    }, [products]);
    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag color='grey' size='m'>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort} />
            </div>
            <div>
                {sortedProducts && sortedProducts.map(p => (<Product key={p._id} product={p} />))}
            </div>
            <div className={classes.hh_title}>
                <Htag tag='h2'>Вакансии - {page.category}</Htag>
                {products && <Tag color='red' size='m'>hh.ru</Tag>}
            </div>
            {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
            {page.advantages && page.advantages.length > 0 &&  <>
                <Htag tag='h2'>Преимущества</Htag>
                <Advantages advantages={page.advantages} />
            </>
            }
            {page.seoText && <div className={classes.seo} dangerouslySetInnerHTML={{__html: page.seoText }} />}
            <Htag tag='h2'>Получаемые навыки</Htag>
            {page.tags.map(t => <Tag key={t} color="primary">{t}</Tag>)}
        </div>
    );
}

export default TopPageComponent;
