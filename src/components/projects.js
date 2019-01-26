import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card,CardActions,Button,CardTitle, CardMenu,CardText, IconButton,} from 'react-mdl';

class Project extends Component{

  constructor(props){
   super(props);
   this.state={activeTabs:0};
 }

toggleFunction(){

  if(this.state.activeTabs===0)
  {
    return(
      <div className="project-grid">
      <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover'}}>React-Project 2</CardTitle>
    <CardText>
        <h5> SmartBrain-Face Detection Full Stack Application</h5>
        <p>This application uses Image Recognition Apis where I design the front end using ES6, React and back end using Node jS, Express and used PostgreSQL for the database connectivity.Used knex.js to connect database with backend servers.Used CORS node.js package for providing Express middleware.This application will detect the faces using the Image Recognition Api
while logging in and deployed the application using Heroku.</p>
    </CardText>
    <CardActions border>
    <a href="https://github.com/kunr2014/Face-Recognition-App"  rel="noopener noreferrer" target="_blank">
                        <Button colored>GitHub</Button>
                    </a>

    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
    </Card>

    <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://facebook.github.io/create-react-app/img/logo-og.png) center / cover'}}>React-Project 2</CardTitle>
  <CardText>
      <h5> CarPooling Android App</h5>
      <p>Developed car Pool mobile application using React Native for Android and IOS. Integrated Google map API, Direction API, Place API, Integrated Twillo for SMS Communication.Performed unit testing using Mocha JS. Used Heroku as a cloudplatforms for hosting CI/CD and used Mongo Lab for MongoDB cloud service.</p>
  </CardText>
  <CardActions border>
  <a href="https://github.com/kunr2014/"  rel="noopener noreferrer" target="_blank">
                      <Button colored>GitHub</Button>
                  </a>

  </CardActions>
  <CardMenu style={{color: '#fff'}}>
      <IconButton name="share" />
  </CardMenu>
  </Card>
      </div>

    )
  }

  else if(this.state.activeTabs===1)
  {
    return(
      <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
      <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://vignette.wikia.nocookie.net/logopedia/images/6/6a/Java-logo.jpg/revision/latest?cb=20150321072347) center / cover'}}>Java Project 1</CardTitle>
      <CardText>
        <h5>NewsFeed Application</h5>
        <p>Developed News Feed application for different companies in Google Spreadsheets using Google News APIs, Spring Boot, Lombok and Rest APIs for fetching the news of top companies.Used H2 database engine for fetching and storing companies data into Google spreadsheets
           Technology stack : Java, Spring Boot, Rest APIs, H2 database, Lombok,Google News APIs.
        </p>
      </CardText>
      <CardActions border>
      <a href="https://github.com/kunr2014/"  rel="noopener noreferrer" target="_blank">
                          <Button colored>GitHub</Button>
                      </a>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
    </Card>
    )}


}


  render(){
    return(

      <div className="category-tabs">
    <Tabs activeTabs={this.state.activeTabs} onChange={(tabId)=> this.setState({activeTabs: tabId})} ripple>
        <Tab>React</Tab>
        <Tab>Java</Tab>
    </Tabs>
    <section>
    <Grid>
        <Cell col={12}>
              <div classname="content">{this.toggleFunction()}</div>
              </Cell>
      </Grid>

    </section>


      </div>

    )
  }
}

export default Project;
