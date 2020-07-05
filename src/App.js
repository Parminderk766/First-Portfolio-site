import React, {Component} from 'react';
import AboutMe from './AboutMe'


class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      name: "Parminder Kumar",
      aboutme: true,
    }

  }

  aboutme = () => {
    this.setState({
      aboutme: !this.state.aboutme,
    })
    
  }

  render() {
    let ab = <span></span>;
    if (this.state.aboutme){
      ab = <AboutMe name={this.state.name}/>
    }
    return (
      <div id = "container">
        <div id="top-buttons">
          <button id = "aboutMe" class ="nav-buttons" onClick = {this.aboutme}> About Me </button>
          {ab}
        </div>
        
      </div>
    )

  }

};

export default HomePage;