import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from '@material-ui/icons/GitHub';
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/_aryan_panda";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dxf1ajvwn/image/upload/v1695407787/WhatsApp_Image_2023-09-23_at_00.03.42_yrxmag.jpg"
              alt="Founder"
            />
            <Typography>Aryan Panda</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @mearyan_panda.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://github.com/AryanPanda25"
              target="blank"
            >
              <GitHubIcon className="GitHubIcon" />
            </a>

            <a href="https://instagram.com/_aryan_panda" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
