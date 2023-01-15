import React from "react";
import { Container, Box, Typography } from "@mui/material";

function Contact() {
  return (
    <Container>
      <Box sx={{ width: "100%", mb: "20px", textAlign: "center" }}>
        <Typography component="h1" variant="h4">
          Contact Us
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          mb: "20px",
          textAlign: "center",
        }}
      >
        <Typography component="h1" variant="body1">
          We love hearing from you!Please contact us via email address or phone
          number below.
        </Typography>
        <Typography>
          For answers to frequently asked questions about your subscription,
          please check out our FAQ page.
        </Typography>
        <Typography>Email address:help@yummy.com</Typography>
        <Typography>We will respond to your email within 72 hours</Typography>
        <Typography>Toll-free number:855-753-1037</Typography>
        <Typography>International number:332-239-2921</Typography>
        <Typography>
          Hours of operation:Monday through Friday, 9 a.m. to 7 p.m. E.T.
        </Typography>
      </Box>
    </Container>
  );
}

export default Contact;
