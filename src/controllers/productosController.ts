import { Request, Response } from 'express';
import Product, { IProduct } from '../models/productos'; // Asegúrate de tener los imports correctos
import { servInsertProducto } from '../services/productos';
import moment from 'moment';
import { Storage } from '@google-cloud/storage';
// Crear un nuevo producto
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { nombre, descripcion, precio } = req.body;
    const newProduct = await servInsertProducto(req.body);
    res.status(201).json({ message: 'Producto creado exitosamente', product: newProduct });
  } catch (error) {
    console.error('Error al crear el producto:', error);
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};
//ver productos activos
export const getActiveProducts = async (req: Request, res: Response) => {
    try {
      const activeProducts = await Product.find({ estado: true });
  
      res.status(200).json({ products: activeProducts });
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      res.status(500).json({ error: 'Error al obtener los productos' });
    }
  };
  //ver productos inactivos
  export const getInactiveProducts = async (req: Request, res: Response) => {
    try {
      const activeProducts = await Product.find({ estado: false });
  
      res.status(200).json({ products: activeProducts });
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      res.status(500).json({ error: 'Error al obtener los productos' });
    }
  };
// Editar un producto existente
export const editProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, precio } = req.body;
    
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { nombre, descripcion, precio },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.status(200).json({ message: 'Producto editado exitosamente', product: updatedProduct });
  } catch (error) {
    console.error('Error al editar el producto:', error);
    res.status(500).json({ error: 'Error al editar el producto' });
  }
};

// Desactivar un producto (cambiar estado a inactivo)
export const deactivateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const deactivatedProduct = await Product.findByIdAndUpdate(
      id,
      { estado: false },
      { new: true }
    );

    if (!deactivatedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.status(200).json({ message: 'Producto desactivado exitosamente', product: deactivatedProduct });
  } catch (error) {
    console.error('Error al desactivar el producto:', error);
    res.status(500).json({ error: 'Error al desactivar el producto' });
  }
};
