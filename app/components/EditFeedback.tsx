import styles from '../page.module.css'
import Image from 'next/image';
import back from '../../assets/shared/icon-arrow-left.svg';
import edit from '../../assets/shared/icon-edit-feedback.svg';
import { Dispatch, SetStateAction, useState } from 'react';


interface Props{
    setEdit:Dispatch<SetStateAction<boolean>>;
}

export default function NewFeedback(props:Props) {
   
    return (<>
        <div className={styles.goFeedBack}><Image src={back} alt="" /> <button onClick={()=>{props.setEdit(false)}} >Go Back</button></div>
        <div className={styles.newHead}>
            <Image className={styles.newImg} src={edit} alt="add" />
            <h2 className={styles.headNew}>Editing</h2>

            <div className={styles.newTitle}>
                <p className={styles.newSub}>Feedback Title</p>
                <p className={styles.newDes}>Add a short, descriptive headline</p>
                <input  type="text" className={styles.newArea} />
            </div>

            <div className={styles.newTitle}>
                <p className={styles.newSub}>Category</p>
                <p className={styles.newDes}>Choose a category for your feedback</p>
                <select  className={styles.newSelect}>
                    <option value="Feature"> Feature </option>
                    <option value="UI"> UI </option>
                    <option value="Ux">  Ux </option>
                    <option value="Bug">  Bug </option>
                    <option value="Enhancement">  Enhancement </option>
                </select>
            </div>

            <div className={styles.newTitle}>
                <p className={styles.newSub}>Update Status</p>
                <p className={styles.newDes}> Change feature state</p>
                <select className={styles.newSelect}>
                    <option value="Planned"> Planned </option>
                    <option value="Suggestion"> Suggestion </option>
                    <option value="In-progress">  In-progress </option>
                    <option value="Live">  Live </option>
                </select>
            </div>

            <div className={styles.newTitle}>
                <p className={styles.newSub}>Feedback Detail</p>
                <p className={styles.newDes}>include any specific comments on what should be improved, added, etc.</p>
                <textarea  className={styles.newSelect}/>
            </div>

            <div className={styles.newBtns}>
            <button  className={styles.delete}>Delete</button>
                <span className={styles.subde}>
                <button  className={styles.can}>Cancel</button>
                <button className={styles.addFeedback}> Add feedback</button>
                </span>
                
            </div>
            
        </div>
        </>

    )
}