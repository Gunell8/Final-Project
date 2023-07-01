const Contacts = require('../models/contact')

module.exports.getContactsData = async (req, res) => {
    try {
      const contacts = await Contacts.find();
      res.status(200).json(contacts);
      console.log("get contacts");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  module.exports.getContactsDataById = async (req, res) => {
    const { id } = req.params;
    try {
      const contacts = await Contacts.findById(id);
      res.status(200).json(contacts);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
  module.exports.deleteContactInfo = async (req, res) => {
    console.log("delete");
    const { id } = req.params;
    try {
      const deletedContact = await Contacts.findByIdAndDelete(id);
      res.status(200).json(deletedContact);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports.createNewContactInfo = async (req, res) => {
    console.log(req);
    const newContacts = new Contacts(req.body);
    try {
      await newContacts.save();
      res.status(201).json(newContacts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };