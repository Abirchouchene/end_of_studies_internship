import React, { useState, useEffect } from "react";


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem";
import Table from "components/Table/Table.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";


// import { get } from "api-ws"
import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";



const us_flag = require("assets/img/flags/US.png").default;
const de_flag = require("assets/img/flags/DE.png").default;
const au_flag = require("assets/img/flags/AU.png").default;
const gb_flag = require("assets/img/flags/GB.png").default;
const ro_flag = require("assets/img/flags/RO.png").default;
const br_flag = require("assets/img/flags/BR.png").default;

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920,
};


const useStyles = makeStyles(styles);

export default function Dashboard() {
  const [usersList, setUsersList] = useState([])

  // const getUsers = (url) => {
  //   get(url).then((res) => {
  //     console.log(res)
  //     setUsersList(res.data)

  //   })
  // }

  // useEffect(() => {
  //   getUsers("/users");
  // }, [])

  const classes = useStyles();
  return (

    <div>



      <div style={{ textAlign: "center" }}>
        <h1><b>Dashboard</b></h1>
      </div>

      <span style={{
        position: "relative",
        top: "20px"
      }} ><b>Todays Recap</b> </span><p style={{ textAlign: "right" }}> <label for="pet-select"></label>
        <select name="pets" id="pet-select">
          <option value="">--Please choose an option--</option>
          <option value="dog">pharma1</option>
          <option value="cat">pharma2</option>

        </select></p>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon></Icon>
              </CardIcon>
              <p className={classes.cardCategory}><b>Planned</b></p>
              <h3 className={classes.cardTitle}>

              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>


              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}><b>Compailed</b></p>

            </CardHeader>
            <CardFooter stats>

            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>

                </Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Cancled</p>

            </CardHeader>
            <CardFooter stats>

            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <i className="fab fa-twitter" />
              </CardIcon>
              <p className={classes.cardCategory}>Awaiting</p>

            </CardHeader>
            <CardFooter stats>

            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <span style={{
              position: "relative",
              top: "28px",
              left: "8px"
            }}> <b>Last visits</b><p style={{ textAlign: "right" }}> <label htmlFor="pet-select"></label>
                <select style={{
                  position: "relative",
                  top: "-18px",
                  right: "25px"

                }} name="pets" id="pet-select">
                  <option value="">--Please choose an option--</option>
                  <option value="dog">pharma1</option>
                  <option value="cat">pharma2</option>

                </select></p></span>
            <CardBody>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["DOTW", "Sector", "Phone number"]}
                  tableData={[
                    ["", "Product sample", "Decisoin",],
                    ["Contact 5", "Product sample", "Decisoin"]

                  ]}
                />
              </CardBody>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>







    </div >


  );

}