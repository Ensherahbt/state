import React, { Component } from "react";
import './App.css';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            src: "https://i.pinimg.com/550x/a7/3d/6e/a73d6e4ac85c6a822841e449b24c78e1.jpg",
            counter: 0

        }
    }







    increse = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    decrese = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    Ensherah = () => {
        this.setState({
            counter: 0
        })

    }

    decrese = () => {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            });
        }
    }


    render() {
        return (
            <div className="vv">
                <h1> Ensherah  </h1>

                <p> {this.state.counter} </p>

                <img className="imag" src={this.state.src} alt="img in src" />

                <div className="bu">
                    <button onClick={this.increse}  >+</button>
                    <button onClick={this.decrese}>-</button>
                    <button onClick={this.Ensherah}>Reset</button>
                </div>


            </div>
        )
    }






}