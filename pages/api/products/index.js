import nc from 'next-connect'
import dbConnect from '../../../backend/db/dbConnect.js';

import { getProducts, addProduct } from '../../../backend/controllers/productController.js'

const handler = nc();

dbConnect();

handler.get(getProducts)
handler.post(addProduct)

export default handler




// import dbConnect from "../../../db/dbConnect";
// import Product from "../../../db/models/Product";

// export default async function handler(req, res) {
//   const { method, cookies } = req;

//   const token = cookies.token

//   dbConnect();

//   if (method === "GET") {
//     try {
//       const products = await Product.find();
//       res.status(200).json(products);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }

//   if (method === "POST") {
//     if(!token || token !== process.env.TOKEN){
//       return res.status(401).json("Not authenticated!")
//     }
//     try {
//       const product = await Product.create(req.body);
//       res.status(201).json(product);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }
// }