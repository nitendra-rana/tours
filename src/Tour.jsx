import React, { useState } from 'react'

const Tour = (props) => {
    const { id, image, info, price, name, removeTour } = props

    const [readMore, setReadMore] = useState(true)
    function handleClick(id) {
       return removeTour(id);
      
    }

    return (
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                {/* make modifications here */}
                <p>
                    {readMore ? `${info.substring(0, 200)}...` : info}{' '}
                    <button
                        onClick={() => setReadMore((state) => !state)}>
                        {readMore ? 'read more' : 'show less'}
                    </button>
                </p>
                {/* add click listener to this button passing id */}
                <button
                    className="delete-btn"
                    onClick = {() => handleClick(id)}
                >Not Interested</button>
            </footer>
        </article>
    )
}

export default Tour
