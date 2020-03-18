import React from 'react';

import Card from '../components/Card';

import stack from '../assets/images/github.png';
import microsoft from '../assets/images/microsoft.png';
import linkedin from '../assets/images/linkedin.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Github',
                    subTitle: 'Have a look at my projects',
                    imgSrc: stack,
                    link: 'https://github.com/snk95',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Microsoft Azure',
                    subTitle: 'Azure Certification',
                    imgSrc: microsoft,
                    link: 'https://www.microsoft.com/en-us/learning/azure-training.aspx',
                    selected: false
                },
                {
                    id: 2,
                    title: 'My linkedin',
                    subTitle: 'Please share your feedback about my profile',
                    imgSrc: linkedin,
                    link: 'https://www.linkedin.com/in/sarvesh-n-kulkarni',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;