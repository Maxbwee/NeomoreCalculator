import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../styles/Styles.css"; // import the style.css file


export default function Calculator() {
    return(
      <div className="cardContainer">
        <Card className="customCard">
            <CardContent>
            <Typography sx={{ fontSize: 14 }}> Result: </Typography>

            <Grid  container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={4}>
                <Button
                variant="contained"
                className="customButton"
                > 
                1
                </Button>
            </Grid>
            <Grid item xs={4}>
            <Button
                variant="contained"
                className="customButton"
                > 
                2
                </Button>
            </Grid>
            <Grid item xs={4}>
            <Button
                variant="contained"
                className="customButton"
                > 
                3
                </Button>
            </Grid>
            <Grid item xs={4}>
            <Button
                variant="contained"
                className="customButton"
                > 
                4
                </Button>
            </Grid>
            <Grid item xs={4}>
            <Button
                variant="contained"
                className="customButton"
                > 
                5
                </Button>
            </Grid>
            <Grid item xs={4}>
            <Button
                variant="contained"
                className="customButton"
                > 
                6
                </Button>
            </Grid>
            <Grid item xs={4}>
            <Button
                variant="contained"
                className="customButton"
                > 
                7
                </Button>
            </Grid>
            <Grid item xs={4}>
            <Button
                variant="contained"
                className="customButton"
                > 
                8
                </Button>
            </Grid>
            <Grid item xs={4}>
            <Button
                variant="contained"
                className="customButton"
                > 
                9
                </Button>
            </Grid>
            <Grid item xs={4}>
            <Button
                variant="contained"
                className="customButton"
                > 
                C
                </Button>
            </Grid>
            <Grid item xs={4}>
            <Button
                variant="contained"
                className="customButton"
                > 
                0
                </Button>
            </Grid>
            <Grid item xs={4}>
            <Button
                variant="contained"
                className="customButton"
                > 
                =
                </Button>
            </Grid>
            </Grid>

            </CardContent>

        </Card>
        </div>
    )
}