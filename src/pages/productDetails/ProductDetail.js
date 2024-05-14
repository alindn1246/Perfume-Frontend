import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Stack, Typography, alpha, createTheme } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Col, Row } from "react-bootstrap";
import { useMediaQuery } from "@mui/material";
import Form from 'react-bootstrap/Form';
import img1 from './GioPerfume.jpg'
import Image from 'react-bootstrap/Image';
import { dark } from "@mui/material/styles/createPalette";
import Button from "@mui/material/Button";
const defaultTheme = createTheme();

export default function ProductDetail() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        pt: { xs: 7.5, sm: 8 }, // Decreased by 7%
        pb: { xs: 7.15, sm: 8.15 }, // Decreased by 7%
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        position: "relative",
      }}
    >
      <Grid container component="main" sx={{background:"white","@media (max-width:600px)": {
          height:"100vh"},   }}>
        <Grid
          item
          xs={12}
          sm={8}
          md={7}
          lg={7}
        sx={{ display:"flex",justifyContent:'center',alignItems:"center",
        position:"relative",
       

        "@media (max-width:600px)": {
          height: "40%",},
        }}
        >
          
    {
      !isMobile? 
    <Stack style={{position:"relative"}}>
        <div >
                <Rating
                  name="read-only"
                  value={4}
                  readOnly
                  sx={{
                    color: "black",
                    "& .MuiRating-iconFilled": {
                      color: dark,
                    },
                    "& .MuiRating-iconEmpty": {
                      color: dark,
                    },
                   position:"absolute",
                   top:20,
                   marginLeft:"20px"
                  }}
                />
              </div>
        <Row className="w-100  ">
      
          <Col sm={12} className="d-flex justify-content-center align-items-center">
            <Image src={img1} fluid style={{objectFit:"cover", mixBlendMode: "multiply",marginBottom:"100px" }}  />
          </Col>  
        </Row>
        <Row className="w-100  mb-4 "  >
          <Col sm={6}  >
          <Image src="https://www.giorgioarmanibeauty-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-gab-master-catalog/default/dw59a1bf42/2021/A2267/ww-00294-arm_armani-acqua_di_gio_profondo_alt3.jpg?sw=563&sh=563&sm=cut&sfrm=jpg&q=85"
           fluid style={{width:"100%"}}  /> 
          </Col>
          <Col sm={6} >
          <Image src="https://www.giorgioarmanibeauty-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-gab-master-catalog/default/dw75808027/2021/A2267/GAB-8942_R2_INFOGRAPHICS_%20Acqua_de_Gio_Profondo_EDP_ingredients.jpg?sw=563&sh=563&sm=cut&sfrm=jpg&q=85"
           fluid style={{width:"100%"}}    /> 
          </Col>
          <Col sm={6} >
          <Image src="https://www.giorgioarmanibeauty-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-gab-master-catalog/default/dw75808027/2021/A2267/GAB-8942_R2_INFOGRAPHICS_%20Acqua_de_Gio_Profondo_EDP_ingredients.jpg?sw=563&sh=563&sm=cut&sfrm=jpg&q=85"
           fluid style={{width:"100%"}}    /> 
          </Col>
          <Col sm={6} >
          <Image src="https://www.giorgioarmanibeauty-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-gab-master-catalog/default/dw59a1bf42/2021/A2267/ww-00294-arm_armani-acqua_di_gio_profondo_alt3.jpg?sw=563&sh=563&sm=cut&sfrm=jpg&q=85"
           fluid style={{width:"100%"}}  /> 
          </Col>
        </Row>
    </Stack>
        :
     <Stack style={{position:"relative", width:"100%", justifyContent:"center", alignItems:"center"}}>
       
                <Rating
                  name="read-only"
                  value={4}
                  readOnly
                  sx={{
                    color: "black",
                    "& .MuiRating-iconFilled": {
                      color: dark,
                    },
                    "& .MuiRating-iconEmpty": {
                      color: dark,
                    },
                   position:"absolute",
                   top:20,
                  left:7
                  }}
                />
             
       <Image src={img1} fluid style={{width:"250px", height:"250px", mixBlendMode: "multiply", }}  />
     </Stack>
    }
        
  
          </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={5}
          lg={5}
          component={Paper}
          elevation={6}
          square
          sx={{
           
            background: "white",
            "@media (max-width:600px)": {
              height: "60%",
            },
          }}
        >
          <Box
            sx={{
              my: 5,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "black",
              "@media (max-width:600px)": {
                my: 1
              }
            }}
          >
            <Row
              style={{
                mb: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
               
             
              

       <Col xs={12} md={12}>       
  {!isMobile ? 
    
  
   <>
   <h2>Millésime 1849</h2>
   <h5 style={{ lineHeight: "0.9" }}>Woody Fresh, Aromatic & Floral</h5>
   </>

  : 
 
  <>
 <h3>Millésime 1849</h3>
   <h6 style={{ lineHeight: "0.9" }}>Woody Fresh, Aromatic & Floral</h6>
 </>

  }
</Col>


              <Col sm={12}>
                <Typography
                  sx={{
                    color: "gray",
                    lineHeight: 1.2,
                    fontSize: "13px",

                    "@media (max-width:600px)": {
                     
                      fontSize: "8px",
                      lineHeight: 1,
                      mt:"3px"
                    },
                  }}
                >
                  Reawakened from the House of Creed's esteemed perfume vault,
                  Millésime 1849 is a rich, warm fragrance that fascinates with
                  a graceful modern sophistication.
                </Typography>
              </Col>
                {!isMobile ?
              <Col xs={12} className="d-flex  my-3 spacebtween  " >
            
                 <h1 style={{ fontWeight: "bold", fontFamily: "popins" }}>
                   $500
                 </h1>
                 <span
                   style={{
                     background: "black",
                     color: "white",
                     width:"80px",
                     height:"40px",
                     justifyContent:"center",
                     display:"flex",
                     alignItems:"center",
                     marginTop:"5px",
                     marginLeft:"10px"
                   }}
                 >
                 
                   100 ml
                 </span>
              </Col>
               :
              <Col xs={12} className="d-flex  spacebtween " >
            
                 <h4 style={{ fontWeight: "bold", fontFamily: "popins" }}>
                   $500
                 </h4>
                 <span
                   style={{
                     background: "black",
                     color: "white",
                     width:"50px",
                     height:"20px",
                     justifyContent:"center",
                     display:"flex",
                     alignItems:"center",
                     marginTop:"5px",
                     marginLeft:"10px"
                   }}
                 >
                 
                   100 ml
                 </span>
              </Col>
              

                  }
             
              
              <Col xs={12}>
  <Form.Select size="sm" >
    <option  value="1"> 10 ml </option>
    <option  value="2"> 50 ml </option>
    <option  value="3"> 100 ml</option>
  </Form.Select>
</Col>


<Col xs={12}>
<Button
                  fullWidth
                  variant="contained"
                  component="a"
                  href="/material-ui/getting-started/templates/checkout/"
                  target="_blank"
                  className="mt-3"
                >
                  Add to cart
                </Button>
</Col>
              
              
            </Row>
          </Box>
        </Grid>
      </Grid>
     
    </Box>
  );
}
