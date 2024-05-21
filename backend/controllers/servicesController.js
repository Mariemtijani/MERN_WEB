const Service = require('../models/Service');

const getAllServices = async (req,res) => {
    const services = await Service.find();
    if(!services) return res.status(204).json({'message': 'No services found'});
    res.json(services);
}

const createNewService = async(req, res) => {
    if(!req.body.name){
        return res.status(400).json({'Message' : 'The name is required'})
    } else if (!req.body.artisanId) {
        return res.status(400).json({'Message' : 'The Artisan Id is required'})
    }
     else if (!req.body.categoryId) {
        return res.status(400).json({'Message' : 'The Category Id is required'})
    }
    else if (!req.body.description) {
        return res.status(400).json({'Message' : 'The description is required'})
    }
    else if (!req.body.image) {
        return res.status(400).json({'Message' : 'The image  is required'})
    }
    else if (!req.body.price) {
        return res.status(400).json({'Message' : 'The price is required'})
    }
    else if (!req.body.deliveryTime) {
        return res.status(400).json({'Message' : 'The delivery time is required'})
    }

    try {
        const newService = await Service.create({
            name : req.body.name,
            artisanId : req.body.artisanId,
            categoryId : req.body.categoryId,
            description : req.body.description,
            image : req.body.image,
            price : req.body.price,
            deliveryTime : req.body.deliveryTime
        })
        res.json(newService)
    } catch (err) {
        console.error(err)
    }
}

const updateService = async (req,res) => {
    if(!req.body.id) return res.status(400).json({'Message' : 'Service Id is required.'});

    const service = await Service.findOne({_id : req.body.id}).exec();
    if(!service) {
        return res.status(204).json({'message': 'No matches Found'});
    }

    if(req.body?.name) service.name = req.body.name;
    if(req.body?.categoryId) service.categoryId = req.body.categoryId;
    if(req.body?.description) service.description = req.body.description;
    if(req.body?.image) service.image = req.body.image;
    if(req.body?.price) service.price = req.body.price;
    if(req.body?.deliveryTime) service.deliveryTime = req.body.deliveryTime;

    const result = await service.save();
    res.json(result);
}

const deleteService = async(req,res) => {
    if(!req.body.id) return res.status(400).json({'message' : 'The service id is required.'});

    const service = await Service.findOne({_id : req.body.id}).exec();
    if(!service) {
        return res.status(204).json({"Message" : `No service matches ${req.body.id}`});
    }
    const result = await service.deleteOne({_id : req.body.id});
    res.json(result);
}

const getService = async (req,res) => {
    if(!req.params?.id) return res.status(400).json({'message' : 'the service id is required'});

    const service = await Service.findOne({_id : req.params.id}).exec();
    if(!service) {
        return res.status(204).json({"Message" : `No service matches ${req.body.id}`});
    }
    res.json(service);
}

module.exports = {
    getAllServices,
    getService,
    createNewService,
    updateService,
    deleteService
}