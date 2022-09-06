import React from "react";
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
  Box,
} from "@mui/material";
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import OrderStatus from "../../components/order/OrderStatus";


const Order = () => {
  return (
    <Grid
      container
      spacing={1}
      sx={{ backgroundColor: "#432d2d", padding: { xs: "20px", sm: "40px" }, height:{sm:'100vh'} }}
    >
      <Grid item xs={12} sm={9} sx={{margin: {xs: '20px 0', sm:'40px 0'}}}>
        <TableContainer
          component={Paper}
          sx={{ color: "white !important", textAlign: "center" }}
        >
          <Table
            sx={{ minWidth: 650, textAlign: "center" }}
            aria-label="simple tablimport { color } from '../../node_modules/.staging/style-value-types-058a715d/lib/color/index';
e"
          >
            <TableHead sx={{}}>
              <TableRow sx={{}}>
                <TableCell
                  sx={{ textAlign: "start" }}
                  component="th"
                  scope="row"
                >
                  Order ID
                </TableCell>
                <TableCell sx={{ textAlign: "start" }} align="right">
                  Customer
                </TableCell>
                <TableCell sx={{ textAlign: "start" }} align="right">
                  Address
                </TableCell>

                <TableCell sx={{ textAlign: "start" }} align="right">
                  Total
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{ textAlign: "start" }}
                  component="th"
                  scope="row"
                >
                  127384
                </TableCell>
                <TableCell sx={{ textAlign: "start" }} align="right">
                  Coffinga
                </TableCell>
                <TableCell sx={{ textAlign: "start" }} align="right">
                  124 N Hyland Ave, Unit 205
                </TableCell>
                <TableCell sx={{ textAlign: "start" }} align="right">
                  $8.99
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        
          {/* <Box sx={{}}>
            <PaymentIcon sx={{fontSize: '140px'}} />
            <Typography sx={{alignText: 'center'}}> Payment </Typography>
            <CheckCircleIcon />
          </Box>
          <Box sx={{dispaly:'flex', justifyContent: 'center', alignItems: 'center', alignText: 'center'}}>
            <PaymentIcon sx={{fontSize: '140px'}} />
            <Typography sx={{alignText: 'center'}}> Payment </Typography>
            <CheckCircleIcon />
          </Box> */}

          <OrderStatus />
        
      </Grid>

      <Grid item xs={12} sm={3} sx={{margin: {sm:'40px 0'}}}>
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
            <Button variant="contained" fullWidth color="success" size="large">
              paid
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Order;
