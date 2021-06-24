import {
  InnerSection,
  FlexBox,
  FlexRow,
  FlexColumn,
  Typography,
} from "../../../App.Styles";
import { useState } from "react";
import axios from "axios";
import { Form, Formik } from "formik";
import { loginSchema } from "../../../Valedation";
import {
  LoginImg,
  FormBox,
  ErrorMessage,
  Input,
  LineSeprator,
} from "./LoginPage.Styles";
import loginImg from "../../../Assets/login.png";
import Button from "../../../Components/Button/Button";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import { useHistory } from "react-router";
import { loginAction } from "../../../Redux/User/userActions";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSaveChanges = async (values) => {
    setError("");
    setIsLoading(true);

    try {
      const response = await axios.post("/users/login", values);

      dispatch(loginAction(response.data));
      localStorage.setItem("user", JSON.stringify(response.data));

      history.push("/");
    } catch (e) {
      setError(e.response.data.message);
    }
    setIsLoading(false);
  };

  return (
    <FlexBox color="#fff">
      <InnerSection style={{ alignItems: "start" }}>
        <FlexRow style={{ alignItems: "start" }}>
          <FlexColumn style={{ alignItems: "start" }}>
            <FlexColumn
              style={{ alignItems: "start", width: "474px", height: "200px" }}
            >
              <Typography fontSize={60} fontWeight={"bold"}>
                Login.
              </Typography>
              <Typography fontSize={32}>
                Login with your data that you entered during registration
              </Typography>
            </FlexColumn>

            <FlexColumn>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema()}
                onSubmit={handleSaveChanges}
              >
                {({ errors, touched }) => {
                  return (
                    <Form
                      style={{
                        width: " 398px",
                        height: "40px",
                        marginRight: " 626px",
                      }}
                    >
                      <Typography fontSize="22px">
                        Enter your email address
                      </Typography>

                      <Input
                        name={"email"}
                        type={"email"}
                        placeholder={"name@example.com"}
                      />

                      {errors.email && touched.email ? (
                        <ErrorMessage>{errors.email}</ErrorMessage>
                      ) : null}
                      <Typography fontSize="22px">
                        Enter your password
                      </Typography>
                      <Input
                        name={"password"}
                        type={"password"}
                        placeholder={"password"}
                      />
                      {errors.password && touched.password ? (
                        <ErrorMessage>{errors.password}</ErrorMessage>
                      ) : null}

                      {error ? <ErrorMessage>{error}</ErrorMessage> : null}

                      <Button
                       isLoading={isLoading}
                        text="Login"
                        width="100%"
                        height="40px"
                        fontSize="22px"
                        style={{ padding: "5px 0" }}
                      />

                      <FlexRow style={{ margin: "10px 0" }}>
                        <CheckBoxOutlinedIcon style={{ fontSize: "22px" }} />
                        <Typography fontSize="22px">Remember me </Typography>
                      </FlexRow>

                      <Typography
                        fontSize="22px"
                        style={{ marginLeft: " 110px" }}
                      >
                        Forgot your password?{" "}
                      </Typography>
                      <LineSeprator />

                      <Button
                        text="Sign up now"
                        width="220px"
                        height="56px"
                        borderRadius="20"
                        style={{
                          background: "#fff",
                          padding: "10px 0",
                          border: "2px solid #FCDD06",
                          marginLeft: " 80px",
                        }}
                      />
                    </Form>
                  );
                }}
              </Formik>
            </FlexColumn>
          </FlexColumn>
          <LoginImg src={loginImg} />
        </FlexRow>
      </InnerSection>
    </FlexBox>
  );
}
