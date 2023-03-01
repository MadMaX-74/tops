import React, {useState} from 'react';
import classes from "./Search.module.css";
import cn from "classnames";
import {SearchProps} from "@/components/Search/Search.props";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import SearchIcon from './search.svg'
import {useRouter} from "next/router";

function Search({className, ...props} :SearchProps) :JSX.Element {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();
    const gotoSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            gotoSearch();
        }
    };
    return (
        <div className={cn(className, classes.search)}  {...props}>
            <Input placeholder='Поиск...' value={search} onChange={(e) => setSearch(e.target.value)} className={classes.input} onKeyDown={handleKeyDown} />
            <Button appearance='primary' className={classes.button} onClick={gotoSearch}><SearchIcon /></Button>
        </div>
    );
}

export default Search;
