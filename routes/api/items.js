const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/Item');

// Route #1
// @route   GET api/items
// @desc    GET ALL ITEMS
// @acccess Public
router.get('/', (req, res) => { 
    Item.find()
        .sort({ date: -1} )
        .then(items => res.json(items))
        .catch(err => console.log(err))
});

// Route #2
// @route   POST api/items
// @desc    CREATE A POST
// @acccess Public
router.post('/', (req, res) => { 
    const newItem = new Item({
        name: req.body.name
    })

    newItem.save()
    .then(item => res.json(item))
    .catch(err => console.log(err))
});

// Route #3
// @route   POST api/items
// @desc    DELETE A ITEM
// @acccess Public
router.delete('/:id', (req, res) => { 
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({ success: false}))
});

module.exports = router;