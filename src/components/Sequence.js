import React, { useState, useEffect } from 'react';
import ImagesGrid from './ImagesGrid';
import './main.css';

const Sequence = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStep((prevStep) => prevStep + 1);
        }, step === 0 ? 2000 : step === 1 ? 3500 : step === 2 ? 3000 : 0);

        return () => clearTimeout(timer);
    }, [step]);

    return (
        <div className="sequence-container">
            {step === 0 && <h1 className="center-text">Cześć słońce.</h1>}
            {step === 1 && <img className="full-screen-image" src="your-image-url-here" alt="Sun" />}
            {step === 2 && <h1 className="center-text">Kocham Cię</h1>}
            {step === 3 && <ImagesGrid />}
        </div>
    );
};

export default Sequence;