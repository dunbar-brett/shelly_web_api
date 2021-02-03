const mongoose = require('mongoose');

const galleryImageSchema = new mongoose.Schema ({
    customClass: {
        type: String,
        required: true,
        default: ""
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    filename: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('GalleryImage', galleryImageSchema);