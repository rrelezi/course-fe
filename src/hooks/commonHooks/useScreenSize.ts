import { useState, useEffect } from 'react'

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window
    return {
        width,
        height,
    }
}

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    )

    const getVideoWidth = (windowDimensions: string | number) => {
        if(Number(windowDimensions) > 1024) return '600';
        if(Number(windowDimensions) > 768) return '400';
        if(Number(windowDimensions) > 425) return '300';
        if(Number(windowDimensions) > 375) return '250';
    }

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions())
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return { windowDimensions, getVideoWidth }
}
