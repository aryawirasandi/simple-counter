import React from "react";
import CounterValue from "../CounterValue/CounterValue";
import HeadingText from "../Text/HeadingText";
import Button from "../Buttons/Button";
class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            value : 0
        }
    }

    render() {
        const number = this.state.value;
        return (
            <div>
                <HeadingText text="Hello Welcome to the Simple Counter, Please Hit Increase Or Decrease until you satisfied"/>
                <CounterValue value={number}/>
                <Button/>
            </div>
        );
    }
}

export default Main;