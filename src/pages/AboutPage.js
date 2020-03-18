import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>

            <p>I am Sarvesh Kulkarni, studying Computer Science from Santa Clara University. I did my undergrad from Mumbai university in Computer Science where I was introduced to concepts of data structures in C programming, micro services, java, SQL</p>
            
            <p>I have experience of working in HTML, CSS, Oracle SQL,Ruby on Rails, AWS, and React as well.</p>

            <p>This site is build in react.</p>

            <p>I'm constantly learning new things and will be adding a lot of projects here.</p>

            </Content>
        </div>
    );

}

export default AboutPage;