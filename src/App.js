import {  Container,
  Paper,
  Box,
  Typography,
  Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement,addbyAmount } from "./redux/features/counterSlice";
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
 
  const [ addAmount, setAddAmount ] = useState('');
  const [incrementAmount, setIncrementAmount] = useState('0');

  const handleIncrementBy = (value) => {

    setIncrementAmount(value);

   // console.log(text);

  }

  return (
    <ThemeProvider theme={theme}>
      <Container component={Box} py={4}>
        <Paper component={Box} p={3} align="center">
          <Typography align="center" variant="h1">
            {counter}
          </Typography>
          <Button onClick={() => dispatch(increment())}>Increment</Button>
          <Button onClick={() => dispatch(decrement())}>Decrement</Button>
          <div className='input-wrapper'>
          <h1>{addAmount}</h1>
        
                <input
                  type="text" 
                  name="getValue" 
                  value={incrementAmount} 
                  onChange = {e => handleIncrementBy(e.target.value)} 
                  placeholder="Increment By" 
                />
                 

         </div>
         <Button onClick={() => dispatch(addbyAmount(Number(incrementAmount) || 0))}>  Add value </Button>
        </Paper>
  
      </Container>
    </ThemeProvider>
  );
}

export default App;