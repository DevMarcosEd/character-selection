import React, { CSSProperties } from 'react';

const Background = () => {
    const backgroundStyles: CSSProperties = {
        backgroundImage: `url('/characterImage/bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        position: 'fixed',
        opacity: 0.2,
        top: 0,
        left: 0,
        zIndex: -1,
        filter: 'blur(5px)'
    };

    return <div style={backgroundStyles}></div>;
};

export default Background;
