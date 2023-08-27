import mongoose from "mongoose";
import { Feedbacks } from "@/app/models/Feedbacks";
const mongoUrl = "mongodb+srv://feeds:2GzO9dWaA5GQMbN5@cluster0.qqutvfu.mongodb.net/?retryWrites=true&w=majority"

export async function POST(req){
    mongoose.connect(mongoUrl);
    const jsonBody = await req.json();
    console.log(jsonBody);
    const {title, description, category} = jsonBody;
    const comments = 0, votes = 0;
    await Feedbacks.create({title, description, category, comments, votes });
    return Response.json(jsonBody);    
}

export async function GET(){
    return Response.json(await Feedbacks.find());
}
