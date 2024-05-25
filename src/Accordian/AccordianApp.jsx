import React,{useState} from 'react'
import data from './data.js'
import SingleQuestion from './Accordian.jsx'
import './accordian.css'
function AccordianApp() {
    const [questions,setQuestions]=useState(data);
  return (
    <main>
        <div className='container'>
            <h3>question and answer about login</h3>
            <section className='info'>
                {questions.map((question)=>{
                    return(
                        <SingleQuestion key={question.id} {...question}>

                        </SingleQuestion>
                    )
                })}
            </section>
        </div>
    </main>
  ) 
}

export default AccordianApp
