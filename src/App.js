import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Header from './components/Header';
import CoinsPage from "./pages/CoinsPage"
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
  App:{
    backgroundColor:'#14161a',
    color:'white',
    minHeight:'100vh'

  }
});


function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/> } />
        <Route path='/coins/:id' element={<CoinsPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>

    );
}

export default App;
