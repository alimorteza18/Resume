import React, { Component } from "react";
import Fullpage from '../components/Fullpage';
import data from '../data.json'
import { Link,Element} from 'react-scroll'
import Up from '../components/up'
class Sectionthre extends Component {
  render() {

    return (
      <div>
        <Fullpage className="thrid">
          <h1>{data.sections[1].title}</h1>
          <div className="cards-wrapper">
            {
              data.sections[1].items.map(skill => {
                return (
                  <div className="card">
                    <img src={skill.content.image} />
                    <h4>
                      {skill.content.title}
                    </h4>
                  </div>
                )
              })}
          </div>
        </Fullpage>
        <Link to="test2" spy={true} smooth={true} offset={50} duration={500} >
          <Up />
        </Link>
        <Element name="test1"></Element>
      </div>
    )
  }
}

export default Sectionthre;