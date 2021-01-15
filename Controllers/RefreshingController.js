const express = require('express');
const RefreshingService = require('../Services/RefreshingService.js')

let _rs = RefreshingService.repository

class RefreshingController {
    constructor() {
        //Setting up routes
        this.router = express.Router()
            .get('', this.getAll)
            .get('/:personID', this.getById)
            .post('', this.create)
            .put('/:id', this.edit)
            .delete('/:id', this.delete)
            .use(this.defaultRoute)
    }

   async getAll(req, res, next){
    try {
        let data = await _rs.find({})
        return res.send(data)
    } catch (error) {
        next(error)
    }
   }

   async getById(req, res, next){
    try {
        
    } catch (error) {
        next(error)
    }
   }

   async create(req, res, next){
    try {
        
    } catch (error) {
        next(error)
    }
   }

   async edit(req, res, next){
    try {
        
    } catch (error) {
        next(error)
    }
   }

   async delete(req, res, next){
    try {
        
    } catch (error) {
        next(error)
    }
   }

    defaultRoute(req, res, next) {
        next({ status: 404, message: 'No such route' })
    }
}

module.exports = new RefreshingController();