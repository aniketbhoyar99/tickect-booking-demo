import React, { useState } from "react";
import { Button, Row, Col, FormGroup, Input } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Yup from "yup";
import Data from "../services/Data";
import { useHistory } from "react-router";
import "./../App.css"
const RegistrationForm = (props) => {
  const history=useHistory();
  const { getdata } = props;
  const [Datas, setDatas] = useState(Data);
  const [DropDownData, setDropDownData] = useState([]);
  // console.log("DropDownData", DropDownData);
  // console.log("Data", Datas);
  const formInitialVal = {
    username: "",
    date: "",
    movieName: "",
    movieTime: "",
  };
  const validatData = Yup.object().shape({
    username: Yup.string().required(),
    date: Yup.string().required(),
    movieName: Yup.string().required(),
    movieTime: Yup.string().required(),
  });
  const SubmitHandler = (values) => {
    console.log("?????", values);
    getdata(values);
    history.push("/ticketpage");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Formik
        initialValues={formInitialVal}
        onSubmit={SubmitHandler}
        validationSchema={validatData}
      >
        {(formik) => {
          const {
            errors,
            touched,
            values,
            handleSubmit,
            handleBlur,
            handleChange,
          } = formik;
          console.log("values..", values);
          return (
            <div
              className="card"
              style={{
                width: "40%",
                margin: "20px",
                padding: "60px",
                borderRadius: "0px 30px 0px 30px",
              }}
            >
              <Form>
                <h1 style={{ textAlign: "center", color: "wheat" }}>
                  Registration Form
                </h1>
                {setDropDownData(values.movieName)}
                <Row>
                  <Col lg={12}>
                    <FormGroup>
                      <label for="username" className="floating-label">
                        UserName
                      </label>
                      <Field
                        type="text"
                        name="username"
                        placeholder="enter name..."
                        className="form-control"
                        style={{ borderRadius: "20px" }}
                      />
                      <div>
                        <ErrorMessage
                          component="span"
                          className="text-danger"
                          name="username"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <FormGroup>
                      <label for="date" className="floating-label">
                        Date
                      </label>
                      <Field
                        type="date"
                        name="date"
                        placeholder="enter date..."
                        className="form-control"
                        style={{ borderRadius: "20px" }}
                      />

                      <ErrorMessage
                        component="span"
                        className="text-danger"
                        name="date"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <FormGroup>
                      <label for="movieName" className="floating-label">
                        MovieName
                      </label>
                      <Field
                        as={Input}
                        type="select"
                        name="movieName"
                        placeholder="enter in movieName..."
                        className="form-control"
                        // onChange={(e) => setDropDownData(e.target.value)}
                        onChange={handleChange("movieName")}
                        value={DropDownData}
                        style={{ borderRadius: "20px" }}
                      >
                        <option>select Movie.....</option>
                        {Datas.map((values) => {
                          return <option>{values.movie}</option>;
                        })}
                      </Field>
                      <div>
                        <ErrorMessage
                          component="span"
                          className="text-danger"
                          name="movieName"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col lg={12}>
                    <FormGroup>
                      <label for="movieTime" className="floating-label">
                        movieTime
                      </label>
                      <Field
                        as={Input}
                        type="select"
                        name="movieTime"
                        placeholder="enter in movieTime..."
                        className="form-control"
                        style={{ borderRadius: "20px" }}
                      >
                        <option>select Time....</option>
                        {Datas.filter(
                          (values) => values.movie === DropDownData
                        ).map((newVal) => {
                          console.log("newVal", newVal);
                          return newVal.time.map((time) => {
                            return <option value={time}>{time}</option>;
                          });
                        })}
                      </Field>
                      <div>
                        <ErrorMessage
                          component="span"
                          className="text-danger"
                          name="movieTime"
                        />
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <div className="mt-2">
                  <Button color="primary" type="submit">
                    Registered
                  </Button>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};
export default RegistrationForm;
