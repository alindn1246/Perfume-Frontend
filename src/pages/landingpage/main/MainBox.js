import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './MainBox.css';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

import { Container } from 'react-bootstrap';
import ProductCard from '../../../Components/ProductCard';

const data = [
  { id:1,
    title: 'Best Seller',
    brandName: 'ACQUA DI GIÒ PROFONDO',
    subtitle:"EAU DE PARFUM",
    price: '165.00',
  },
  {id:2,
    title: 'Best Seller',
    brandName: 'ACQUA DI GIÒ PROFONDO',
    subtitle:"EAU DE PARFUM",
    price: '165.00',
  },
  { id:3,
    title: 'Best Seller',
    brandName: 'ACQUA DI GIÒ PROFONDO',
    subtitle:"EAU DE PARFUM",
    price: '165.00',
  },
  { id:4,
    title: 'Best Seller',
    brandName: 'ACQUA DI GIÒ PROFONDO',
    subtitle:"EAU DE PARFUM",
    price: '165.00',
  },
];

export default function MainBox() {

  
  return (
    <Container fluid  >
     
     <div className='text-center'>
      <h2 style={{fontFamily:"poppins"}}>PRODUCTS</h2>
     </div>
     
      <Swiper
       
        
        keyboard={{
          enabled: true,
        }}

        pagination={{
          clickable: true,
        }}

        breakpoints={{
           300: {
              slidesPerView: 1,
              spaceBetween: 0,
              
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 0,
              
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
              
             
            
              
            },
          }}
        navigation={true}
       
        modules={[Keyboard, Pagination, Navigation]}
       id='swiper-cardcasoul'
      >
       
       
       {data && data.map(product => ( 
          <SwiperSlide key={product.id}>
            <ProductCard products={[product]} />
          </SwiperSlide>
        ))}
        
       
        
       
        
       
       
       
      
        
      </Swiper>
    </Container>
  );
}
