import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

import image1 from '../photos/2023newyears (3 of 32).jpg';
import image2 from '../photos/2023newyears (4 of 32).jpg';
import image3 from '../photos/2023newyears (17 of 32).jpg';
import image4 from '../photos/2023newyears (27 of 32).jpg';

const Gallery = () => {
    const images = [
        image1.default,
        image2.default,
        image3.default,
        image4.default,
    ]
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry>
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{ width: "100%", display: "block" }}
                        alt=""
                    />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default Gallery;