const Card = require('../models/Card');

const getCardItems = async (req, res) => {
    const cardItems = await Card.find();
    if(!cardItems) return res.status(204).json({'message': 'No Items found'});
    res.json(cardItems);
}

const addToCard = async (req,res) => {

}