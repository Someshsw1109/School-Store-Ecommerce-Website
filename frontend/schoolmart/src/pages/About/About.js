import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { styleSheet } from "./styles";
import { withStyles } from "@mui/styles";

const About = (props) => {
  const { classes } = props;
  return (
    <div id="home">
      <Header />

      <Box sx={{ flexGrow: 1 }} className={classes.box_container}>
        <Grid
          container
          xl={12}
          lg={12}
          md={12}
          sm={6}
          xs={6}
          className={classes.main_img_container}
          display="flex"
          justifyContent="space-between"
        >
          <Grid
            item
            xl={5.8}
            lg={5.8}
            md={5.8}
            sm={5.8}
            xs={5.8}
            className={classes.img_container_left}
          ></Grid>

          <Grid
            container
            rowGap={2}
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={6}
            className={classes.img_container_right}
            display="flex"
          >
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={classes.img_container_right_1}
            ></Grid>
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className={classes.img_container_right_2}
            ></Grid>
          </Grid>
        </Grid>

        {/* ----------------------------Text---------------------- */}

        <Grid
          container
          xl={12}
          lg={12}
          md={12}
          sm={6}
          xs={6}
          className={classes.main_container_text}
          display="flex"
          justifyContent="space-between"
        >
          <Grid
            item
            xl={5.8}
            lg={5.8}
            md={5.8}
            sm={6}
            xs={6}
            className={classes.main_container_text_left}
          >
            <Typography variant="h3" className={classes.txt_title}>
              What We Do
            </Typography>
            <p className={classes.para_1}>
              We often sell handmade crafts, snacks, or services, learning valuable skills like teamwork, 
              budgeting, and marketing. It provides a fun platform for creativity and helps them understand 
              the basics of running a business while raising funds for school projects or charities.
            </p>
          </Grid>

          <Grid
            container
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={6}
            className={classes.main_container_text_right}
          >
            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={6}
              xs={6}
              className={classes.main_container_text_right_1}
            >
              <Typography variant="h3" className={classes.txt_title}>
                Mission
              </Typography>
              <p className={classes.para_1}>
                The mission of School Mart is to foster entrepreneurship and financial 
                literacy among students by providing a supportive environment where they 
                can create, promote, and sell products or services. We aim to cultivate 
                essential life skills such as teamwork, communication, and problem-solving 
                while encouraging creativity and innovation. Through these activities, 
                School Mart seeks to enhance the school community, promote collaboration 
                among students, and support various school initiatives and charitable causes.
              </p>
            </Grid>

            <Grid
              item
              xl={12}
              lg={12}
              md={12}
              sm={6}
              xs={6}
              className={classes.main_container_text_right_2}
            >
              <Typography variant="h3" className={classes.txt_title}>
                Vision
              </Typography>
              <p className={classes.para_1}>
                The vision of School Mart is to empower students to become innovative 
                leaders and responsible entrepreneurs. We aspire to create a vibrant, 
                collaborative marketplace that nurtures creativity, enhances financial 
                literacy, and fosters a sense of community. By instilling confidence and 
                practical skills, we aim to prepare students for future success in an ever-changing 
                economic landscape.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* ------------- Footer -------------- */}
      <Footer />
    </div>
  );
};

export default withStyles(styleSheet)(About);
