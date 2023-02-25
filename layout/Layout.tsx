import React, {FunctionComponent} from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import {LayoutProps} from "./Layout.props";
import Sidebar from './Sidebar/Sidebar';
import classes from "./Layout.module.css";

function Layout({children} :LayoutProps) :JSX.Element{
    return (
        <div className={classes.wrapper}>
            <Header className={classes.header} />
            <Sidebar className={classes.sidebar} />
            <div className={classes.body}>
                {children}
            </div>
            <Footer className={classes.footer }/>
        </div>
    );
}

export const withLayout = <T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) :JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}
