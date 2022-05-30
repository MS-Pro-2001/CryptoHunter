import React from 'react'
import {AppBar, Container, MenuItem, Select, Toolbar, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

 const useStyles = makeStyles({
   title:{
     flex:'1',
     fontWeight:'bold',
     color:'gold',
     cursor:'pointer'

   }
 });

const Header = () => {
 const {currency,currencySymbol,setcurrency} = CryptoState();

console.log(currency);
 
 
  const navigate = useNavigate();
  // Creating object of makeStyles
  const classes = useStyles();
  return (
    <div>
      <AppBar color='transparent' position='static' >
        <Container>
         <Toolbar>
          <Typography className={classes.title}  onClick={()=>navigate('/')} >
            CryptoHunter
          </Typography>
          <Select
          variant='filled'
          style={{
            height:40,
            width:100,
            color:'white'
          }}
          
          value = {currency}
          onChange={(e)=> setcurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
         </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Header