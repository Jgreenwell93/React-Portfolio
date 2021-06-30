import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
    return (
      <div>
        <Container style={{color:"white" }}>
          <Row>
            <Col size="md-12">
              <h1>Joseph Greenwell</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p>
              As a Full Stack Developer coming from a background in the hospitality industry i 
              come equipped with excellent collaboration and other soft skills. I hold a certificate in Full Stack Web development
               from The University of Texas/Trinity Education Full Stack Coding Bootcamp. 
               I am well versed in full frontend and backend MERN full stack program development and excel at writing clean code.
              </p>
              <p>
              I am highly self motivated, extremely goal oriented, and am always attempting to expand upon my skill set and expertise through practice
               and exposure to new ideas and techniques, as well as refining and perfecting ones I already have.
              </p>
              
            </Col>
          </Row>
        </Container>
        <Hero backgroundImage="/images/Selfimage.jpg">
        </Hero>
      </div>
    );
  }
  
  export default Home;
  