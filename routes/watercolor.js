const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();
const GalleryImage = require('../models/galleryImage');

// Getting all
router.get('/', async(req, res) => {
    try {
        const watercolorImages = await GalleryImage.find();
        res.json(watercolorImages);

     } catch(err) {
        res.status(500).json({ message : err.message})
    }
});

// Getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id);
});

// Creating one
router.post('/', (req, res) => {

});

// Updating one
router.patch('/', (req, res) => {

});

// Delete one
router.delete('/', (req, res) => {

});

module.exports = router