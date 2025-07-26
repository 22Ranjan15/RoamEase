const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().allow("", null),
        price: Joi.number().required().min(0),
        country: Joi.string().required(),
        location: Joi.string().required(),
        category: Joi.string().valid(
            "trending", "rooms", "iconic-cities", "mountains", "castles", "amazing-pools", "camping", "farms",
            "arctic", "domes", "boats", "amazing-views", "top-of-the-world", "new", "mansions", "tiny-homes",
            "beach", "tropical", "ski-in-out", "lakefront", "national-parks", "islands", "desert", "caves",
            "luxe", "countryside", "surfing", "golfing", "historical-homes", "creative-spaces", "treehouses",
            "vineyards", "bed-breakfast", "off-the-grid"
        ).required()
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required()
});