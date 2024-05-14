import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Form from "react-bootstrap/Form";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import img1 from "./GioPerfume.jpg";
import { Link } from "react-router-dom";

export default function ProductCard({ products }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Container
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid container alignItems="center" justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.title}>
            <Card
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",

                border: "1px solid",
                borderColor: "gray",
                background: undefined,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "grey.100",
                  }}
                >
                  <Chip
                    icon={<AutoAwesomeIcon />}
                    label={product.title}
                    size="small"
                    sx={{
                      background: (theme) =>
                        theme.palette.mode === "light" ? "" : "none",
                      backgroundColor: "primary.contrastText",
                      "& .MuiChip-label": {
                        color: "primary.dark",
                      },
                      "& .MuiChip-icon": {
                        color: "primary.dark",
                      },
                    }}
                  />
                  <IconButton>
                    <FavoriteBorderIcon />
                  </IconButton>
                </Box>
                <div className="w-100 justify-content-center d-flex mb-3">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      height: "185px",
                      width: "185px",
                      background: "#E7E5E1",
                    }}
                  >
                    <div
                      style={{
                        transition: "transform 0.3s ease",
                        transform: hovered ? "scale(1.1)" : "scale(1)",
                      }}
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                    >
                      <img
                        src={img1}
                        alt=""
                        width={"100%"}
                        style={{
                          mixBlendMode: "multiply",
                          overflow: "hidden",
                        }}
                      />
                    </div>
                  </Box>
                </div>
                <Link to={`/product/1`} style={{ textDecoration: "none" }}>
                  <div style={{ textAlign: "center" }}>
                    <Typography component="h3" variant="h6">
                      {product.brandName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "grey.400" }}>
                      {product.subtitle}
                    </Typography>
                  </div>
                </Link>

                <div className="w-100 justify-content-center d-flex">
                  <Typography component="h3" variant="h5">
                    ${product.price}
                  </Typography>
                </div>

                <Form.Select size="sm">
                  <option value="1"> 10 ml </option>
                  <option value="2"> 50 ml </option>
                  <option value="3"> 100 ml</option>
                </Form.Select>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  component="a"
                  href="/material-ui/getting-started/templates/checkout/"
                  target="_blank"
                >
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
