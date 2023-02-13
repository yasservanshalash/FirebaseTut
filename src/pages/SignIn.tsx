import { Box, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

import { signInWithGooglePopup } from "../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

const SignIn = () => {
  // initial values
  type InitialValues = {
    email: string;
    password: string | RegExp;
  };

  const initialValues: InitialValues = {
    email: "",
    password: "",
  };

  // form schema
  const FormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("email is required to login"),
    password: Yup.string()
      .min(6, "Password too short!")
      .max(20, "Password tooo Long!")
      .required("Password is required to login")
      .matches(
        /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{6,}$/,
        "Password must have at least one letter one number and 6 characters at least in total."
      ),
  });

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userRefDoc = createUserDocumentFromAuth(user)
    console.log(user);
  };
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={(values: InitialValues) => {
          console.log(values);
        }}
      >
        {({ errors, touched, handleChange }) => {
          return (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                justifyContent: "center",
                maxWidth: "300px",
              }}
            >
              <input
                type="text"
                name="email"
                id="email"
                placeholder="email"
                onChange={handleChange}
              />

              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                onChange={handleChange}
              />

              <button type="submit">Log In</button>
              <button type="button" onClick={logGoogleUser}>
                Google
              </button>
              {errors.email && touched.email ? (
                <Typography variant="subtitle2" color="error">
                  * {errors.email} *
                </Typography>
              ) : null}
              {errors.password && touched.password ? (
                <Typography variant="subtitle2" color="error">
                  * {errors.password} *
                </Typography>
              ) : null}
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default SignIn;
