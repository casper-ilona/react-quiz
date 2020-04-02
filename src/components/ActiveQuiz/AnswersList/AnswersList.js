import React from 'react'
import classes from './AnswersList.module.css'
import AnswerTtem from "./AnswerItem/AnswerItem"

const AnswersList =props=> (
<ul className={classes.AnswersList}>
    {props.answers.map((answers,index) => {
     return (
      <AnswerTtem
          key={index}
        answer={answers}
      />
     )
    }) }
</ul>
);



export default AnswersList
