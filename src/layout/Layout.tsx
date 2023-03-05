import React, {FunctionComponent} from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import {LayoutProps} from "./Layout.props";
import Sidebar from './Sidebar/Sidebar';
import classes from "./Layout.module.css";
import {AppContextProvider, IAppContext} from "@/context/app.context";
import Up from "@/components/Up/Up";

function Layout({children} :LayoutProps) :JSX.Element{
    return (
        <div className={classes.wrapper}>
            <Header className={classes.header} />
            <Sidebar className={classes.sidebar} />
            <div className={classes.body}>
                {children}
            </div>
            <Footer className={classes.footer }/>
            <Up />
        </div>
    );
}

export const withLayout = <T extends Record<string, unknown> & IAppContext> (Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) :JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>

        )
    }
}
