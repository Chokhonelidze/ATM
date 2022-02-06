
const ATMdeposit = ({onChange,isDeposit}) => {
     const choise = ["Cash Back","Deposit"];
    return (
        <label className="label huge">
            <h3>{choise[Number(isDeposit)]}</h3>
            <input type="number" onChange={onChange}></input>
            <input type='submit' value = 'submit' ></input>
        </label>
    );
}
const Account = () => {
    const [transactionState,setTransactionState] = React.useState(0);
    const [totalState,setTotalState] = React.useState(0);
    const [isDeposit,setDeposit] = React.useState(true);
    const [errror,setError] = React.useState('');
    React.useEffect(()=>{
        let newState = isDeposit?totalState+transactionState:totalState-transactionState;
        if(newState<0) {
            setError("You can't take cash back your balance will be"+newState);
        }
        else{
            setError("");
        }
    },handleSubmit);
    let  status = "Account Balance $ "+totalState;
    var handleChange = event =>{
        setTransactionState(Number(event.target.value));
    }
    const handleSubmit = (event) =>{
        let newState = isDeposit?totalState+transactionState:totalState-transactionState;
        if(newState >= 0)
        setTotalState(newState);
       event.preventDefault();
    }
    let errorStyle = {
        color:"red",
    }
    return(
        <form onSubmit={handleSubmit}>
            <h3 style={errorStyle}>{errror}</h3>
            <h2 id="total">Account Balance {status}</h2>
            <button onClick={()=>{setDeposit(true);event.preventDefault();}}>Deposit</button>
            <button onClick={()=>{setDeposit(false);event.preventDefault();}}>Cash Back</button>
            <ATMdeposit onChange={handleChange} isDeposit={isDeposit} >Deposit</ATMdeposit>
        </form>
    )
}
ReactDOM.render(<Account/>,document.getElementById("root"));