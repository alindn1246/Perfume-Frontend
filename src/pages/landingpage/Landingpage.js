import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Hero from './hero/Hero';
import NavigationBar from './navbar/NavigationBar';

import getLPTheme from './getLPTheme';
import ProductCard from '../../Components/ProductCard';
import MainBox from './main/MainBox';
import MainBox2 from './main/MainBox2';
import Ads from './commercial/Ads';
import Footer from './footer/Footer';
import Services from './services/Services';
import MainBox3 from './main/MainBox3';
import { Divider } from '@mui/material';





export default function LandingPage() {


  const LPtheme = createTheme(getLPTheme("dark"));




  return (
    <ThemeProvider theme={ LPtheme}>
      <CssBaseline />
  
        
        <Hero />
        <Ads/>
        <MainBox/>
        <MainBox2/>
        <Services/>
        
         <MainBox3/>
        

        <Footer/>
   
    </ThemeProvider>
  );
}