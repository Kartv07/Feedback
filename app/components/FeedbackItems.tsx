import Image from 'next/image';
import upvote from "../../assets/shared/icon-arrow-up.svg"
import comment from "../../assets/shared/icon-comments.svg"
import style from "../page.module.css"
import { useState, Dispatch, SetStateAction, useEffect } from 'react';


interface Props {
    _id: string;
    title: string;
    description: string;
    votes: number;
    comments: number;
    category: string;
    onOpen : Dispatch<SetStateAction<void>>;
    setPopItems:Dispatch<SetStateAction<boolean>>;
}

export default function FeedbackItems(props: Props) {
    return (
        <>
                <a
                    href="#"
                    onClick={(e)=>{e.preventDefault(); props.onOpen(); props.setPopItems(true)}}
                    className={style.feedBody}
                >
                    <div className={style.vote}>
                        <Image  src={upvote} alt="" />
                        {props.votes}

                    </div>
                    <div>
                        <h3 className={style.title}>{props.title}</h3>
                        <p className={style.des}>{props.description}</p>
                        <p className={style.btn}>{props.category}</p>
                    </div>
                    <div className={style.comments}>
                        <Image src={comment} alt="" />
                        {props.comments}
                    </div>
                </a>
        </>
    )
}
