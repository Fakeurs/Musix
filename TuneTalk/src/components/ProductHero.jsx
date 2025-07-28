import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProductHeroLayout from "./ProductHeroLayout";

const backgroundImage = "https://imgur.com/c0C94lP";

export default function ProductHero() {
    return (
        <ProductHeroLayout
            sxBackground={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: "#7fc7d9", 
                backgroundPosition: "center",
            }}
        >
            <img
                style={{ display: "none" }}
                src={backgroundImage}
                alt="increase priority"
            />
            <Typography
                color="inherit"
                align="center"
                variant="h2"
                marked="center"
            >
                Welcome to Musix
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
            >
                Enjoy seamless music with live chat feature
            </Typography>
            <Button
                color="secondary"
                variant="contained"
                size="large"
                component="a"
                href="/premium-themes/onepirate/sign-up/"
                sx={{ minWidth: 200 }}
            >
                Register
            </Button>
            <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
                Discover the experience
            </Typography>
        </ProductHeroLayout>
    );
}
