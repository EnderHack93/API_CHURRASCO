"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    // imagen:{type: String, required: true},
    estado: { type: Boolean, required: true, default: true },
});
const IProductModel = (0, mongoose_1.model)('Product', productSchema);
exports.default = IProductModel;
