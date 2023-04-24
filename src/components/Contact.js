import {
  Box,
  Button,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CustomBox from "./CustomBox";
import { t } from "@lingui/macro";
import axios from "axios";

function Contact() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    firstname: "",
    email: "",
    message: "",
  });

  const [validations, setValidations] = useState({
    name: true,
    firstname: true,
    email: true,
    message: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateInput = (field, value) => {
    switch (field) {
      case "name":
        return value.trim() !== "";

      case "firstname":
        return value.trim() !== "";

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);

      case "message":
        return value.trim() !== "";

      default:
        return false;
    }
  };

  const areAllInputsValid = () =>
    validateInput("name", userInfo.name) &&
    validateInput("firstname", userInfo.firstname) &&
    validateInput("email", userInfo.email) &&
    validateInput("message", userInfo.message);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
    setValidations((prevValidations) => ({
      ...prevValidations,
      [name]: validateInput(name, value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isFormValid =
      Object.values(validations).every((value) => value) && areAllInputsValid();
    if (!isFormValid) {
      return;
    }
    setIsSubmitting(true);
    const data = {
      name: userInfo.name,
      firstname: userInfo.firstname,
      email: userInfo.email,
      message: userInfo.message,
    };

    axios
      .post("https://formspree.io/f/mnqylbkl", data)
      .then(() => {
        setIsSubmitting(false);
        setUserInfo({
          name: "",
          firstname: "",
          email: "",
          message: "",
        });
        setValidations({
          name: true,
          firstname: true,
          email: true,
          message: true,
        });
      })
      .catch((err) => {
        setIsSubmitting(false);
      });
  };

  return (
    <React.Fragment>
      <CustomBox whiteBox responsive centered sx={{ width: "100%" }}>
        <Stack direction={"column"} spacing={4} width={"100%"}>
          <Typography variant="h4" sx={{ textAlign: "center" }} gutterBottom>
            {t`Vous avez des questions ?`} <br />
            {t`Envoyez moi un message !`}
          </Typography>
          <FormGroup sx={{ width: "100%" }}>
            <Stack direction={"column"} spacing={4} width={"100%"}>
              <Stack
                direction={"row"}
                spacing={2}
                width={"100%"}
                justifyContent={"center"}
                alignItems={"stretch"}
              >
                <Box sx={{ width: "100%" }}>
                  <TextField
                    id="standard-basic-firstname"
                    variant="standard"
                    name="firstname"
                    label={t`Prénom`}
                    color={"formulaireBorderColor"}
                    sx={{ width: "100%" }}
                    disabled={isSubmitting}
                    value={userInfo.firstname}
                    onBlur={() => {
                      validateInput("firstname", userInfo.firstname);
                    }}
                    onChange={handleInputChange}
                    error={!validations.firstname}
                    helperText={
                      !validations.firstname && t`Please enter a firstname.`
                    }
                  />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <TextField
                    id="standard-basic-name"
                    label={t`Nom`}
                    name="name"
                    variant="standard"
                    color={"formulaireBorderColor"}
                    sx={{ width: "100%" }}
                    disabled={isSubmitting}
                    value={userInfo.name}
                    onBlur={() => {
                      validateInput("name", userInfo.name);
                    }}
                    onChange={handleInputChange}
                    error={!validations.name}
                    helperText={!validations.name && t`Please enter a name.`}
                  />
                </Box>
              </Stack>
              <TextField
                id="standard-basic-mail"
                variant="standard"
                label={t`Email`}
                name="email"
                color={"formulaireBorderColor"}
                disabled={isSubmitting}
                value={userInfo.email}
                onBlur={() => {
                  validateInput("email", userInfo.email);
                }}
                onChange={handleInputChange}
                error={!validations.email}
                helperText={
                  !validations.email && t`Please enter a valid email.`
                }
              />
              <TextField
                id="standard-basic-message"
                variant="standard"
                label="Message"
                name={t`message`}
                color={"formulaireBorderColor"}
                multiline
                disabled={isSubmitting}
                value={userInfo.message}
                onBlur={() => {
                  validateInput("message", userInfo.message);
                }}
                onChange={handleInputChange}
                error={!validations.message}
                helperText={!validations.message && t`Please enter a message.`}
              />
              <input type="text" name="_gotcha" style={{ display: "none" }} />
              <Button
                variant="contained"
                sx={{ m: 1, backgroundColor: "formulaireBorderColor.main" }}
                disabled={isSubmitting || !areAllInputsValid()}
                onClick={handleSubmit}
              >
                <Typography
                  variant="button"
                  sx={{
                    color: "white.main",
                    fontWeight: "bold",
                  }}
                >
                  {t`Soumettre`}
                </Typography>
              </Button>
            </Stack>
          </FormGroup>
        </Stack>
      </CustomBox>
    </React.Fragment>
  );
}

export default Contact;
