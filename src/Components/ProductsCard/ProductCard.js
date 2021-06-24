import { CardBox, CardImg, StarBox, ButtonsBox } from "./ProductCard.styles";
import { Typography, FlexBox } from "../../App.Styles";
import Cardimg from "../../Assets/camera.png";
import Button from "../Button/Button";
import Rating from "@material-ui/lab/Rating";
import { useState } from "react";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";

export default function ProductCard(props) {
  const [value, setValue] = useState(3);
  return (
    <FlexBox
      style={{ background: "#FFF", maxWidth: "520px", maxHeight: "655px" }}
    >
      <CardBox background={"#fff"} borderRadius={"16px"}>
        <CardImg src={Cardimg} />
        <Typography fontSize={24}>{props.item}</Typography>

        <FlexBox style={{ margin: "20px 0" }}>
          {/* <Typography fontSize={30} color={"red"} fontWeight={"bold"} style={{marginRight:"10px"}}>
        $799.99
      </Typography> */}

          <Typography fontSize={30} color={"#242424"} fontWeight={"bold"}>
            {props.price}
          </Typography>
        </FlexBox>

        <FlexBox>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </FlexBox>
        <ButtonsBox>
          <Button
            text={<TurnedInNotIcon />}
            width={"54px"}
            borderRadius={10}
            isGray={true}
            style={{ marginTop: 20, height: 62 }}
          >
            {" "}
          </Button>
          <Button
            text="Add to cart"
            width={"324px"}
            borderRadius={10}
            isGray={true}
            style={{ marginTop: 20, height: 62, marginLeft: 13 }}
          />
        </ButtonsBox>
      </CardBox>
    </FlexBox>
  );
}
