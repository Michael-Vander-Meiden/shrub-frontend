import useStyles from "./styles";
import useFetch from "../useFetch";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {convertToGMT} from "../convertToGMT";

import {Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, TextField} from '@material-ui/core'

const PolicyList = () => {

    const [SearchTerm, setSearchTerm] = useState('');
    const classes = useStyles();
    const {data: policies, error, isPending } = useFetch("https://r9bii0wu3a.execute-api.us-west-1.amazonaws.com/requestPolicies/policies/?password=123456789");
    

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
                Please Pick a Policy
              </Typography>
            </Container>
          </div>
          <div>
          <Container className={classes.searchBar} align="center">
            <TextField
              label="Search a Location" 
              variant="outlined"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              fullWidth
            />
          </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {isPending && <div>Loading...</div>}
                {error && <div> {error} </div>}
                {policies && policies.filter((val) => {
                    if (SearchTerm == "") {
                      return val
                    } else if (val.location.toLowerCase().startsWith(SearchTerm.toLocaleLowerCase())) {
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
                              <Button size="small" color="primary">Purchase</Button>
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

export default PolicyList