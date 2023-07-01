const mongoose=require("mongoose")
const {Schema}=mongoose
const ContactSchema = Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    message:{
        type:String
    },
 
})

const Contacts=module.exports=mongoose.model("contact",ContactSchema)
module.exports = Contacts