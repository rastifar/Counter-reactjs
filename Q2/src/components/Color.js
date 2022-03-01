import React, { Component } from 'react';
import styles from './Color.module.css'

class Color extends Component {
    render() {
        return (
            <div className={styles.container}>
                <span className={styles.square} style={{ background:`${this.props.newColor}`}}></span>
                <p className={styles.inline}>{this.props.newColor}</p>
            </div>
        );
    }
}

export default Color;