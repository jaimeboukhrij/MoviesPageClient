import React, { useState } from 'react';

const SliderBar = () => {
    const [startValue, setStartValue] = useState(0);
    const [endValue, setEndValue] = useState(100);
    const [isDragging, setIsDragging] = useState(false);

    const handleSliderClick = (event) => {
        const barRect = event.target.getBoundingClientRect();
        const clickX = event.clientX - barRect.left;
        const barWidth = barRect.width;
        const range = endValue - startValue;

        const newValue = (clickX / barWidth) * range + startValue;
        const clampedValue = Math.max(startValue, Math.min(newValue, endValue));

        setStartValue(clampedValue);
    };

    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    const handleDrag = (event) => {
        if (isDragging) {
            const barRect = event.target.getBoundingClientRect();
            const dragX = event.clientX - barRect.left;
            const barWidth = barRect.width;
            const range = endValue - startValue;

            const newValue = (dragX / barWidth) * range + startValue;
            const clampedValue = Math.max(startValue, Math.min(newValue, endValue));

            setStartValue(clampedValue);
        }
    };

    return (
        <div
            className="slider-bar"
            onClick={handleSliderClick}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseMove={handleDrag}
        >
            <div
                className="slider-bar-fill"
                style={{ left: `${(startValue / (endValue - startValue)) * 100}%`, width: `${((endValue - startValue) / (endValue - startValue)) * 100}%` }}
            ></div>
            <div className="slider-bar-handle" style={{ left: `${(startValue / (endValue - startValue)) * 100}%` }}></div>
            <div className="slider-bar-handle" style={{ left: `${((endValue - startValue) / (endValue - startValue)) * 100}%` }}></div>
        </div>
    );
};

export default SliderBar;
