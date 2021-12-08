import React, { Component } from "react";
import Fullpage from '../components/Fullpage';
import { SocialIcon } from 'react-social-icons';
import { Link, Element,} from 'react-scroll'
import data from '../data.json'
import Snowfall from 'react-snowfall'
import Down from "../components/down";
import Navbar from "../components/navbar";
class Sectionone extends Component {
  render() {

    return (
      <div>
        <Snowfall/>
        <Navbar/>
        <Element name="test2"></Element>
        <Fullpage className="first">
          <h1 className="title">
            {data.title}
          </h1>
          <div>
            <h2>
              {data.subtitle}
            </h2>
            {
              Object.keys(data.links).map(
                key => {
                  return (
                    <SocialIcon style={{ marginRight: "16px" }} url={data.links[key]} />
                  )
                })}
          </div>
        </Fullpage>
        <Link to="test1" spy={true} smooth={true} offset={50} duration={500} >
              <Down/>
        </Link>
      </div>
    )
  }
}

export default Sectionone;