import { useState } from "react"

function FeedbackForm () {
    const [score, setScore] = useState("10")
    const [comment, setComment] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Number(score) <= 5 && comment.length <=10){
            alert("Please provide a comment explaning why the experience was poor")
        }
        setComment("")
        setScore("10")
    }
    return (
    <form onSubmit={handleSubmit}>
        <fieldset>
            <h2>Feedback Form</h2>
            <div id="feedback_form">
                <label>Score: {score}</label>
                <input type="range" min="0" max="10" value={score} onChange={(e) => setScore(e.target.value)} />
            </div>
            <div id="feedback_form"> 
                <label>Comment:</label>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} ></textarea>
            </div>
            <button type="submit">Submit</button>
        </fieldset>
    </form>
)}

export default FeedbackForm;