import React, {useContext} from 'react';
import {AppContext} from "@/context/app.context";
import {IFirstLevelMenuItem, PageItem} from "@/interfaces/menu.interface";
import classes from "./Menu.module.css";
import cn from "classnames";
import Link from "next/link";
import {useRouter} from "next/router";
import {firstLevelMenu} from "@/helpers/helpers";
import {motion } from "framer-motion";

function Menu() :JSX.Element{
    const {menu, firstCategory, setMenu} = useContext(AppContext);
    const router = useRouter();
    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: {marginBottom: 0}
    };
    const variantsChildren = {
        visible: {
            opacity: 1,
            height: 29
        },
        hidden: {opacity: 0, height: 0}
    };
    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory == secondCategory) {
                m.isOpened = !m.isOpened;
            }
            return m;
        }));
    };
    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(menu =>
                    <div key={menu.route}>
                        <Link href={`${menu.route}`}>
                                <div className={cn(classes.firstLevel, {
                                    [classes.firstLevelActive]: menu.id === firstCategory
                                })}>
                                    {menu.icon}
                                    <span>{menu.name}</span>
                                </div>
                        </Link>

                        {menu.id === firstCategory && buildSecondLevel(menu)}
                    </div>)}
            </>
        );
    };
    const buildSecondLevel = (menuItem :IFirstLevelMenuItem) => {
        return (
            <div className={classes.secondLevelWrapper}>
                {menu.map(m => {
                    if(m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true;
                    }
                    return (
                    <div key={m._id.secondCategory}>
                        <div className={classes.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>
                            {m._id.secondCategory}
                        </div>
                        <motion.div
                            layout
                            variants={variants}
                            initial={m.isOpened ? 'visible' : 'hidden'}
                            animate={m.isOpened ? 'visible' : 'hidden'}
                            className={cn(classes.secondLevelBlock)}
                        >
                            {buildThirdLevel(m.pages, menuItem.route)}
                        </motion.div>
                    </div>
                )})}
            </div>
        );
    };
    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(page => (
                <motion.div key={page._id} variants={variantsChildren}>
                    <Link href={`/${route}/${page.alias}`} className={cn(classes.thirdLevel, {
                        [classes.thirdLevelActive]: `/${route}/${page.alias}` == router.asPath
                    })}>
                        {page.category}
                    </Link>
                </motion.div>
            ))
        );
    };
    return (
        <nav className={classes.menu}>
            {buildFirstLevel()}
        </nav>
    );
}

export default Menu;
