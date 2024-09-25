const multer = require('multer');
const Category = require('../models/Category');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const getAllCategories = async (req,res) => {
    const categories = await Category.find();
    if(!categories) return res.status(204).json({'message': 'No category found'});
        
    return res.json(categories);
}

const createNewCategory = async (req, res) => {
    console.log(req.body);
    // if (!req.body.name) {
    //     return res.status(400).json({ 'message': 'the name is required' });
    // }

    try {
        let imageData;
        if (req.file) {
            imageData = {
                data: req.file.buffer,
                contentType: req.file.mimetype
            };
        }

        const result = await Category.create({
            name: req.body.name,
            description: req.body.description,
            imageData: imageData
        });
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ 'message': 'Internal server error' });
    }
}


const updateCategory = async (req, res) => {
    if (!req.body.id) {
      return res.status(400).json({ 'message': 'Id parameter is required' });
    }
  
    try {
      const category = await Category.findOne({ _id: req.body.id }).exec();
      if (!category) {
        return res.status(404).json({ 'message': `Category with ID ${req.body.id} not found` });
      }
  
      if (req.body.name) category.name = req.body.name;
      if (req.body.description) category.description = req.body.description;
  
      if (req.file) {
        // Handle image update if a new image is provided
        category.imageData = {
          data: req.file.buffer, // Assuming imageData is stored as binary data
          contentType: req.file.mimetype
        };
      }
  
      const result = await category.save();
      res.json(result);
    } catch (error) {
      console.error('Error updating category:', error);
      res.status(500).json({ 'message': 'Internal server error' });
    }
};


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
    deleteCategory,
    upload 
}