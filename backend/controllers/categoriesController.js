const Category = require('../models/Category');

const getAllCategories = async (req,res) => {
    const categories = await Category.find();
    if(!categories) return res.status(204).json({'message': 'No category found'});
    res.json(categories);
}

const createNewCategory = async(req,res) => {
    if(!req?.body?.name) {
        return res.status(400).json({'message' : 'the name is required'});
    }

    try {
        const result = await Category.create({
            name : req.body.name,
            description : req.body.description
        });
        res.status(201).json(result);
    }catch (err) {
        console.error(err)
    }
}

const updateCategory = async (req,res) => {
    if(!req?.body?.id) {
        return res.status(400).json({'message' : 'Id parameter is required'})
    }
    const category = await Category.findOne({_id : req.body.id}).exec();
    if(!category) {
        return res.status(204).json({'message' : `No Artisan matches Id ${req.body.id}`});
    }
    if(req.body?.name) category.name = req.body.name;
    if(req.body?.description) category.description = req.body.description;
    const result = await category.save();
    res.json(result);
}

const deleteCategory = async(req,res) => {
    if(!req.body?.id) return res.status(400).json({'message': 'category id is required'})

    const category = await Category.findOne({_id : req.body.id}).exec();
    if(!category) {
        return res.status(204).json({'message': 'No category found'})
    }
    const result = await category.deleteOne({_id:req.body.id});
    res.json(result);
}

const getCategory = async (req,res) => {
    if(!req?.params?.id) return res.status(400).json({'message' : 'Id is required'});
    const category = await Category.findOne({_id : req.params.id}).exec();
    if(!category) {
        return res.status(204).json({'message': 'No category found'})
    }
    res.json(category);
}

module.exports = {
    getAllCategories,
    getCategory,
    createNewCategory,
    updateCategory,
    deleteCategory
}