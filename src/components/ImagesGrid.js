import React from 'react';
import './ImagesGrid.css'; // Assuming you will create a CSS file for grid styles

const ImagesGrid = ({ images }) => {
    return (
        <div className="images-grid">
            <div className="grid-item"><img src={images[0]} alt="Image 1" /></div>
            <div className="grid-item"><img src={images[1]} alt="Image 2" /></div>
            <div className="grid-item"><img src={images[2]} alt="Image 3" /></div>
            <div className="grid-item"><img src={images[3]} alt="Image 4" /></div>
        </div>
    );
};

export default ImagesGrid;