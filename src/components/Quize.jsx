import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Question from './Question';
import Result from './Result';

function Quize({ questions }) {
    const [index, setIndex] = useState(0);
    const [trueAnswer, setTrueAnswer] = useState(0);
    const [showResult, setShowresualt] = useState(false);
    const [isFinish, setIsFinish] = useState(false);




    const handleNext = () => {
        if (index < questions.length - 1) {
            setIndex((index) => index + 1);
        }
        if (index === questions.length - 1) setShowresualt(true);
    }

    useEffect(() => {
        if (index - 1 === questions.length - 2)
            setIsFinish(true);
        if (index-1 === questions.length - 1) {
            setShowresualt(true);
        }
    }, [index])

    const handleTrueAnswer = () => {
        setTrueAnswer((trueAnswer) => trueAnswer + 1);
    }

    return (
        <Box sx={{
            padding: '2rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem',
            width: '50rem', backgroundColor: '#262626', borderRadius: ".5rem"
        }} >

            <Question question={questions[index]} handleTrueAnswer={handleTrueAnswer} />

            {showResult && <Result result={(trueAnswer / questions.length) * 100} showResult={setShowresualt} />}

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}  >
                <Button onClick={handleNext} variant="outlined" color='primary' size="large" sx={{ mt: '4rem' }} >
                    {isFinish ? 'Finish' : 'Next'}</Button>
            </Box>

        </Box>
    )
}

export default Quize
