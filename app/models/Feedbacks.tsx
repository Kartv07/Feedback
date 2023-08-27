import {Schema, model, models} from "mongoose";

const feedbackSchema = new Schema ({
    title:{type:String, required:true},
    description:{type:String, required:true},
    category:{type:String, required:true},
    comments:{type:Number, required:true},
    votes:{type:Number, required:true},
});

export const Feedbacks = models?.Feedbacks|| model('Feedbacks', feedbackSchema);
