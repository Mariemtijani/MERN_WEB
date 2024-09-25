const Service = require('../models/Service');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const getAllServices = async (req,res) => {
    const services = await Service.find();
    if(!services) return res.status(204).json({'message': 'No services found'});
    res.json(services);
}

const createNewService = async(req, res) => {
    if (!req.body.name || !req.body.artisanId || !req.body.categoryId || !req.body.description  || !req.body.price || !req.body.deliveryTime) {
        return res.status(400).json({'Message' : 'All fields are required'});
    }

    try {
        let imageData;
        if (req.file) {
            imageData = {
                data: req.file.buffer,
                contentType: req.file.mimetype
            };
        }

        // Create a new service
        const newService = await Service.create({
            name: req.body.name,
            artisanId: req.body.artisanId,
            categoryId: req.body.categoryId,
            description: req.body.description,
            image: imageData, 
            price: req.body.price,
            deliveryTime: req.body.deliveryTime,
            approved : false
        });

        // Send back the newly created service
        res.status(201).json(newService);
    } catch (err) {
        console.error(err);
        res.status(500).json({'Message': 'Failed to create service'});
    }
}

const updateService = async (req,res) => {
    if (!req.body.id) return res.status(400).json({'Message' : 'Service Id is required.'});

    try {
        const service = await Service.findOne({_id : req.body.id}).exec();
        if (!service) {
            return res.status(404).json({'Message': 'Service not found'});
        }

        if(req.body?.name) service.name = req.body.name;
        if(req.body?.categoryId) service.categoryId = req.body.categoryId;
        if(req.body?.description) service.description = req.body.description;
        if(req.body?.image) {
            // Decode base64 image data
            const imageBuffer = Buffer.from(req.body.image, 'base64');
            service.image = imageBuffer; // Assign decoded image buffer
        }
        if(req.body?.price) service.price = req.body.price;
        if(req.body?.deliveryTime) service.deliveryTime = req.body.deliveryTime;

        const result = await service.save();
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({'Message': 'Failed to update service'});
    }
}

const approveService = async (req, res) => {
    if (!req.params.id) return res.status(400).json({ 'Message': 'Service Id is required.' });

    try {
        const service = await Service.findOne({ _id: req.params.id }).exec();
        if (!service) {
            return res.status(404).json({ 'Message': 'Service not found' });
        }

        service.approved = true; // Set the approved status to true
        const result = await service.save();
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ 'Message': 'Failed to approve service' });
    }
}

const disapproveService = async (req, res) => {
    if (!req.params.id) return res.status(400).json({ 'Message': 'Service Id is required.' });

    try {
        const service = await Service.findOne({ _id: req.params.id }).exec();
        if (!service) {
            return res.status(404).json({ 'Message': 'Service not found' });
        }

        service.approved = false; // Set the approved status to true
        const result = await service.save();
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ 'Message': 'Failed to disapprove service' });
    }
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
    deleteService,
    approveService,
    disapproveService,
    upload
}