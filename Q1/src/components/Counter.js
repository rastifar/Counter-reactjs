import React, { Component } from "react";
import Button from "./Button";
import styles from "./Counter.module.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    }
    increaseOne = () => {
        this.setState((prevState) => ({
            counter:prevState.counter+1
        }))
    }
    decreaseOne = () => {
        if (this.state.counter >= 1) {
            this.setState((prevState) => ({
                counter:prevState.counter-1
            }))
        }     
    }
  render() {
    return (
      <div className={styles.container}>
        <span className={styles.span}>{this.state.counter}</span>
        <br />
        <hr className={styles.hr} />
        <div className={styles.btn}>
          <Button title="increase" clickHandler={this.increaseOne} />
          <Button title="decrease" clickHandler={this.decreaseOne}  />
        </div>
      </div>
    );
  }
}

export default Counter;
