const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { required } = require("joi");

const listingSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: String,
    image: {
        url: String,
        filename: String,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    category: {
        type: String,
        enum: [
            "trending", 
            "rooms", 
            "iconic-cities", 
            "mountains", 
            "castles", 
            "amazing-pools", 
            "camping", 
            "farms", 
            "arctic", 
            "domes", 
            "boats", 
            "amazing-views", 
            "top-of-the-world", 
            "new", 
            "mansions", 
            "tiny-homes", 
            "beach", 
            "tropical", 
            "ski-in-out", 
            "lakefront", 
            "national-parks", 
            "islands", 
            "desert", 
            "caves", 
            "luxe", 
            "countryside", 
            "surfing", 
            "golfing", 
            "historical-homes", 
            "creative-spaces", 
            "treehouses", 
            "vineyards", 
            "bed-breakfast", 
            "off-the-grid"
        ]
    }
});

listingSchema.post("findOneAndDelete", async(listing) => {
    if(listing) {
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
});

const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;