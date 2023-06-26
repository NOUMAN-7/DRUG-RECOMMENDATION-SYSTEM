import React from "react";
import Button from "@material-ui/core/Button";
import { Row, Col, Card, Form } from "react-bootstrap";

const axios = require("axios");

class ReactUploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      loader: 0,
      drugName: "",
      condition: "",
      review: "",
    };
    // this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: "linear-gradient(#03befc, #56baf5, blue)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          // opacity: 0.7
        }}
      >
        <Card.Body>
          <Row>
            <Col md={6}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>DRUG NAME *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Drug Name"
                    value={this.drugName}
                    onChange={(event) => {
                      this.setState({
                        drugName: event.target.value,
                      });
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>CONDITION *</Form.Label>
                  <Form.Control
                    placeholder="Enter Condition"
                    value={this.condition}
                    onChange={(event) => {
                      this.setState({
                        condition: event.target.value,
                      });
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>REVIEW *</Form.Label>
                  <Form.Control
                    placeholder="Enter Review"
                    value={this.review}
                    onChange={(event) => {
                      this.setState({
                        review: event.target.value,
                      });
                    }}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col md={6}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "green",
                  color: "white",
                  padding: 20,
                  marginTop: "10%",
                  marginLeft: "43%",
                  fontSize: 22,
                }}
                type="submit"
                component="span"
                onClick={(e) => {
                  this.setState({ loader: 0 });
                  e.preventDefault();
                  const userdata = {
                    uri:  this.state.drugName +
                    this.state.condition +
                    this.state.review,
                  }
                  const options = {
                    url: localStorage.getItem("url") + "/drug",
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    data: JSON.stringify(userdata),
                  };

                  console.log(
                    this.state.drugName +
                      this.state.condition +
                      this.state.review
                  );

                  axios(options).then((response) => {
                    if (response.status == 200) {
                      console.log(response.data);
                      this.setState({
                        result_data:response.data.data
                        
                      });
                      this.setState({ loader: 1 });
                    }
                  });
                }}
              >
                PREDICT DRUG
              </Button>
            </Col>
          </Row>
        </Card.Body>
        <h1 style={{ textAlign: "center", marginTop: "4%" ,color:'white'}}>{this.state.result_data}</h1>
      </div>
    );
  }
}

export default ReactUploadImage;
