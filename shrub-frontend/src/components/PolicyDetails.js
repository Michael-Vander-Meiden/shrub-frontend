import { useParams } from "react-router-dom";
import { useState } from "react";
import useStyles from "./styles";
import useFetch from "../useFetch";
import { useHistory } from "react-router-dom";

import {Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core'


const PolicyDetails = () => {
    const history = useHistory();

    const {id} = useParams();
    const {data: policy, error, isPending } = useFetch("http://localhost:8000/policies/" + id);

    const classes = useStyles();

    const [price, setPrice] = useState(0.05);
    const [amount, setAmount] = useState(0.0);
    const [cost, setCost] = useState(0.0);

    const handleInput = (e) => {
        setAmount(e.target.value);
        setCost(amount * price);
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
                                    <Button variant="contained">Buy Now</Button>
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