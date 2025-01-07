/** @format */

import { readFileSync, writeFileSync } from "fs";
import { IProduct } from "../interfaces/product.interface";

export const getData = () => {
  const data = JSON.parse(readFileSync(__dirname + "/../../db.json", "utf8"));
  return data as { products: IProduct[] };
};

export const addProduct = (d: IProduct) => {
  const data = getData();
  const { products } = data;
  const id = products[products.length - 1].id + 1;
  const { productName, price, categoryId } = d;
  const newData = { id, productName, price, categoryId };
  data.products.push(newData);
  writeFileSync(__dirname + "/../../db.json", JSON.stringify(data));
};
