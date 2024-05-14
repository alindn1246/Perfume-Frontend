import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import vid1 from "./Images/0509 (1).mp4";
import{Container} from 'react-bootstrap'
export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        pt: { xs: 14, sm: 27 },
        pb: { xs: 12, sm: 23 },
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        position:"relative"
      }}
      
    >
    <Container fluid style={{
       display: "flex",
       justifyContent: "center",
       alignItems: "flex-start",
    }}>

   
        <video
          playsInline
          autoPlay
          muted
          loop
          width="100%"
          height="100%"
          className="notes__video"
          preload="metadata"
          src={vid1}
          style={{
            position: "absolute",
            objectFit: "cover",
            zIndex: -1,
            top: 0, // Position the video at the top of the container
            left: 0, // Position the video at the left of the container
            borderRadius: "10px",
          }}
        ></video>
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
            }}
          >
            Our latest&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            >
              perfumes
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            Explore our cutting-edge dashboard, delivering high-quality
            solutions tailored to your needs. Elevate your experience with
            top-tier features and services.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              inputProps={{
                autoComplete: "off",
                "aria-label": "Enter your email address",
              }}
            />
            <Button variant="contained" color="primary">
              Start now
            </Button>
          </Stack>
          <Typography
            variant="caption"
            textAlign="center"
            sx={{ opacity: 0.8 }}
          >
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
        </Container>
      </Box>
   
  );
}
