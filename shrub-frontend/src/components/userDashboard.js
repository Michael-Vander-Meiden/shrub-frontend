import useStyles from "./styles";
import useFetch from "../useFetch";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {convertToGMT} from "../convertToGMT";

import {Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, TextField} from '@material-ui/core'


const UserDashboard = () => {
    
    const classes = useStyles();
    const {data: policies, error, isPending } = useFetch("https://r9bii0wu3a.execute-api.us-west-1.amazonaws.com/requestPolicies/policies/?password=123456789");
    const user_policies = ["0x71C7656EC7ab88b098defB751B7401B5f6d8976F","0x71C7656EC7ab88b098defB751B7401B5f6d8976T"]

    return (
         <>

        <CssBaseline />
        <main>

          <div>
            <Container maxWidth="sm" className={classes.container}>
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                Shrub
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
                Your Policies
              </Typography>
            </Container>
          </div>
          <div>
          <Container className={classes.searchBar} align="center">
          </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {isPending && <div>Loading...</div>}
                {error && <div> {error} </div>}
                {policies && policies.filter((val) => {
                    if (user_policies.includes(val.token_address)) {
                      return val
                    }
                  }).map((policy) => (
                    <Grid item key={policy.policy_id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                        <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="image title"/>
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" align="center">

                            {policy.location}
                            </Typography>
                            <Typography>
                            Magnitude: {policy.magnitude} <br />
                            Policy begins: {convertToGMT(policy.start_time)} <br />
                            Policy ends: {convertToGMT(policy.end_time)} <br />
                            </Typography>
                        </CardContent>
                        <CardActions style={{justifyContent: 'center'}}>
                            
                            <Link to={`/policies/${policy.policy_id}`}>  
                              <Button size="small" color="primary">View</Button>
                            </Link>
                            
                        </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
          </Container>
  
        </main>
      </>
    );

    }


export default UserDashboard