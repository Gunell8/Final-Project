const mongoose=require("mongoose")
const {Schema}=mongoose
const museumSchema = Schema({
    name:{
        type:String
    },
    image:{
        type:String
    },
    price:{
        type:String
    },
    title1:{
        type:String
    },
    title2:{
        type:String
    },
    title3:{
        type:String
    },
    title4:{
        type:String
    },
    about:{
        type:String
    },
    seller:{
        type:String
    },
    medium:{
        type:String
    },
    dimensionscm:{
        type:String
    },
    support:{
        type:String
    },
    framing:{
        type:String
    },
    type:{
        type:String
    },
    authenticity:{
        type:String
    },
    signature:{
        type:String
    },
    collectors :{
        type:String
    }
})

const Museums=module.exports=mongoose.model("museums",museumSchema)
module.exports=Museums