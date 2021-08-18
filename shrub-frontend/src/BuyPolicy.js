import { useState } from "react";

const BuyPolicy = () => {
    
    const [city, setCity] = useState('Tokyo');
    const [trigger, setTrigger] = useState('earthquake');
    const [price, setPrice] = useState(0.05);
    const [amount, setAmount] = useState(0.0);
    const [cost, setCost] = useState(0.0);

    const handleInput = (e) => {
        setAmount(e.target.value);
        setCost(amount * price);
    }
    
    return ( 
        <div className="buy-policy"
        style={{
            borderRadius: '8px',
            borderColor: 'white',
            borderStyle: 'solid',

        }}>
            <h2>{city}: {trigger}</h2>
            <p>Enter desired coverage:</p>
            <input type="float"
            value={amount}
            onChange = {(e) => handleInput(e)}/>
            <p>cost: {cost}</p>
            <button>buy now</button>
        </div>
     );
}
 
export default BuyPolicy;