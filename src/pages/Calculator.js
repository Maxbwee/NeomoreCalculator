import React , {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../styles/Styles.css"; // import the style.css file
import * as math from 'mathjs';


export default function Calculator() {

    // Used as the users inputted numbers
    const [input, setInput] = useState(''); 

    // Handles users click of the buttons
    const handleButtonClick = (value) => {
        setInput((prevInput) => prevInput + value)
    };

    // Specific button to handle clearing numbers
    const handleClearClick = () => {
        setInput('');
    }

    // Specific button to perform the calculation
    const handleEqualClick = () => {
        try {
            const result = math.evaluate(input);
            setInput(result.toString());
        } catch (error) {
            setInput('Error')
        }
    }

    return(
      <div className="cardContainer">
        <Card className="customCard"
        style={{backgroundColor: '#F4DFD0'}}
        >
            <CardContent>
            <Typography style={{ fontSize: 14, marginBottom: 10 }}> Calculator </Typography>
            <TextField
                label="Result"
                variant="outlined"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                fullWidth
            />
            <Grid  container spacing={3} justifyContent="center" alignItems="center" marginTop={2}>
            <Grid item xs={3}>
                <Button
                variant="contained"
                style={{ backgroundColor: '#E3CAA5', color: 'black'}}
                onClick={() => handleButtonClick('1')}
                > 
                1
                </Button>
            </Grid>
            <Grid item xs={3}>
            <Button
                variant="contained"
                style={{ backgroundColor: '#E3CAA5', color: 'black'}}
                onClick={() => handleButtonClick('2')}
                > 
                2
                </Button>
            </Grid>
            <Grid item xs={3}>
            <Button
                variant="contained"
                style={{ backgroundColor: '#E3CAA5', color: 'black'}}
                onClick={() => handleButtonClick('3')}
                > 
                3
                </Button>
            </Grid>
            <Grid item xs={3}>
            <Button
                variant="contained"
                style={{ backgroundColor: '#E3CAA5', color: 'black'}}
                onClick={() => handleButtonClick('+')}
                > 
                +
                </Button>
            </Grid>
            <Grid item xs={3}>
            <Button
                variant="contained"
                style={{ backgroundColor: '#E3CAA5', color: 'black'}}
                onClick={() => handleButtonClick('4')}
                > 
                4
                </Button>
            </Grid>
            <Grid item xs={3}>
            <Button
                variant="contained"
                style={{ backgroundColor: '#E3CAA5', color: 'black'}}
                onClick={() => handleButtonClick('5')}
                > 
                5
                </Button>
            </Grid>
            <Grid item xs={3}>
            <Button
                variant="contained"
                style={{ backgroundColor: '#E3CAA5', color: 'black'}}
                onClick={() => handleButtonClick('6')}
                > 
                6
                </Button>
            </Grid>
            <Grid item xs={3}>
            <Button
                variant="contained"
                style={{ backgroundColor: '#E3CAA5', color: 'black'}}
                onClick={() => handleButtonClick('-')}
                > 
                -
                </Button>
            </Grid>
            <Grid item xs={3}>
            <Button
                variant="contained"
                style={{ backgroundColor: '#E3CAA5', color: 'black'}}
                onClick={() => handleButtonClick('7')}
                > 
                7
                </Button>
            </Grid>
            <Grid item xs={3}>
            <Button
                variant="contained"
                style={{ backgroundColor: '#E3CAA5', color: 'black'}}
                onClick={() => handleButtonClick('8')}
                > 
                8
                </Button>
            </Grid>
            <Grid item xs={3}>
            <Button
                variant="contained"
                style={{ backgroundColor: '#E3CAA5', color: 'black'}}
                onClick={() => handleButtonClick('9')}
                > 
                9
                </Button>
            </Grid>
            <Grid item xs={3}>
            <Button
                variant="contained"
                style={{ backgroundColor: '#E3CAA5', color: 'black'}}
                onClick={() => handleButtonClick('*')}
                > 
                *
                </Button>
            </Grid>
            <Grid item xs={3}>
            <Button
                variant="contained"
                style={{ backgroundColor: '#E3CAA5', color: 'black'}}
                onClick={() => handleClearClick()}
                > 
                C
                </Button>
            </Grid>
            <Grid item xs={3}>
            <Button
                variant="contained"
                style={{ backgroundColor: '#E3CAA5', color: 'black'}}
                onClick={() => handleButtonClick('0')}
                > 
                0
                </Button>
            </Grid>
            <Grid item xs={3}>
            <Button
                variant="contained"
                style={{ backgroundColor: '#E3CAA5', color: 'black'}}
                onClick={() => handleEqualClick()}
                > 
                =
                </Button>
            </Grid>
            <Grid item xs={3}>
            <Button
                variant="contained"
                style={{ backgroundColor: '#E3CAA5', color: 'black'}}
                onClick={() => handleButtonClick('/')}
                > 
                /
                </Button>
            </Grid>
            </Grid>

            </CardContent>

        </Card>
        </div>
    )
}