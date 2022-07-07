import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: props.firstName,
            lastName: props.lastName,
            age: props.age,
            hairColor: props.hairColor
        }
    }
    makeOlder = () => {
        this.setState({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age + 1,
            hairColor: this.state.hairColor
        });
    }

    render() {
        return(
            <div>
                <h2>{this.state.lastName}, {this.state.firstName}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.state.hairColor}</p>
                <button onClick={this.makeOlder}>Birthday button for {this.state.firstName} {this.state.lastName}</button>
            </div>
        )
    }
}

export default PersonCard;