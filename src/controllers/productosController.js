"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivateProduct = exports.editProduct = exports.getInactiveProducts = exports.getActiveProducts = exports.createProduct = void 0;
const productos_1 = __importDefault(require("../models/productos")); // Asegúrate de tener los imports correctos
const productos_2 = require("../services/productos");
// Crear un nuevo producto
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, descripcion, precio } = req.body;
        const newProduct = yield (0, productos_2.servInsertProducto)(req.body);
        res.status(201).json({ message: 'Producto creado exitosamente', product: newProduct });
    }
    catch (error) {
        console.error('Error al crear el producto:', error);
        res.status(500).json({ error: 'Error al crear el producto' });
    }
});
exports.createProduct = createProduct;
//ver productos activos
const getActiveProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activeProducts = yield productos_1.default.find({ estado: true });
        res.status(200).json({ products: activeProducts });
    }
    catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
});
exports.getActiveProducts = getActiveProducts;
//ver productos inactivos
const getInactiveProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activeProducts = yield productos_1.default.find({ estado: false });
        res.status(200).json({ products: activeProducts });
    }
    catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
});
exports.getInactiveProducts = getInactiveProducts;
// Editar un producto existente
const editProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nombre, descripcion, precio } = req.body;
        const updatedProduct = yield productos_1.default.findByIdAndUpdate(id, { nombre, descripcion, precio }, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json({ message: 'Producto editado exitosamente', product: updatedProduct });
    }
    catch (error) {
        console.error('Error al editar el producto:', error);
        res.status(500).json({ error: 'Error al editar el producto' });
    }
});
exports.editProduct = editProduct;
// Desactivar un producto (cambiar estado a inactivo)
const deactivateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deactivatedProduct = yield productos_1.default.findByIdAndUpdate(id, { estado: false }, { new: true });
        if (!deactivatedProduct) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json({ message: 'Producto desactivado exitosamente', product: deactivatedProduct });
    }
    catch (error) {
        console.error('Error al desactivar el producto:', error);
        res.status(500).json({ error: 'Error al desactivar el producto' });
    }
});
exports.deactivateProduct = deactivateProduct;
