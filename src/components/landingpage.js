import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


import nitika from '../nitika.jpg';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={nitika}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Software Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>
          <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/nitika-rajinder-46851729/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://github.com/kunr2014/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          



        </div>


          </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
