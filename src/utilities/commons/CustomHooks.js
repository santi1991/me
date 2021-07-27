import React from 'react';

export const useWindowSize = () => {

    // check to see if the window is not equal to the string undefined
    // const isSSR = typeof window !== "undefined";
    // console.log(`isSSR: ${isSSR}`);
    const [windowSize, setWindowSize] = React.useState({
        // width: isSSR ? 1200 : window.innerWidth,
        // height: isSSR ? 800 : window.innerHeight,
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const changeWindowSize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    React.useEffect(() => {
        window.addEventListener('resize', changeWindowSize);

        return () => {
            window.removeEventListener('resize', changeWindowSize);
        };
    }, []);

    return windowSize;
}