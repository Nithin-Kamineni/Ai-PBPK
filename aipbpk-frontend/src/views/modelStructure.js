import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

function ModelStructure() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain" style={{ width: "100%" }}>
              <CardHeader>
                <h1>Model Structure</h1>
              </CardHeader>
              <CardBody style={{ textAlign: "center" }}>
                <div
                  id="map"
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="https://pbpk.shinyapps.io/NanoiPBPK/_w_cf0289f2/ModStructure.png"
                    alt="Model Structure"
                    style={{ width: "50%", height: "auto" }}
                  />
                </div>
                <figcaption
                    style={{
                      textAlign: "center",
                      marginTop: "10px",
                      display: "block",
                    }}
                  >
                    <b>Fig. 1. A schematic diagram of the physiologically based pharmacokinetic (PBPK) model for 1.4, 5, 18, 23, 80, and 200 nm gold nanoparticles (AuNPs) in adult rats.</b>
                  </figcaption>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ModelStructure;
