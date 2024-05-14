import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
const ProductStory = () => {
  return (
    <Container>
      <Row>
        <Col md={6} className='order-0  order-md-0 mb-3'>
        <Image src="https://www.giorgioarmanibeauty-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-armani-us-Library/default/dwc24942d5/images/pdp/ww-00294-arm/inspired-by-the-mystery-of-the-deep-sea.jpg?sw=878&sh=878&sm=cut&sfrm=jpg&q=85"
           fluid style={{width:"100%"}}    /> 
        </Col>
        <Col  md={6} className='order-1 order-md-1'>
            <h3>INSPIRED BY THE MYSTERY OF THE DEEP SEA</h3>
            <p>ACQUA DI GIÒ PROFONDO is the intense marine interpretation ACQUA DI GIÒ. More than a fragrance, ACQUA DI GIÒ PROFONDO is a captivating deep-dive into the profoundness of the soul, embracing the values of freedom, sensoriality and modern masculinity, revealing an ever more profound dimension. Like taking a plunge into the deep blue sea, senses are awakened by green mandarin and bergamot while an ultramarine, nearly icy hue is conveyed by ACQUA DI GIÒ's iconic marine notes.</p>
        </Col>
        
        <Col  md={6} className='order-3 order-md-2'>
            <h3>THE FROSTED GLASS BOTTLE</h3>
            <p>ACQUA DI GIÒ PROFONDO is encapsulated in the emblematic ACQUA DI GIÒ frosted glass bottle, unveiled in an elegant, almost opaque navy blue, echoing the sea depths it captures. Introduced in a luxurious and precious weighted glass, its intense hue pays tribute to Giorgio Armani’s most iconic color. As a contrast to the intensity of the mysterious depths conveyed by the bottle, the metal collar is reflecting light and its navy-blue metallic cap gets adorned with a Giorgio Armani monogram.​</p>
        </Col>
        <Col md={6} className='order-2 order-md-3 border mb-3' >
        <Image src="https://www.giorgioarmanibeauty-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-armani-us-Library/default/dwc24942d5/images/pdp/ww-00294-arm/inspired-by-the-mystery-of-the-deep-sea.jpg?sw=878&sh=878&sm=cut&sfrm=jpg&q=85"
           fluid style={{width:"100%"}} 
           
           /> 
        </Col>
      </Row>
    </Container>
  )
}

export default ProductStory
