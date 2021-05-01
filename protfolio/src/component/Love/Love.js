import React from 'react';
import './Love.css'
import { Card, CardDeck, Container } from 'react-bootstrap';
import creative from '../images/creativity.svg';
import codesign from '../images/programming-code-signs.svg';
import javascripticon from '../images/javascript.svg';

export const Love = () => {
  return (
    <div className="containerstyle">
      <Container>
        <h1 className="text-center options-color">I love</h1>
        <CardDeck className="text-center cardextrastyle">
          <Card className="align-items-center cardimage cardstyle">
            <Card.Img variant="top" src={codesign} />
            <Card.Body>
              <Card.Title className="colour-violet">FrontEnd</Card.Title>
              <Card.Text className="info-text">
                I'm more front end focused and love to work with Reactjs as well as pure HTML, CSS.
      </Card.Text>
            </Card.Body>
          </Card>
          <Card className="align-items-center cardimage cardstyle">
            <Card.Img variant="top" src={javascripticon} />
            <Card.Body>
              <Card.Title className="colour-violet">JavaScript</Card.Title>
              <Card.Text className="info-text">
                I just extremely love javascript, I can’t even express how much I love javascript with just a few lines.
            </Card.Text>
            </Card.Body>
          </Card>
          <Card className="align-items-center cardimage cardstyle">
            <Card.Img variant="top" src={creative} />
            <Card.Body>
              <Card.Title className="colour-violet">Creative Coding</Card.Title>
              <Card.Text className="info-text">
                I love creative coding because I do both coding & designing. making beautiful art with code is very satisfying to me.
      </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    </div >
  )
}
