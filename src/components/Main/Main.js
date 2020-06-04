import React from "react";
import CounterValue from "../CounterValue/CounterValue";
import HeadingText from "../Text/HeadingText";
import Button from "../Buttons/Button";
import Footer from "../Footer/Footer";
class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            value : 0
        }
        this.increaseValue = this.increaseValue.bind(this);
        this.decreaseValue = this.decreaseValue.bind(this);
    }

    increaseValue(){
        this.setState(state => (
            {
                value : state.value + 1
            }
        ))
    }

    decreaseValue(){
        this.setState(state => (
            {
                value : state.value - 1
            }
        ))
    }

    render() {
        const number = this.state.value;
        return (
            <div>
                <HeadingText text="Hello Welcome to the Simple Counter, Please Hit Increase Or Decrease until you satisfied"/>
                <CounterValue value={number}/>
                <Button
                    handleIncrease={this.increaseValue}
                    handleDecrease={this.decreaseValue}
                />
                <Footer text="Create in one night By Arya Wirasandi"/>
            </div>
        );
    }
}

export default Main;