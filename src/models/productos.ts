
import mongoose, { Schema, Document,model } from "mongoose";

export interface IProduct extends Document {
  nombre: string;
  descripcion: string;
  precio: number;
  //imagen:string;
  estado: Boolean;
}

const productSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
 // imagen:{type: String, required: true},
  estado: { type: Boolean, required: true, default: true },
});

const IProductModel = model('Product',productSchema);

export default IProductModel;