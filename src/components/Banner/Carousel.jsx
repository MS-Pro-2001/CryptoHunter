import { Link, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { CryptoState } from '../../CryptoContext';
import {TrendingCoins} from "../../config/api"
import AliceCarousel from "react-alice-carousel"


const useStyles = makeStyles({
    carousel:{
        height:'40%',
        display:'flex',
        alignItems:'center',
    
    },
    carouselItem:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      cursor:'pointer',
      textTransform:'uppercase',
      color:'white'

      

    }
});
const Carousel = () => {

    const [trending, settrending] = useState([])
    
    const classes = useStyles();
    const {currency} =  CryptoState();
    const fetchTrendingCoins = async ()=>{
        const {data} = await axios.get(TrendingCoins(currency)) 
     settrending(data)
     
    }

    
   console.log(trending);
    

    useEffect(() => {
        fetchTrendingCoins();
     
    }, [currency])

    const items = trending.map((coin)=>{
     return(
        <Link to={'/coins/abcd'} className={classes.carouselItem} >
          <img src={coin?.image} alt={coin.name} height = "80"  />
          <span>{coin.symbol}</span>
          <span> ₹&nbsp;{coin.current_price}</span>
        </Link>
     )  
    })
    const responsive = {
      0:{
        items:2
      },
      512:{
        items:4

      }
    }
    
  return (
    <div className={classes.carousel}>
    <AliceCarousel
    mouseTracking
    infinite
    disableDotsControls
    disableButtonsControls
    autoPlayInterval={1000}
    animationDuration={1500}
    responsive={responsive}
    autoPlay
    items={items}

    />
    </div>
  )
}

export default Carousel