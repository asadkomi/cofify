import React from "react";
import Image from "next/image";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

const cart = () => {
  return (
    <Grid
      container
      spacing={1}

      sx={{ backgroundColor: "#432d2d", padding: { xs: "20px", sm: "40px" }, height:{sm:'100vh'} }}
    >
      <Grid item xs={12} sm={9}>
        <TableContainer component={Paper} sx={{ color: "white !important" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{}}>
              <TableRow sx={{}}>
                <TableCell sx={{}} component="th" scope="row">
                  Coffee
                </TableCell>
                <TableCell sx={{}} align="right">
                  Name
                </TableCell>
                <TableCell sx={{}} align="right">
                  Extras
                </TableCell>
                <TableCell sx={{}} align="right">
                  Price
                </TableCell>
                <TableCell sx={{}} align="right">
                  Quantity
                </TableCell>
                <TableCell sx={{}} align="right">
                  Total
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Image
                    src="/assets/hero.png"
                    alt="product"
                    width="100"
                    height="100"
                  />
                </TableCell>
                <TableCell sx={{}} align="right">
                  Coffinga
                </TableCell>
                <TableCell sx={{}} align="right">
                  Sugar
                </TableCell>
                <TableCell sx={{}} align="right">
                  $8.99
                </TableCell>
                <TableCell sx={{}} align="right">
                  2
                </TableCell>
                <TableCell sx={{}} align="right">
                  $17.98
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Grid item xs={12} sm={3}>
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            // alignItems: "center",
          }}
        >
          <CardContent maxHeight="400px">
            <Typography sx={{ mb: "20px" }} variant="h5" component="div">
              Cart Total
            </Typography>
            <Typography variant="body2" sx={{}}>
              Subtotal: $17.98
            </Typography>
            <Typography variant="body2">Discount: $0.00</Typography>
            <Typography variant="body2">Total: $0.00</Typography>
          </CardContent>
          <CardActions>
            <Button fullWidth variant="contained" size="large">
              Checkout
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default cart;
