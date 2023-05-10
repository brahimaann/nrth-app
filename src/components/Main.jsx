import React, { useRef, useEffect } from 'react';
import videoBG from '../Visuals/vhsrollerbladeslomo for website.mp4';
import overlayImage from '../Visuals/nrth dvsn front logo.png';

function Main() {


    const videoRef = useRef(videoBG);
    const overlayRef = useRef(overlayImage);

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

    return (
        <div className="Main">


            <video ref={videoRef} className="video-background" autoPlay loop muted playsInline >
                <source src={videoBG} type="video/mp4" />
            </video>
            <div className="content">
            <img ref={overlayRef} className="overlayImg" src={overlayImage} alt="Nrth Dvsn" />
            </div>

        </div>
    );
}

export default Main;
