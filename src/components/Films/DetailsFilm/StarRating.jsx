import React, { useState } from 'react';

const StarRating = () => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (value) => {
        setRating(value);
    };

    return (
        <div style={{ marginTop: "6%" }}>
            <h5 style={{ color: "grey", marginBottom: "0" }}>Rating</h5>
            <div>
                {[1, 2, 3, 4, 5].map((value) => (
                    <Star
                        key={value}
                        filled={value <= rating}
                        onClick={() => handleRatingChange(value)}
                    />
                ))}
            </div>
        </div>
    );
};

const Star = ({ filled, onClick }) => {
    const starStyle = {
        cursor: 'pointer',
        fontSize: '4rem', // Ajusta el tamaño de fuente aquí
        color: filled ? 'gold' : 'gray',
    };

    return (
        <span style={starStyle} onClick={onClick}>
            &#9733;
        </span>
    );
};

export default StarRating;
