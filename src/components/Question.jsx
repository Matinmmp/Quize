import { FormControl, FormControlLabel, Radio, RadioGroup, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'


function Question({ question, handleTrueAnswer }) {
    const [view, setView] = useState([]);

 

    const handleChange = (event) => {
        if (event.target.value === question.correct_answer)
            handleTrueAnswer()
    };

    useEffect(()=>{
        setView([...question.incorrect_answers, question.correct_answer].sort((a,b)=>a-b))
    },[question])

    return (
        <div>
            <Typography variant='h5'>{question.question}</Typography>

            <div style={{ marginTop: '2rem' }}>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        onChange={handleChange}>

                        {view.map((item, index) => <FormControlLabel sx={{ color: '#00b3ff' }}
                            value={item} key={index} control={<Radio />} label={item} />)}
                    </RadioGroup>
                </FormControl>

            </div>
        </div>
    )


}


export default Question
