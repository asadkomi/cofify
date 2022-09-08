/* eslint-disable react-hooks/rules-of-hooks */

import React, {useState} from 'react'
import Image from "next/image";
import axios from "axios";
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

const index = ({orders, products}) => {

    const [coffeeList, setCoffeeList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["Preparing", "On the way", "Delivered"];


const handleDelete = async (id) => {
    // console.log(id);
    try {
        const res = await axios.delete(
        "http://localhost:3000/api/products/" + id
        );
        setCoffeeList(coffeeList.filter((coffee) => coffee._id !== id));
    } catch (err) {
        console.log(err);
    }
};

const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await axios.put("http://localhost:3000/api/orders/" + id, {
        status: currentStatus + 1,
      });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Grid container spacing={2}  sx={{backgroundColor: '#432d2d',padding: {xs: '100px 20px', sm:'150px 25px',}}}>
        <Grid item xs={12} sm={6} >
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
                  Order
                </TableCell>
                <TableCell sx={{ textAlign: "start" }} align="right">
                  ID
                </TableCell>
                <TableCell sx={{ textAlign: "start" }} align="right">
                  Title
                </TableCell>
                <TableCell sx={{ textAlign: "center" }} align="center">
                  Action
                </TableCell>

              </TableRow>
            </TableHead>
            {coffeeList.map((product) => (


            <TableBody key={product._id}>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 },  }}
              >
                <TableCell component="th" scope="row">
                  <Image
                    src={product.img}
                    alt="product"
                    width="100"
                    height="100"
                  />
                </TableCell>
                <TableCell sx={{ textAlign: "start" }} align="right">
                {product._id.slice(0,7)}...
                </TableCell>
                <TableCell sx={{ textAlign: "start" }} align="right">
                {product.title}
                </TableCell>
                <TableCell sx={{ display: 'flex', justifyContent:'right', alignItems: 'center', marginTop:'30px' }}>
                  <Button sx={{marginRight: '10px'}} variant="contained" size="large">Edit</Button>
                  <Button onClick={() => handleDelete(product._id)} variant="contained" size="large">Delete</Button>
                </TableCell>
              </TableRow>
            </TableBody>
            ))}
          </Table>
        </TableContainer>
        </Grid>
        <Grid item xs={12} sm={6}>

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
                  ID
                </TableCell>
                <TableCell sx={{ textAlign: "start" }} align="right">
                  Customer
                </TableCell>
                <TableCell sx={{ textAlign: "start" }} align="right">
                  Payment
                </TableCell>
                <TableCell sx={{ textAlign: "start" }} align="right">
                  Total
                </TableCell>
                <TableCell sx={{ textAlign: "start" }} align="right">
                  Status
                </TableCell>
                <TableCell sx={{ textAlign: "center" }} align="center">
                  Action
                </TableCell>

              </TableRow>
            </TableHead>
            {orderList.map((order) => (

            
            <TableBody key={order._id}>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{ textAlign: "start" }}
                  component="th"
                  scope="row"
                >
                  {order._id.slice(0,5)}...
                </TableCell>
                <TableCell sx={{ textAlign: "start" }} align="right">
                {order.customer}
                </TableCell>
                <TableCell sx={{ textAlign: "start" }} align="right">
                {order.method === 0 ? <span>Cash</span> : <span>Paid</span>}
                </TableCell>
                <TableCell sx={{ textAlign: "start" }} align="right">
                ${order.total}
                </TableCell>
                <TableCell sx={{ textAlign: "start" }} align="right">
                {status[order.status]}
                </TableCell>
                <TableCell sx={{ display: 'flex', justifyContent:'right' }}>
                  <Button onClick={() => handleStatus(order._id)} sx={{marginRight: '10px'}} variant="contained" size="large">Next Stage</Button>

                </TableCell>
              </TableRow>
            </TableBody>
            ))}
          </Table>
        </TableContainer>

        </Grid>
    </Grid>
  )
}

export const getServerSideProps = async (ctx) => {
    
  
    
  
    const productRes = await axios.get("http://localhost:3000/api/products");
    const orderRes = await axios.get("http://localhost:3000/api/orders");
  
    return {
      props: {
        orders: orderRes.data,
        products: productRes.data,
      },
    };
  };

export default index