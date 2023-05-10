import React from 'react';
import './projects.css';

function Projects() {
    return (
        <div className="projects">
            <header>
                <h1>Our Latest Projects</h1>
                <p>Check out some of our recent work!</p>
            </header>
            <div className="card-container">
                <div className="card">
                    <div className="card-image"></div>
                    <div className="category">Illustration</div>
                    <div className="heading">
                        A heading that must span over two lines
                        <div className="author">
                            By <span className="name">Abi</span> 4 days ago
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image"></div>
                    <div className="category">Web Design</div>
                    <div className="heading">
                        A heading that must span over two lines
                        <div className="author">
                            By <span className="name">Bob</span> 2 weeks ago
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image"></div>
                    <div className="category">Photography</div>
                    <div className="heading">
                        A heading that must span over two lines
                        <div className="author">
                            By <span className="name">Charlie</span> 1 month ago
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image"></div>
                    <div className="category">Web Design</div>
                    <div className="heading">
                        A heading that must span over two lines
                        <div className="author">
                            By <span className="name">Bob</span> 2 weeks ago
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
