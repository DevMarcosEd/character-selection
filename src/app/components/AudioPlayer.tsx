import React, { useEffect, useState } from 'react';

const AudioPlayer = () => {
    const [volume, setVolume] = useState(0.1);

    const handleChangeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(parseFloat(event.target.value));
    };

    useEffect(() => {
        const audioElement = document.getElementById("background-audio") as HTMLAudioElement;
        if (audioElement) {
            audioElement.volume = volume;
        }
    }, [volume]);

    const audioContainerStyle: React.CSSProperties = {
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15px'
    };

    const sliderStyle: React.CSSProperties = {

        height: '8px',
        appearance: 'none',
        background: `linear-gradient(to right, #660000 ${volume * 100}%, #ccc ${volume * 100}%)`,
        outline: 'none',
        opacity: '0.7',
        transition: 'background 0.2s',
    };

    return (
        <div style={audioContainerStyle}>
            {/* Controle de volume */}
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleChangeVolume}
                style={sliderStyle}
            />
            <audio id="background-audio" autoPlay loop>
                <source src="audio/ost.mp3" type="audio/mpeg" />
            </audio>
        </div>
    );
};

export default AudioPlayer;