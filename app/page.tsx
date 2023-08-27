"use client"
import styles from './page.module.css'
import headIcon from '../assets/suggestions/icon-suggestions.svg'
import Image from 'next/image';
import empty from '../assets/suggestions/illustration-empty.svg';
import FeedbackItems from './components/FeedbackItems';
import NewFeedback from './components/NewFeedback';
import { useState, useEffect } from 'react';
import Comments from './components/Comments';
import axios from 'axios';
export default function Home() {

  const [newFeedback, setNewFeedback] = useState<boolean>(false);
  const [leftSide, setLeftSide] = useState<boolean>(false);
  const [popupItmes, setPopupItems] = useState<Feedbacks>();
  const [popItems, setPopItems] = useState<boolean>(false);

  interface Feedbacks {
    _id: string;
    title: string;
    description: string;
    votes: number;
    comments: number;
    category: string;
  }

  function openPopupItems(feedback: Feedbacks) {
    setPopupItems(feedback);
  }

  const [feedback, setFeedback] = useState<Feedbacks[]>([]);

  useEffect(() => {
    axios.get('/api/feedback').then(res => {
      setFeedback(res.data);
    })
  }, []);

  return (
    <div className={styles.body}>

      {popupItmes && popItems ? (
        <div className={styles.pop}>

          <Comments {...popupItmes} setPopItems={setPopItems} />
        </div>
      ) : (
        <>
          <div className={styles.main}>
            {leftSide === false ? (
              <div className={styles.left_part}>
                <div className={styles.left_first}>
                  <div className={styles.left_first_text}>
                    <h2 >Eqaim</h2>
                    <p>Feedback board</p>
                  </div>
                </div>

                <div className={styles.left_buttons}>
                  <button className={styles.btn}>All</button>
                  <button className={styles.btn}>UI</button>
                  <button className={styles.btn}>UX</button>
                  <button className={styles.btn}>Enhancement</button>
                  <button className={styles.btn}>Bug</button>
                  <button className={styles.btn}>Feature</button>
                </div>

                <div className={styles.left_buttons}>
                  <h2>Roadmap</h2>
                  <div className={styles.left_cate}>
                    <p>planned</p>
                    <p>0</p>
                  </div>
                  <div className={styles.left_cate}>
                    <p>In-Progress</p>
                    <p>0</p>
                  </div>
                  <div className={styles.left_cate}>
                    <p>Live</p>
                    <p>0</p>
                  </div>

                </div>
              </div>
            ) : (<></>)}
            <div className={styles.right_part}>
              {newFeedback === false ? (
                <>
                  <div className={styles.heading}>
                    <Image src={headIcon} alt='' />
                    <div>{feedback.length} <span className={styles.suggestion}>Suggestions</span></div>
                    <span className={styles.sortBy}><div> SortBy: </div>
                      <select className={styles.sortSelect}>
                        <option value="MostUpvotes"> Most Upvotes </option>
                        <option value="MostComments"> Most Comments </option>
                        <option value="LeastUpvotes">  Least Upvotes </option>
                        <option value="LeastComments">  Least Comments </option>
                      </select>
                    </span>
                    <button className={styles.addFeedback} onClick={() => { setNewFeedback(true); setLeftSide(true) }}> + Add feedback</button>
                  </div>

                  <div>
                    {feedback.length === 0 ? (
                      <>
                        <div className={styles.right0}>
                          <Image src={empty} alt="empty" />
                          <p className={styles.no}>There is no feedback yet !</p>
                          <button className={styles.addFeedback} onClick={() => { setNewFeedback(true); setLeftSide(true) }}> + Add feedback</button>
                        </div>
                      </>
                    ) : (
                      <>
                        {feedback.map(feeds => (<>
                        {console.log(feeds)}
                          <FeedbackItems {...feeds} onOpen={() => { openPopupItems(feeds) }} setPopItems={setPopItems} />
                        </>
                        ))}
                      </>
                    )}

                  </div>
                </>) : (
                <>
                  <NewFeedback setNewFeedback={setNewFeedback} setLeftSide={setLeftSide} setFeedback={setFeedback} feeds={feedback} />
                </>
              )}
            </div>
          </div>

        </>
      )}
    </div>
  )
}
