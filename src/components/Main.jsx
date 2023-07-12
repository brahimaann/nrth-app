import React, { useRef, useEffect } from 'react';
import videoBG from '../Visuals/vhsrollerbladeslomo for website.mp4';

function Main() {


    const videoRef = useRef(videoBG);
    
    useEffect(() => {
        // Start playing the video and set it to loop infinitely
        videoRef.current.play();
        videoRef.current.loop = true;

        // Set the size of the overlay image to match the video's aspect ratio
        const videoHeight = videoRef.current.videoHeight;
        const videoWidth = videoRef.current.videoWidth;
        const videoAspectRatio = videoWidth / videoHeight;
        overlayRef.current.style.width = `${100 * videoAspectRatio}%`;
    }, []);

    const handleCanPlay = () => {
        // On mobile, manually play the video when it can be played
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            videoRef.current.play();
        }
    };

    return (
        <div className="Main">


            <video ref={videoRef} className="video-background" autoPlay loop muted playsInline onCanPlay={handleCanPlay} >
                <source src={videoBG} type="video/mp4" />
            </video>
            <div className="content">
            </div>

        </div>
    );
}

export default Main;
