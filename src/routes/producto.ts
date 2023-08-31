import { Router } from "express";
import { Storage } from "@google-cloud/storage";
//import  multer  from "multer";
import { createProduct, getActiveProducts, getInactiveProducts } from "../controllers/productosController";
// const storage = multer.memoryStorage();
// const uploadProfileImg = multer({ storage }).single("profileimg");
const router = Router();

//router.get("/",getItems);

//const upload = multer({ storage: storage });

router.post("/", createProduct);
router.get('/',getActiveProducts);
router.get('/inactivo',getInactiveProducts);

export { router };
