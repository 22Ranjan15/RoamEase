const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const { validateListing, isLoggedIn, isOwner } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

const multer  = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// --- SEARCH ROUTE ---
const Listing = require("../models/listing");
router.get("/search", wrapAsync(async (req, res) => {
    const query = req.query.query || "";
    const category = req.query.category;
    const regex = new RegExp(query, "i");
    const priceQuery = Number(query);

    // Build search conditions
    const searchConditions = [
        { title: regex },
        { location: regex },
        { country: regex },
        { description: regex }
    ];

    // If query is a valid number, add price <= search
    if (!isNaN(priceQuery)) {
        searchConditions.push({ price: { $lte: priceQuery } });
    }
    if (category) {
        searchConditions.push({ category });
    }

    const allListings = await Listing.find({
        $or: searchConditions
    });

    res.render("listings/search", {
        allListings,
        searchResults: {
            count: allListings.length,
            query
        }
    });
}));

// Index and Create Route  
router
    .route("/")
        .get(wrapAsync(listingController.index))  // Index Route
        .post(    // Create Route
            isLoggedIn,
            upload.single('listing[image]'),
            validateListing,
            wrapAsync(listingController.createListing)
        );

// New Listing Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Show, Update, and Delete Route
router
    .route("/:id")
        .get(wrapAsync(listingController.showListing))  // Show Route
        .put(   // Update Route
            isLoggedIn,
            isOwner,
            upload.single('listing[image]'),
            validateListing,
            wrapAsync(listingController.updateListing)
        )
        .delete(    // Delete Route
            isLoggedIn,
            isOwner,
            wrapAsync(listingController.destroyListing)
        );

// Edit Route
router.get(
    "/:id/edit", 
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm)
);


module.exports = router;