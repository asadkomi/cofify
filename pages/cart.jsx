/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

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
  Modal
} from "@mui/material";

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../StateManagement/cartSlice.js";
import OrdaerModal from "../components/cart/OrdaerModal.jsx";


const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const cart = () => {
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const handleOpen = () => setCash(true);
  const handleClose = () => setCash(false);
  
  
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const ButtonWrapper = ({ currency, showSpinner }) => {

    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {/* {showSpinner && isPending && <div className="spinner" />} */}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };


  return (

    <>
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
            {cart.products.map((product) => (

            
            <TableBody key={product._id}>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Image
                    src={product.img}
                    alt="product"
                    width="100"
                    height="100"
                  />
                </TableCell>
                <TableCell sx={{}} align="right">
                  {product.title}
                </TableCell>
                <TableCell sx={{}} align="right">
                  {product.extras.map((extra)=> (
                    <span key={extra._id}>{extra.text}, </span>
                  ))}
                </TableCell>
                <TableCell sx={{}} align="right">
                  ${product.price}
                </TableCell>
                <TableCell sx={{}} align="right">
                {product.quantity}
                </TableCell>
                <TableCell sx={{}} align="right">
                  ${product.price * product.quantity}
                </TableCell>
              </TableRow>
            </TableBody>
            ))}
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
          <CardContent maxHeight="700px">
            <Typography sx={{ mb: "20px" }} variant="h5" component="div">
              Cart Total
            </Typography>
            <Typography variant="body2" sx={{}}>
              Subtotal: ${cart.total}
            </Typography>
            <Typography variant="body2">Discount: $0.00</Typography>
            <Typography variant="body2">Total: ${cart.total}</Typography>
          </CardContent>
          <CardActions sx={{width: '100%'}}>

            {open ? (
              <Box mb={20} sx={{width: '100%', marginBottom: '10px'}}>

            

              <Button onClick={() => setCash(true)} fullWidth variant="contained" size="large" sx={{marginBottom: '10px'}}>
              CASH ON DELIVERY
            </Button>
                
              
            <PayPalScriptProvider
                options={{
                  "client-id":
                    "AZLE1mvIGC3aCpBSw552ZavP65mC8sLQAjF_95HfVKpAd_x8NqUlwJfPbZNXYzm109Q0tK590s3YRI3g",
                  components: "buttons",
                  currency: "USD",
                  "disable-funding": "credit,card,p24",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider> 
              </Box>
              ) : (
              <Button onClick={() => setOpen(true)} fullWidth variant="contained" size="large">
              Checkout
            </Button>)} 
          </CardActions>
        </Card>
      </Grid>
    </Grid>
    <div>
      {cash && <OrdaerModal handleOpen={handleOpen} handleClose={handleClose} total={cart.total} createOrder={createOrder} /> }
    </div>
    </>
  );
};

export default cart;
