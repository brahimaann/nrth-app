import React from 'react';
import './About.css'
import skeezi from'../Visuals/skeeezerrr.png'
import Contact from "./Contact";

function About() {
    return (
        <section id="about">
            <div className="container" style={{ backgroundImage: `url(${skeezi})` }}>
                <h2>What is Project North Division?</h2>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum lectus id tempor gravida. Aliquam at finibus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin quam ex, efficitur at tellus viverra, molestie iaculis augue. Etiam finibus neque sit amet dolor hendrerit, sed eleifend sapien blandit. Ut efficitur ultricies mauris, ut imperdiet leo cursus sit amet. Donec ut urna velit. Ut lacus sapien, tempor et orci vel, aliquam placerat tellus. Mauris quis hendrerit ipsum. Aenean ultricies metus quis lectus tincidunt, ut imperdiet tortor suscipit. Cras interdum justo in suscipit porta.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum lectus id tempor gravida. Aliquam at finibus est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin quam ex, efficitur at tellus viverra, molestie iaculis augue. Etiam finibus neque sit amet dolor hendrerit, sed eleifend sapien blandit. Ut efficitur ultricies mauris, ut imperdiet leo cursus sit amet. Donec ut urna velit. Ut lacus sapien, tempor et orci vel, aliquam placerat tellus. Mauris quis hendrerit ipsum. Aenean ultricies metus quis lectus tincidunt, ut imperdiet tortor suscipit. Cras interdum justo in suscipit porta.</p>

            <Contact/>
            </div>
        </section>
    );
}

export default About;