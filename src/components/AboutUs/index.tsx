import React from "react";
import FLexLayout from "../FlexLayout";
import { Col, Container, Image, Row } from "react-bootstrap";
import styles from './AboutUs.module.css'


export default function _AboutUSComponent() {

  const cardsData=[
    {text:'Save your Code \n with Audio \n Notes',bgColor:'#82B9E9',imgName:'saveCode.svg'},
    {text:'Make Last \n Minute Revision \n  Easy ',bgColor:'#FDC2CC',imgName:'revision.svg'},
    {text:'Learn new \n concepts with \n other’s notes',bgColor:'#B0E57C',imgName:'othersHelp.svg'},
    {text:'Maintain your \n coding playlist.',bgColor:'#EC7580',imgName:'codingPlayList.svg'},
  ]

  const getCardsComponents=()=>{
      return cardsData.map((card,i)=>{

        return(
            <Col className={styles.cards} style={{backgroundColor:card.bgColor}} >
              <FLexLayout rowORColumn='column' alignItem='center' >
                 <Image src={`/${card.imgName}`} className={styles.cardsImage} ></Image>
                 <div className={styles['cards-text']} > {card.text}  </div>
              </FLexLayout>
            </Col>
        )

      })
  }

  return (
      <div style={{backgroundColor:'#B4D8E7',margin:'5px'}}   >
        
        <Container fluid >
          <Row noGutters={true} >
              {getCardsComponents()}
          </Row>
        </Container>

      </div>
  );
}
