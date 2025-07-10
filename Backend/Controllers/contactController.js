const Contact = require('../Models/Contacts');

const contactController = async (res, req) => {
    const {name, email, messsage} = req.body;
    try {
        const newContact = new Contact({name, email, messsage});
        await newContact.save();
        res.status(200).json({messsage: "Message sent successfully."});
    } catch (err) {
        console.error("Error while sending message", err);
        res.status(500).json({messsage: 'Internal Server Error.'});
    }
}

module.exports = {contactController}