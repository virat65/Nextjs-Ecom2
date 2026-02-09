import databaseConnections from "../../utils/database.js";
import { creatProduct } from "../../controller/productController.js";
export async function POST(req) {
 await databaseConnections()   
 return creatProduct(req)
}