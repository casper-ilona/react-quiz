import React from 'react'
import classes from './AnswerItem.module.css'

const AnswerTtem = props =>{
return (
   <li
       className={classes.AnswerItem}
       onClick={() => props.onAnswerClick(props.answer.id)}
   >
    {props.answer.text }
</li>
)
};

export default AnswerTtem
