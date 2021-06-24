import {
  InnerSection,
  FlexBox,
  FlexRow,
  FlexColumn,
  Typography,
} from "../../../App.Styles";
import { SignImg, LineSep } from "./SignUp.Styles";
import SignUpImg from "../../../Assets/login.png";
import Button from "../../../Components/Button/Button";

export default function SignUpPage() {
  return (
    <FlexBox color="#fff">
      <InnerSection>
        <FlexRow style={{ justifyContent: "start", alignItems: "start" }}>
          <FlexColumn
            style={{
              justifyContent: "start",
              alignItems: "start",
              width: " 474px",
            }}
          >
            <Typography fontSize={60} fontWeight={"bold"}>
              Signup.
            </Typography>
            <Typography fontSize={32}>
              Sign up and get exclusive offers from us
            </Typography>

            <Button
              onClick={() => {}}
              isGray={false}
              width={"100%"}
              borderRadius={"16px"}
              style={{ margin: "20px 0", height: "40px" }}
              text="Sign up"
            />

            <LineSep />

            <FlexRow>
              <Typography fontSize={22} style={{ opacity: "0.6" }}>
                {" "}
                Have an account ?
              </Typography>
              <Typography fontSize={22}>Login </Typography>
            </FlexRow>
          </FlexColumn>
          <SignImg src={SignUpImg} />
        </FlexRow>
      </InnerSection>
    </FlexBox>
  );
}
