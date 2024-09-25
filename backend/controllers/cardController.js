const Card = require('../models/Card');

const getCardItems = async (req, res) => {
    try {
        const cardItems = await Card.find();
        if (!cardItems || cardItems.length === 0) {
            return res.status(204).json({'message': 'No Items found'});
        }
        res.json(cardItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addToCard = async (req, res) => {
    try {
        // Validate request body
        // const { serviceId, userId, artisanId } = req.body;
        // if (!serviceId || !userId || !artisanId) {
        //     return res.status(400).json({ message: 'Missing required fields' });
        // }

        // Create a new card item
        const newCardItem = await Card.create({
            serviceId : req.body.serviceId,
            userId : req.body.userId,
            artisanId : req.body.artisanId
        });

        // Respond with the newly created card item
        res.status(201).json({
            message: 'Card item created successfully',
            cardItem: newCardItem
        });
    } catch (error) {
        // Log detailed error information for debugging
        console.error('Error adding card item:', error);

        // Respond with an appropriate error message
        res.status(500).json({ message: 'Failed to add card item' });
    }
};


const updateCardItem = async (req, res) => {
    const { id } = req.params;
    const { serviceId, userId, artisanId } = req.body;

    try {
        const cardItem = await Card.findByIdAndUpdate(id, { serviceId, userId, artisanId }, { new: true });

        if (!cardItem) {
            return res.status(404).json({ message: 'Card item not found' });
        }

        res.json(cardItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteCardItem = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCardItem = await Card.findByIdAndDelete(id);

        if (!deletedCardItem) {
            return res.status(404).json({ message: 'Card item not found' });
        }

        res.json({ message: 'Card item deleted successfully', deletedCardItem });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getCardItems, addToCard, updateCardItem, deleteCardItem };
