const express = require('express')
const productRoutes = express.Router()

const ProductController = require('../controllers/ProductController')

productRoutes.get('/products/create', ProductController.createProduct)
productRoutes.post('/products/create', ProductController.createProductPost)
productRoutes.post('/remove/:id', ProductController.removeProduct)
productRoutes.post('/products/edit', ProductController.editProductPost)
productRoutes.get('/products/edit/:id', ProductController.editProduct)
productRoutes.get('/products/:id', ProductController.getProduct)
productRoutes.get('/products', ProductController.showProducts)

module.exports = productRoutes