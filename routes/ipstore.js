const express = require('express');
const Ipstore = require('../models/ipstore');

const router = express.Router();

router.get('/get_url', async (req, res) => {
    try {
        const data = await Ipstore.findOne().sort({ createdAt: -1 });

        if (!data) {
            return res.status(404).json({ error: 'Data not found' });
        }

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/', async (req, res) => {
    try {
        res.status(200).json({ message: 'Server Success' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

  
  
router.post('/post_url', async (req, res) => {
    try {
        const data = new Ipstore(req.body);
        await data.save();
        res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
});

module.exports  = router;