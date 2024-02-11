import React, { useState } from 'react'
import { FaStar } from "react-icons/fa"

const Star = ({ NoOfStars = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (starId) => {

    }

    const handleMouseMove = (starId) => {

    }

    const handleMouseLeave = (starId) => {

    }

    return (
        <div className='star-rating'>
            {
                [...Array(NoOfStars)].map((_, index) => {
                    index += 1
                    return (
                        <FaStar 
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseMove(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        size={40}
                        />
                    )
                })
            }
        </div>
    )
}

export default Star