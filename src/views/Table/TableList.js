import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";


const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

const useStyles = makeStyles(styles);


export default function TableList() {
    const classes = useStyles();

    return (

        <GridContainer>

            <div style={{ textAlign: "center" }}>
                <h1><b>Doctors Reps</b></h1>
            </div>

            <GridItem xs={12} sm={12} md={12}>
                <Card>

                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Doctors List</h4>

                    </CardHeader>
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
                </Card>
            </GridItem>

        </GridContainer>
    );

}

