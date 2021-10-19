const mongoose = require('mongoose')
const Schema = mongoose.Schema


let blogSchema = new Schema (
    {
        blogId : {
            type : String,
            unique:true
        },
        title : {
            type : String,
            default:" "
        },
        discription : {
            type : String,
            default:""
        },
        bodyHTML : {
            type : String,
            default:""
        },
        views : {
            type: Number,
            default:""
        },
        isPublished : {
            type:Boolean,
            default:false
        },
        category : {
            type : String
        },
        author : {
            type : String,
            default:""
        },
        tags :[],
        created :{
            type:Date,
            default: Date.now
        },
        lastModified : {
            type :Date,
            default:Date.now
        }
    }
)


mongoose.model('Blog',blogSchema)