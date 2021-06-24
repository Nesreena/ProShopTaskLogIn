import {
  FlexBox,
  FlexColumn,
  FlexRow,
  InnerSection,
  Typography,
} from "../../App.Styles";
import Imgsss from "../../Assets/heroimg.png";
import { CardPhoto, CounterButton, CounterBox } from "./ShoppingCard.Styles";
import { useState } from "react";

export default function ShoppingCard(props) {
  const [count, setCount] = useState(1);
  return (
    <FlexBox style={{ background: "#Fff", marginTop: 30 }}>
      <InnerSection
        style={{ background: "#F2F2F2", width: "1226px", borderRadius: "16px" }}
      >
        <FlexRow style={{ justifyContent: "start" }}>
          <CardPhoto src={Imgsss} />
          <Typography
            fontSize={22}
            fontWeight={"bold"}
            style={{ width: "415px" }}
          >
            {" "}
            Apple iPhone 11 Pro 256GB Memory {props.item}{" "}
          </Typography>

          <CounterBox>
            <CounterButton onClick={() => setCount(count - 1)}>-</CounterButton>
            <FlexBox> {count} </FlexBox>
            <CounterButton onClick={() => setCount(count + 1)}>+</CounterButton>
          </CounterBox>

          <Typography
            fontSize={24}
            fontWeight={"bold"}
            style={{ width: "409px" }}
          >
            {" "}
            $499.99 {props.price}{" "}
          </Typography>
        </FlexRow>
      </InnerSection>
    </FlexBox>
  );
}
