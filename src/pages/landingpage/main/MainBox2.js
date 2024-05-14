import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import img1 from "./w.webp";
import img2 from "./womens-fragrances.webp";
import img3 from "./millesime-imperial_9eb77d9e-d9a6-4e22-8ded-87b394e6ee25_1.webp";

import './MainBox2.css'
const contentData = [
  {
    title: "Men Fragrance",
    description: "Discover",
    buttonText: "Shop Now",
    buttonLink: "/material-ui/getting-started/templates/checkout/",
    imgSrc: img1,
  },
  {
    title: "Womens Fragrance",
    description: "Discover",
    buttonText: "Shop Now",
    buttonLink: "/material-ui/getting-started/templates/checkout/",
    imgSrc: img2,
  },
  {
    title: "Universal Fragrance",
    description: "Discover",
    buttonText: "Shop Now",
    buttonLink: "/material-ui/getting-started/templates/checkout/",
    imgSrc: img3,
  },
  // Add more content objects as needed
];

export default function MainBox2() {
  const [hoveredStates, setHoveredStates] = useState(Array(contentData.length).fill(false));

  const handleMouseEnter = (index) => {
    const newHoveredStates = [...hoveredStates];
    newHoveredStates[index] = true;
    setHoveredStates(newHoveredStates);
  };

  const handleMouseLeave = (index) => {
    const newHoveredStates = [...hoveredStates];
    newHoveredStates[index] = false;
    setHoveredStates(newHoveredStates);
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background:"#fff",
      
      }}
      className=" mt-3"
    >
      <Grid container alignItems="center" justifyContent="center" >
        <Grid container spacing={2} style={{padding:"25px"}}>
          {contentData.map((content, index) => (
            <Grid item key={content.title} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
                  background: "none",
                }}
              >
                <CardContent>
                  <div className="w-100 justify-content-center d-flex mb-3 ">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        width: "100%",
                        background: "#E7E5E1",
                      }}
                    >
                      <div
                        style={{
                          transition: "transform 0.3s ease",
                          transform: hoveredStates[index] ? "scale(1.1)" : "scale(1)",
                        }}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                      >
                        <img
                          src={content.imgSrc}
                          alt=""
                          width="100%" // Adjusted size to 50%
                          style={{
                            mixBlendMode: "multiply",
                            overflow: "hidden",
                          }}
                        />
                      </div>
                    </Box>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Typography variant="body2" sx={{ color: "grey.500" }}>
                      {content.description}
                    </Typography>
                  </div>
                  <div className="w-100 justify-content-center d-flex">
                    <Typography component="h3" variant="h4" sx={{color:"black",fontWeight:"bold"}}>
                      {content.title}
                    </Typography>
                  </div>
                </CardContent>
                <CardActions>
                  <div className="w-100 justify-content-center d-flex">
                    <button
                    id="btnMainbox"
                      component="a"
                      href={content.buttonLink}
                      target="_blank"
                      style={{color:"black"}}


                    >
                      {content.buttonText}
                    </button>
                  </div>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
