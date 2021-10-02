import './App.css';
import Articles from './articles/articles.js';
import Navbar from './NavBar/navbar.js';
import Footer from './footer/footer.js';
import Widgets from './widget/widget';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Formulaire from './form/form';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";




function App() {
  return (

    <div className="App">
      <Navbar  fixed="top" />

      <Router>
      <Switch>
        <Route path = "/" />
        <Route path = "/voyages"/>
        <Route path = "/malin"/>
        <Route path = "/hotelResto"/>
      </Switch>
      </Router>

     

      <Image className="imagelogo" src="./image/LeLogo.png" alt="" />


      <Container>

        <Row>
          <Col>
            <Articles
              title2="Titre de l'article"
              corpstexte="Bonjour je m'appelle Jeff et je vais faire un petit Isop Lorem ou peu importe comment ça s'appelle. <br> 
      Isdem diebus Apollinaris Domitiani gener, paulo ante agens palatii Caesaris curam, ad Mesopotamiam missus a socero per 
      militares numeros immodice scrutabatur, an quaedam altiora meditantis iam Galli secreta susceperint scripta, qui conpertis
       Antiochiae gestis per minorem Armeniam lapsus Constantinopolim petit exindeque per protectores retractus artissime tenebatur."/>

            <Articles
              title2="Titre de l'article"
              corpstexte="Bonjour je m'appelle Jeff et je vais faire un petit Isop Lorem ou peu importe comment ça s'appelle. <br> 
        Isdem diebus Apollinaris Domitiani gener, paulo ante agens palatii Caesaris curam, ad Mesopotamiam missus a socero per 
        militares numeros immodice scrutabatur, an quaedam altiora meditantis iam Galli secreta susceperint scripta, qui conpertis
         Antiochiae gestis per minorem Armeniam lapsus Constantinopolim petit exindeque per protectores retractus artissime tenebatur."/>

            <Articles
              title2="Titre de l'article"
              corpstexte="Bonjour je m'appelle Jeff et je vais faire un petit Isop Lorem ou peu importe comment ça s'appelle. <br> 
            Isdem diebus Apollinaris Domitiani gener, paulo ante agens palatii Caesaris curam, ad Mesopotamiam missus a socero per 
            militares numeros immodice scrutabatur, an quaedam altiora meditantis iam Galli secreta susceperint scripta, qui conpertis
             Antiochiae gestis per minorem Armeniam lapsus Constantinopolim petit exindeque per protectores retractus artissime tenebatur."/>

          </Col>

          <Col>
            <Widgets title2="Les trucs sur Internet"
              texte="Facebook"
              texte1="Instagram"
              texte3="Pinterest"
              texte4="Likedin" />
            <Formulaire titre4="Rentre moi tes petites informations." />
          </Col>

        </Row>
      </Container>


      <Footer />
    </div >
  );
}

export default App;
