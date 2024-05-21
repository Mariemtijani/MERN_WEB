const Artisan = require('../models/Artisan');

const getAllArtisan = async (req,res) =>  {
    const artisans = await Artisan.find();
    if(!artisans) return res.status(204).json({'message' : 'No Artisan found'});
    res.json(artisans);
}

const createNewArtisan = async (req, res) => {
    if(!req?.body.firstname || !req?.body.lastname){
        return res.status(400).json({'message' : 'First and last names are required'});
    }
    
    try {
        const result = await Artisan.create({
            firstname : req.body.firstname,
            lastname : req.body.lastname
        });

        res.status(201).json(result)
    } catch (err) {
        console.error(err);
    }
}

const updateArtisan = async (req,res) => {
    if(!req?.body?.id) {
        return res.status(400).json({'message' : 'Id parameter is required.'});
    }
    const artisan = await Artisan.findOne({_id : req.body.id}).exec();
    if(!artisan) {
        return res.status(204).json({"message": `No Artisan matches Id ${req.body.id}`});
    }
    if(req.body?.firstname) artisan.firstname = req.body.firstname;
    if(req.body?.lastname) artisan.lastname = req.body.lastname;
    const result = await artisan.save()
    res.json(result);
}

const deleteArtisan = async (req,res) => {
    if(!req?.body?.id) return res.status(400).json({'message': 'Artisan Id is required.'});

    const artisan = await Artisan.findOne({_id : req.body.id}).exec();
    if(!artisan) {
        return res.status(204).json({"message": `No Artisan matches ${req.body.id}.`})
    }
    const result = await atisan.deleteOne({_id : req.body.id});
    res.json(result);
}

const getArtisan =async  (req,res) => {
    if(!req?.params?.id) return res.status(400).json({'message': 'Artisan Id is required.'});

    const artisan = await Artisan.findOne({_id : req.params.id}).exec();
    if(!artisan) {
        return res.status(204).json({"message": `No Artisan matches ${req.body.id}.`})
    }   
    res.json(artisan);
}

module.exports = {
    getAllArtisan,
    getArtisan,
    createNewArtisan,
    updateArtisan,
    deleteArtisan
}