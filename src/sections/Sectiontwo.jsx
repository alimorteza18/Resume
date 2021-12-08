import React, { Component } from "react";
import Fullpage from '../components/Fullpage';
import data from '../data.json'
import { Element, } from 'react-scroll'
class Sectiontwo extends Component {
  render() {

    return (
      <div>
        <Element name="test4"></Element>
        <Fullpage className="second">
          <h1>
            {data.sections[0].title}
          </h1>
          <p>
            {data.sections[0].items[0].content}
          </p>

        </Fullpage>
      </div>
    )
  }
}

export default Sectiontwo;