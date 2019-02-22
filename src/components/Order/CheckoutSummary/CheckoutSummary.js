import React from 'react';

import classes from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
    return (
        <div>
            <h1 className={classes.CheckoutSummary}>
                We hope it tastes great!
            </h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
                <Button 
                    btnType="Danger"
                    clicked>
                        Cancel
                </Button>
                <Button 
                    btnType="Success"
                    clicked>
                        Continue
                </Button>
        </div>
    )
}

export default checkoutSummary;