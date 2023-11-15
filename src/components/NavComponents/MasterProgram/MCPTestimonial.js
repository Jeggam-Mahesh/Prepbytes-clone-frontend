import React from 'react'
import "./testimonial.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Shivam from "./masterAssets/Shivam+Gupta.svg"
import Nikhil from "./masterAssets/Nikhil.svg"
import Abhishek from "./masterAssets/Abhishek+Kumar.svg"
import Shivani from "./masterAssets/shivani+Ravi.svg"
import MCPTestiCard from './MCPTestiCard';

const MCPTestimonial = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='CoursePageTestimonials'>
            <h5>This Might Be You!</h5>
            <div className="CoursePageTestimonials__carousel-container">
                <Carousel responsive={responsive} infinite>
                    <MCPTestiCard name="Shivam Gupta" profile={Shivam} text="My coding experience has improved very much. After joining the program, I am able to write optimized code.  The mentors are very helpful. They are always concerned about the students and they explain really well. The lectures are also very simple to understand and gives a clear idea." />
                    <MCPTestiCard name="Shivani Rani" profile={Shivani} text="PrepBytes have helped me improve my analytical skills & helped me in all the ways possible. My understanding of questions and logic has also increased. The best thing about PrepBytes are the lectures, it is so simple and everything is explained with examples. " />
                    <MCPTestiCard name="Abhishek Kumar" profile={Abhishek} text="Lectures are up to the mark, concepts are crystal clear by the mentors. And the best part about the course is weekly assignments were provided to us which were not just good but ensuring that we were understanding the concepts but also improved our coding skills considerably." />
                    <MCPTestiCard name="Nikhil" profile={Nikhil} text="I got a mentor who was very knowledgeable & guided me throughout my placement journey. She explained everything very precisely and clearly & helped me with my doubts and coding problems. PrepBytes helped me a lot in gaining confidence. I thank PrepBytes for their effort." />
                </Carousel>
            </div>
        </div>
    )
}

export default MCPTestimonial
