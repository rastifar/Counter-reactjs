import React, { Component } from "react";
import Color from "./Color";
import styles from './ColorGenerator.module.css'

class ColorGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
    };
  }
  getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let randomColor = "#";
    for (var i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({
      colors: [...this.state.colors, randomColor],
    });
  };

    render() {
        const { colors } = this.state;
    return (
      <div className={styles.container}>
            <button className={styles.btn} onClick={this.getRandomColor}>add color</button>
            {colors.map(color => (<Color newColor={color}/>))}
      </div>
    );
  }
}

export default ColorGenerator;
