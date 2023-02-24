import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
import GridTable from '@nadavshaar/react-grid-table';


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
// import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import ArtTrack from "@material-ui/icons/ArtTrack";
import Language from "@material-ui/icons/Language";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";


import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts";

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
  const classes = useStyles();
  return (

    <div>



      <div style={{ textAlign: "center" }}>
        <h1><b>Dashboard</b></h1>
      </div>

      <h4><b>Todays Recap</b> </h4><p style={{ textAlign: "right" }}> <label for="pet-select"></label>
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
                <Icon>content_copy</Icon>
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
                <Icon>info_outline</Icon>
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
            <h4> <b>last visits</b><p style={{ textAlign: "right" }}> <label for="pet-select"></label>
              <select name="pets" id="pet-select">
                <option value="">--Please choose an option--</option>
                <option value="dog">pharma1</option>
                <option value="cat">pharma2</option>

              </select></p></h4>
            <CardBody>
              <GridContainer justify="space-between">
                <GridItem xs={12} sm={12} md={5}>
                  <Table
                    tableData={[
                      [
                        <img src="assets/img/flags/Ll.png" />,
                        "DOTW",
                        "visits",
                        "Sector",
                      ],
                      [
                        <img src="assets/img/flags/Ll.png" />,
                        "",
                        "Product sample",
                        "Decisoin",
                      ],
                      [
                        <img src="assets/img/flags/Ll.png" />,
                        "Contact5",
                        "Product sample",
                        "Decisoin",
                      ],

                    ]}
                  />
                </GridItem>

              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>







    </div >


  );

}