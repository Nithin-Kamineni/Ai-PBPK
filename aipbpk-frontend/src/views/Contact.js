/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function Contact() {
  const centeredImageStyle = {
    display: "block",
    margin: "0 auto",
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  {/* <img
                    alt="..."
                    className="avatar"
                    src={require("assets/img/emilyz.jpg")}
                    style={centeredImageStyle}
                  /> */}
                  <img src="https://directory.ufhealth.org/lin-zhoumeng/files/profile-photo" className="avatar" style={centeredImageStyle}/>
                  <h4 className="title">Zhoumeng Lin, BMed, PhD, DABT</h4>
                  <p className="description">linzhoumeng@ufl.edu</p>
                </div>
                
                
                <div className="card-description">
                <b>About:</b>
                <br/>
                This nanoparticle interactive physiologically based pharmacokinetic (Nano-AiPBPK) model is a web-based interface that enables researchers to predict 
                biodistribution of gold nanoparticles in rats following different routes of administration based on physicochemical properties of the nanoparticles
                </div>
                <div className="card-description">
                <b>Acknowledgement:</b>
                <br/>
                The project is supported by the National Institute of Biomedical Imaging and Bioengineering of National Institutes of Health (Grant #: R03EB026045).
                </div>
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <a href="https://linlab.phhp.ufl.edu/team/">
                    <Button color="facebook">
                      <i className="tim-icons icon-world" />
                    </Button>
                  </a>
                  <a href="https://linlab.phhp.ufl.edu/team/">
                    <Button color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                  </a>
                  <a href="https://linlab.phhp.ufl.edu/team/">
                    <Button color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                    {/* <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button> */}
                  </a>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Contact;
