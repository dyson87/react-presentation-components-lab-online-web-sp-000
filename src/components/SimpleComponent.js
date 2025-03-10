// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            mood: 'happy'
        }
    }

    handleClick = () => {
      const toggleMood = this.state.mood === 'happy' ? 'sad' : 'happy' 
      this.setState({ mood: toggleMood }) 
    }
    render() {
        return (
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}
export default SimpleComponent;