import useStyles from "./styles";
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';


import {Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core'

const PolicyList = () => {

    const [policies, setPolicies] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/policies')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setPolicies(data)
            });
    }, []);

    const classes = useStyles();
    return (
        <>
        <CssBaseline />
        <main>
          <div className={classes.container}>
            <Container maxWidth="sm">
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                Shrub
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
                Please Pick a Policy
              </Typography>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {policies && policies.map((policy) => (
                    <Grid item key={policy.id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                        <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="image title"/>
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" align="center">

                            {policy.location}
                            </Typography>
                            <Typography>
                            Magnitude: {policy.magnitude} <br />
                            Policy begins: {policy.begin} <br />
                            Policy ends: {policy.end} <br />
                            </Typography>
                        </CardContent>
                        <CardActions style={{justifyContent: 'center'}}>
                            
                            <Link to={`/policies/${policy.id}`}>  
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