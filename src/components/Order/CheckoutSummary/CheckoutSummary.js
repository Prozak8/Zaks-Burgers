import React from 'react';

import classes from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
    return (
        <div>
            <h1 className={classes.CheckoutSummary}>
                Happy with your order?
            </h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
                <Button 
                    btnType="Danger"
                    clicked={props.checkoutCancelled}>
                        Cancel
                </Button>
                <Button 
                    btnType="Success"
                    clicked={props.checkoutContinued}>
                        Continue
                </Button>
        </div>
    );
}

export default checkoutSummary;