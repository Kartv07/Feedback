"use client"
import styles from '../page.module.css'
import Image from 'next/image';
import Add from '../../assets/shared/icon-new-feedback.svg';
import back from '../../assets/shared/icon-arrow-left.svg';
import axios from 'axios';

import { Dispatch, SetStateAction, useState } from 'react';

interface Feedbacks {
    _id:string;
    title:string;
    description:string;
    votes:number;
    comments:number;
    category:string;
  }
interface Props {
  setNewFeedback: Dispatch<SetStateAction<boolean>>;
  setLeftSide: Dispatch<SetStateAction<boolean>>;
  setFeedback:Dispatch<SetStateAction<Feedbacks[]>>;
  feeds:Feedbacks[];

}

export default function NewFeedback(props:Props) {

    const [tit, setTitle] = useState<string>("");
    const [cate, setCategory] = useState<string>("");
    const [detail, setDetail] = useState<string>("");

    const addFeeds = () =>{
        const newFeed : Feedbacks = {
            _id:String(Date.now()),
            title:tit,
            description:detail,
            votes: 0,
            comments:0,
            category:cate,
        }

        props.setFeedback(prevFeedback => [...prevFeedback, newFeed]);
        props.setNewFeedback(false);
        props.setLeftSide(false);

        axios.post('/api/feedback',{title:tit, description:detail, category:cate, comments:0, votes:0}).then(res=>{console.log(res)});
    }
   
    return (<>
        <div className={styles.goFeedBack}><Image src={back} alt="" /> <button onClick={()=>{props.setNewFeedback(false); props.setLeftSide(false)}} >Go Back</button></div>
        <div className={styles.newHead}>
            <Image className={styles.newImg} src={Add} alt="add" />
            <h2 className={styles.headNew}>Create New Feedback</h2>

            <div className={styles.newTitle}>
                <p className={styles.newSub}>Feedback Title</p>
                <p className={styles.newDes}>Add a short, descriptive headline</p>
                <input onChange={(e)=>{setTitle(e.target.value)}} type="text" className={styles.newArea} />
            </div>

            <div className={styles.newTitle}>
                <p className={styles.newSub}>Category</p>
                <p className={styles.newDes}>Choose a category for your feedback</p>
                <select onChange={(e)=>{setCategory(e.target.value)}} className={styles.newSelect}>
                    <option value="Feature"> Feature </option>
                    <option value="UI"> UI </option>
                    <option value="Ux">  Ux </option>
                    <option value="Bug">  Bug </option>
                    <option value="Enhancement">  Enhancement </option>
                </select>
            </div>

            <div className={styles.newTitle}>
                <p className={styles.newSub}>Feedback Detail</p>
                <p className={styles.newDes}>include any specific comments on what should be improved, added, etc.</p>
                <textarea onChange={(e)=>{setDetail(e.target.value)}} className={styles.newSelect}/>
            </div>

            <div className={styles.newBtns}>
                <button onClick={()=>{props.setNewFeedback(false); props.setLeftSide(false)}} className={styles.can}>Cancel</button>
                <button onClick={addFeeds} className={styles.addFeedback}> Add feedback</button>
            </div>
        </div>
        </>

    )
}