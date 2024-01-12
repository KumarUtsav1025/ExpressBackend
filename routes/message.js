const express = require('express');
const Message = require('../models/messages');

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
      const {id} = req.params;
      const data = await Message.findById(id);

      if (!data) {
        return res.status(404).json({ error: 'Data not found' });
      }

      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/', async(req, res)=>{
    try {
      const data = await Message.find();

      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});
  
  
  router.post('/', async (req, res) => {
    try {
      console.log(req.body);
      const data = new Message(req.body);

      const existingData = await Message.findOne({email:data['email']});
      if (existingData) {
        return res.status(400).json({ error: 'Email already exists in the collection' });
      }

      await data.save();
      res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error });
    }
  });

module.exports  = router;