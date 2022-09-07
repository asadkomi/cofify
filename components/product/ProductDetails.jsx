import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../StateManagement/cartSlice.js";

import {
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  Button,
} from "@mui/material";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";


const ProjectDetails = ({coffee}) => {
  const [size, setSize] = useState(0);
  const [cupSize, setCupSize] = useState("small");
  const [price, setPrice] = useState(coffee.prices[0])
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleChange = (event, newcupSize) => {
    setCupSize(newcupSize);
    if (newcupSize === "small") {
      setSize(0);
    }
    if (newcupSize === "medium") {
      setSize(1);
    }
    if (newcupSize === "large") {
      setSize(2);
    }
  };

  const handleSize = (sizeIndex) => {
    const difference = coffee.prices[sizeIndex] - coffee.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

const handleChangeBox = (e, option) => {
  const checked = e.target.checked ;

  if (checked) {
    changePrice(option.price);
    setExtras((prev) => [...prev, option]);
  } else {
    changePrice(-option.price);
    setExtras(extras.filter((extra) => extra._id !== option._id));
  }
}

const handleClick = () => {
  dispatch(addProduct({...coffee, extras, price, quantity}));
};
 

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: { xs: "20px" },
      }}
      pt={10}
    >
      <Box>
        <Typography pb={2} variant="h3">
          {coffee.title}
        </Typography>
        <Typography pb={2}>{coffee.desc}</Typography>
        <Typography pb={2} variant="h6">
          ${price}
        </Typography>
        <Typography pb={2} variant="h5" SX={{}}>
          Cup Size
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "start",
          textAlign: "center",
        }}
      >
        <ToggleButtonGroup
          color="secondary"
          value={cupSize}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton
            value="small"
            onClick={() => handleSize(0)}
            sx={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              textAlign: "center",
              padding: "0 20px",
            }}
          >
            <FreeBreakfastIcon
              style={{
                fontSize: "30px",
              }}
            />
            <Typography sx={{ textTransform: "none" }}>Small</Typography>
          </ToggleButton>
          <ToggleButton
            value="medium"
            onClick={() => handleSize(1)}
            sx={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              textAlign: "center",
              padding: "0 20px",
            }}
          >
            <FreeBreakfastIcon
              style={{
                fontSize: " 40px",
              }}
            />
            <Typography sx={{ textTransform: "none" }}>Medium</Typography>
          </ToggleButton>
          <ToggleButton
            value="large"
            onClick={() => handleSize(2)}

            sx={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              textAlign: "center",
              padding: "5px 20px",
            }}
          >
            <FreeBreakfastIcon
              style={{
                fontSize: " 45px",
              }}
            />
            <Typography sx={{ textTransform: "none" }}>Large</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box>
        <FormGroup
          color="secondary"
          sx={{
            "&.MuiFormGroup-root": { color: "secondary" },
            display: "flex",
            flexDirection: "row",
            marginTop: "30px",
          }}
        >
          {coffee.extraOptions.map((option)=> (

          <FormControlLabel key={option._id}
            control={
              <Checkbox
                sx={{ color: "white" }}
              
                color="secondary"
                onChange={(e) => handleChangeBox(e, option)}
              />
            }
            label={option.text}
            sx={{}}
          />
          ))}
         
        </FormGroup>
      </Box>

      <Box
        sx={{
          // width: "50px",
          marginTop: "30px",
          display: "flex",
          flexDirection: "row",
          height: "40px",
        }}
      >
        <Box sx={{}}>
          <input
            type="number"
            defaultValue={1}
            onChange={(e) => setQuantity(e.target.value)}
            style={{
              width: " 50px",
              height: "36px",
              borderRadius: "3px",
              border: "none",
              marginRight: "10px",
            }}
          />
          <Button color="secondary" variant="contained" sx={{}} onClick={handleClick}>
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDetails;
