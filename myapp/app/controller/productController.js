import productModel from "../model/ProductModel";
import { NextResponse } from "next/server";
export const creatProduct = async (req) => {
  const body = await req.json();
  const newProduct = await productModel.create(body);
  return NextResponse.json({
    message: "product Created Successfully",
    status: 200,
    body: newProduct,
  });
};
