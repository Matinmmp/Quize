import { Box, Button, FormControl, InputLabel, MenuItem, TextField, Typography } from '@mui/material'
import Select from '@mui/material/Select';
import { red } from '@mui/material/colors'

import React, { useEffect, useReducer, useContext } from 'react'
import { MainContext } from '../context/MainProvider';


const initialSetup = {
    questionNumber: 1,
    category: '',
    categories: [],
    difficulty: 'Any Difficulty',
    difficulties: ['Any Difficulty', 'easy', 'medium', 'hard'],
}

function reducer(state, action) {
    switch (action.type) {
        case 'categoriesRecieved':
            return { ...state, categories: action.payload.categories, category: action.payload.category }

        case 'questionNumber':
            return { ...state, questionNumber: action.payload }

        case 'difficulty':
            return { ...state, difficulty: action.payload }

        case 'category':
            return { ...state, category: action.payload }
        default:
            return initialSetup;
    }
}

function SetupQuize() {
    const [state, dispatch] = useReducer(reducer, initialSetup);
    const { setData } = useContext(MainContext)

    useEffect(() => {
        try {
            fetch('https://opentdb.com/api_category.php')
                .then(response => response.json()).then(response =>
                    dispatch({
                        type: 'categoriesRecieved', payload: {
                            categories: [{ id: 1, name: 'Any Category' }, ...response.trivia_categories],
                            category: 1
                        }
                    })
                );
        } catch (error) {

        }
    }, [])

    const handleDefficulyChange = (e) => {
        dispatch({ type: 'difficulty', payload: e.target.value })
    }

    const handleCategoryChange = (e) => {
        dispatch({ type: 'category', payload: e.target.value })
    }

    const handleNumberChange = (e) => {
        if (e.target.value > 0 && e.target.value <= 50)
            dispatch({ type: 'questionNumber', payload: e.target.value })
        else
            dispatch({ type: 'questionNumber', payload: 10 })
    }


    const handleSubmit = () => {
        const url = `https://opentdb.com/api.php?amount=${state.questionNumber}${state.category === 1 ? "" : '&category=' + state.category}${state.difficulty === 'Any Difficulty' ? "" : '&difficulty=' + state.difficulty}&type=multiple`;

         console.log(url);

        setData({ type: 'status', status: 'loading' });
        try {
            fetch(url).then(response => response.json())
                .then(response => {
                    if (response.results.length === 0) {
                        setData({ type: 'status', status: 'error' });
                    } else
                        setData({ type: 'setQuestions', status: 'active', questions: response.results });
                })

        } catch (error) {
            setData({ type: 'status', status: 'error' });

        }
    }

    return (
        <Box sx={{
            padding: '1rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '2rem',
            width: '30rem', backgroundColor: '#262626', borderRadius: ".5rem"
        }} >

            <Typography variant='h4' sx={{ textAlign: 'center', fontSize: '2rem', mt: '1rem' }}>Setup Quize</Typography>

            <TextField sx={{ mt: '3rem' }} fullWidth id="outlined-basic" label="Number"
                value={state.questionNumber}
                onChange={handleNumberChange}
                variant="outlined" />

            <FormControl fullWidth sx={{ mt: '3rem' }}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state.category}
                    label="Category"
                    onChange={handleCategoryChange}>
                    {state.categories.map(item => <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>)}
                </Select>
            </FormControl>


            <FormControl fullWidth sx={{ mt: '3rem' }}>
                <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state.difficulty}
                    label="Difficulty"
                    onChange={handleDefficulyChange}>
                    {state.difficulties.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
                </Select>
            </FormControl>

            <Button fullWidth variant="outlined" color='primary' size="large" sx={{ mt: '4rem' }} onClick={handleSubmit}>Start</Button>

        </Box>
    )
}

export default SetupQuize
