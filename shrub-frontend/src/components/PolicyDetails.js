import { useParams } from "react-router-dom";
import { useState } from "react";
import useStyles from "./styles";
import useFetch from "../useFetch";
import { useHistory } from "react-router-dom";

import {Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core'


const PolicyDetails = () => {
    const history = useHistory();

    const {policy_id} = useParams();
    //const {data: policy, error, isPending } = useFetch("http://localhost:8000/policies/" + policy_id);
    const {data: policy, error, isPending } = useFetch("https://r9bii0wu3a.execute-api.us-west-1.amazonaws.com/requestPolicies/policies/?password=123456789&policy_id="+policy_id);

    const classes = useStyles();

    const [price, setPrice] = useState(0.05);
    const [amount, setAmount] = useState(0.0);
    const [cost, setCost] = useState(0.0);
    const [userAddress, setAddress] = useState("");
    const handleInput = (e) => {
        setAmount(e.target.value);
        setCost(amount * price);
        window.web3.eth.getAccounts().then( function (result) {  setAddress(result[0]) });

    }

    return (
        <div className={classes.container}>
            { isPending && <div>Loading...</div>}
            { error && <div> {error} </div>}
            { policy && <div>

                <Container>
                <Grid container>
                    <Grid item xs={12} sm={9} md={8}>
                        <Card className={classes.card} variant="outlined">
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" align="center">
                                        {policy.location}
                                    </Typography>
                                    <Typography>
                                        <p>Magnitude: {policy.magnitude}</p>
                                        <p>1 USDC buys {1/price} USDC of cover</p>
                                        <p>Enter desired cover amount: </p>
                                        <input type="float" value={amount} onChange = {(e) => handleInput(e)}/>
                                        

                                    </Typography>
                                </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={9} md={4}>
                        <Card className={classes.card} variant="outlined">
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" align="center">
                                        Summary
                                    </Typography>
                                    <Typography>
                                        <p> Pays {amount} in USDC if {policy.magnitude} or greater earthquake happens within 100 miles of {policy.location}</p>
                                        <p>Price: {cost}</p>
                                        <Button variant="contained">Buy Cover For {userAddress}</Button>
                                    </Typography>
                                </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={9} md={4}>
                        <Card className={classes.card} variant="outlined">
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" align="center">
                                        Policy Details
                                    </Typography>
                                    <Typography>
                                        <p> This policy will trigger as soon as there is an earthquake of magnitude {policy.magnitude} or greater with a locus within 100 miles of {policy.location}, defined at latitude: {policy.latitude} and longitude: {policy.longitude} </p>
                                    </Typography>
                                </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                </Container>

            </div>}
        </div>
      );
}
 
export default PolicyDetails;