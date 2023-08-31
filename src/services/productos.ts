import { Producto } from "../interfaces/producto.interface";
import IProductModel from "../models/productos";


const servInsertProducto = async(producto:Producto) =>{
    const responseInsert = await IProductModel.create(producto);
    return responseInsert;
}


export{
servInsertProducto

}