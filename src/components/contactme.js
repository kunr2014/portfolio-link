import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import nitika from '../nitika.jpg';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Nitika Rajinder</h2>
            <img
              src={nitika}
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Actively seeking full time opportunities in Cyber security, security research, software engineering, web/application/software development, Testing, Database management.</p>
          </Cell>

          <Cell col={6}>
              <h2>Contact Me</h2>


              <div className="contact-list">
                  <List>
                    <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                        (361) 228-5678
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                        <i className="fa fa-fax" aria-hidden="true"/>
                        (123) 456-7890
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                        nitikar@gmail.com
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                        <i className="fa fa-skype" aria-hidden="true"/>
                        MySkypeID
                      </ListItemContent>
                    </ListItem>
                  </List>
                </div>
              </Cell>
            </Grid>
          </div>
    )
  }
}
export default Contact;
