import React from 'react';
import classes from "./Advantages.module.css";
import {AdvantagesProps} from "@/components/Advantages/Advantages.props";
import CheckIcon from './check.svg';

function Advantages({advantages} :AdvantagesProps ) :JSX.Element {
    return (
       <div className={classes.advantages}>
           {advantages.map(a => (
               <div key={a._id} className={classes.advantage}>
                    <CheckIcon />
                   <div className={classes.title}>{a.title}</div>
                   <hr className={classes.vline}/>
                   <div>{a.description}</div>
               </div>
           ))}
       </div>
    );
}

export default Advantages;
