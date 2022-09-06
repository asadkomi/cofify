import React, { useState } from "react";

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


const ProjectDetails = () => {
  const [size, setSize] = useState(0);
  const [cupSize, setCupSize] = useState("small");

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

  const coffee = {
    id: 1,
    img: "",
    title: "Coffinga",
    price: [6.45, 7.99, 8.99],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim ut labore et dolore magna aliqua. Ut enim ad ut labore et dolore magna aliqua Ut enim ad",
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
          ${coffee.price[size]}
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
          <FormControlLabel
            control={
              <Checkbox
                sx={{ color: "white" }}
                defaultChecked
                color="secondary"
              />
            }
            label="Sugar"
            sx={{}}
          />
          <FormControlLabel
            control={<Checkbox sx={{ color: "white" }} color="secondary" />}
            label="Cream"
            sx={{}}
          />
          <FormControlLabel
            control={<Checkbox sx={{ color: "white" }} color="secondary" />}
            label="Ginger"
            sx={{}}
          />
          <FormControlLabel
            control={<Checkbox sx={{ color: "white" }} color="secondary" />}
            label="Cinnamon"
            sx={{}}
          />
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
            style={{
              width: " 50px",
              height: "36px",
              borderRadius: "3px",
              border: "none",
              marginRight: "10px",
            }}
          />
          <Button color="secondary" variant="contained" sx={{}}>
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDetails;
