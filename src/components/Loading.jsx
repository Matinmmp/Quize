import { CircularProgress } from '@mui/material'
import React from 'react'

function Loading() {
  return (
    <div style={{textAlign:'center'}}>
        <CircularProgress sx={{mt:'5rem'}}  size={80}/>
    </div>
  )
}

export default Loading
