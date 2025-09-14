const HelpRequest=require('../Models/HelpRequest.js');
const User=require('../Models/User.js');

// Create a new help request
const createHelpRequest = async (req, res) => {
    const { title, description, location } = req.body;
    try {
        const newRequest = new HelpRequest({
            title,
            description,
            location,
            createdBy: req.user._id
        });
        await newRequest.save();
        res.status(201).json(newRequest);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get all help requests
const getAllHelpRequests = async (req, res) => {
    try {
        const requests = await HelpRequest.find().populate('createdBy', 'username email').populate('volunteers', 'username email');
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};  

// Get a specific help request by ID
const getHelpRequestById = async (req, res) => {
    try {
        const request = await HelpRequest.findById(req.params.id).populate('createdBy', 'username email').populate('volunteers', 'username email');
        if (!request) {
            return res.status(404).json({ message: 'Help request not found' });
        }
        res.status(200).json(request);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update a help request (only by creator)
const updateHelpRequest = async (req, res) => {
    try {
        const request = await HelpRequest.findById(req.params.id);
        if (!request) {
            return res.status(404).json({ message: 'Help request not found' });
        }
        if (request.createdBy.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        const { title, description, location, status } = req.body;
        if (title) request.title = title;
        if (description) request.description = description;
        if (location) request.location = location;
        if (status) request.status = status;
        await request.save();
        res.status(200).json(request);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete a help request (only by creator)
const deleteHelpRequest = async (req, res) => {
    try {
        const request = await HelpRequest.findById(req.params.id);
        if (!request) {
            return res.status(404).json({ message: 'Help request not found' });
        }
        if (request.createdBy.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        await request.remove();
        res.status(200).json({ message: 'Help request deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Volunteer for a help request
const volunteerForHelpRequest = async (req, res) => {
    try {
        const request = await HelpRequest.findById(req.params.id);
        if (!request) {
            return res.status(404).json({ message: 'Help request not found' });
        }
        if (request.volunteers.includes(req.user._id)) {
            return res.status(400).json({ message: 'Already volunteered' });
        }
        request.volunteers.push(req.user._id);
        await request.save();
        res.status(200).json({ message: 'Volunteered successfully', request });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = {
    createHelpRequest,
    getAllHelpRequests,
    getHelpRequestById,
    updateHelpRequest,
    deleteHelpRequest,
    volunteerForHelpRequest
};  