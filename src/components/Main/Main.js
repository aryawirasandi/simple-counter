import React, { useState } from "react";
import CounterValue from "../CounterValue/CounterValue";
import HeadingText from "../Text/HeadingText";
import Button from "../Buttons/Button";
import Footer from "../Footer/Footer";



function Main (){
    let [number, setValue] = useState(0);

    function increaseValue(){
        number === 20 ? alert("hey you have been achieved at the hight level of this counter please decrease it") : setValue(number += 1);
    }

    function decreaseValue(){
        number === 0 ? setValue(0) : setValue(number -= 1);
    }

    return (
        <div>
            <HeadingText text="Hello Welcome to the Simple Counter, Please Hit Increase Or Decrease until you satisfied"/>
            <CounterValue value={number}/>
            <Button
                handleIncrease={increaseValue}
                handleDecrease={decreaseValue}
            />
            <Footer text="Create in one night By Arya Wirasandi"/>
        </div>
    );
}

export default Main;