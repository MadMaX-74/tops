import React from 'react';
import classes from "./hhData.module.css";
import {HhDataProps} from "@/components/hhData/hhData.props";
import RateIcon from './rate.svg';
import Card from "@/components/Card/Card";
import {priceRu} from "@/helpers/helpers";

function HhData({count, juniorSalary, middleSalary, seniorSalary} :HhDataProps ) :JSX.Element {
    return (
        <div className={classes.hh}>
            <Card className={classes.count}>
                <div className={classes.title}>Всего вакансии</div>
                <div className={classes.countValue}>{count}</div>
            </Card>
            <Card className={classes.salary }>
                <div>
                    <div className={classes.title}>Начальный</div>
                    <div className={classes.salaryValue}>{priceRu(juniorSalary)}</div>
                    <div className={classes.rate}>
                        <RateIcon className={classes.filled} />
                        <RateIcon />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={classes.title}>Средний</div>
                    <div className={classes.salaryValue}>{priceRu(middleSalary)}</div>
                    <div className={classes.rate}>
                        <RateIcon className={classes.filled} />
                        <RateIcon className={classes.filled} />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={classes.title}>Профессиональный</div>
                    <div className={classes.salaryValue}>{priceRu(seniorSalary)}</div>
                    <div className={classes.rate}>
                        <RateIcon className={classes.filled} />
                        <RateIcon className={classes.filled} />
                        <RateIcon className={classes.filled} />
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default HhData;
