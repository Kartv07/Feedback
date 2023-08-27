"use client"
import Image from 'next/image';
import upvote from "../../assets/shared/icon-arrow-up.svg"
import comment from "../../assets/shared/icon-comments.svg"
import style from "../page.module.css"
import { Dispatch, SetStateAction, useState } from 'react';
import back from '../../assets/shared/icon-arrow-left.svg';
import EditFeedback from '../components/EditFeedback'

interface Feedbacks {
    _id: string;
    title: string;
    description: string;
    votes: number;
    comments: number;
    category: string;
}

interface Props {
    _id: string;
    title: string;
    description: string;
    votes: number;
    comments: number;
    category: string;
    setPopItems:Dispatch<SetStateAction<boolean>>;
}

export default function Comments(props: Props) {

    const [edit, setEdit] = useState<boolean>(false);

    return (
        <>
            {edit === true ? (<EditFeedback setEdit={setEdit}/>) : (
                <>
                    <div className={style.cmntHead}>
                        <div className={style.cmntBack}>
                            <Image src={back} alt="" /><button onClick={() => { props.setPopItems(false)}}>Go Back</button>

                        </div>
                        <button className={style.editFeedback} onClick={() => { setEdit(true); }}>Edit feedback</button>
                    </div>
                    <div className={style.cmntSub}>

                        <div className={style.vote}>
                            <Image src={upvote} alt="" />
                            {props.votes}

                        </div>
                        <div>
                            <h3 className={style.title}>{props.title}</h3>
                            <p className={style.des}>{props.description}
                            </p>
                            <p className={style.btn}>{props.category}</p>
                        </div>
                        <div className={style.comments}>
                            <Image src={comment} alt="" />
                            {props.comments}
                        </div>
                    </div>

                    <div className={style.cmntSec}>
                        <h3>Comments</h3>
                        
                    </div>

                    <div className= {style.addCmnt}>
                        <h3>Add a comment</h3>
                        <textarea placeholder='Type your comment here' className={style.place}/>
                        <div className={style.cmntText}>
                            <p>500 Characters left</p>
                            <button className={style.addFeedback}> Post Comment</button>
                        </div>
                    </div>
                </>
            )}

        </>
    )
}