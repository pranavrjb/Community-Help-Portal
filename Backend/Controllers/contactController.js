const Contact = require('../Models/Contacts');

const contactController = async (req, res) => {
    const {username, email, message} = req.body;
    try {
        const newContact = new Contact({username, email, message});
        await newContact.save();
        res.status(200).json({message: "Message sent successfully."});
    } catch (err) {
        console.error("Error while sending message", err);
        res.status(500).json({message: 'Internal Server Error.'});
    }
}

module.exports = {contactController}