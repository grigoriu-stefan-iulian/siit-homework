import React from 'react'

const date = new Date()
const DateNow = () => (
    <div>
        <p>The date is: {date.toISOString()}</p>
        <p>Have a good evening.</p>
    </div>
)

export default DateNow