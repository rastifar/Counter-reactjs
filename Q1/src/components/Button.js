import React, { Component } from 'react';
import styles from './Button.module.css'

class Button extends Component {
    render() {
        return (
            <div className={styles.container}>
                 <button className={styles.btn} onClick={this.props.clickHandler}>{this.props.title}</button>
            </div>
        );
    }
}

export default Button;
