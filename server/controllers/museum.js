const Museums=require("../models/museum")
module.exports.getMuseumData=async(req,res)=>{
    try{
        const museums=await Museums.find()
        res.status(200).json(museums)
        console.log("get");
    }catch(error){
        res.status(404).json({message:error.message})
        console.log(err);
    }
};
module.exports.getMuseumsDataById = async (req, res) => {
    const { id } = req.params;
    try {
      const museum = await Museums.findById(id);
      res.status(200).json(museum);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
  module.exports.createNewMuseumInfo = async (req, res) => {
    console.log(req);
    const newMuseums = new Museums(req.body);
    try {
      await newMuseums.save();
      res.status(201).json(newMuseums);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports.deleteMuseumInfo = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedMuseum = await Museums.findByIdAndDelete(id);
      res.status(200).json(deletedMuseum);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  module.exports.updateMuseumsData = async (req, res) => {
    console.log(req);
    const { id } = req.params;
    try {
      const updateMuseumsData = await Museums.findByIdAndUpdate(id, req.body);
      res.status(201).json(updateMuseumsData);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
  