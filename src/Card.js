import { motion } from "framer-motion";
import { Component } from 'react';
import './Card.css';

class Card extends Component {
    constructor(props){
      super(props);
      this.state = {
          title: props.project.title,
          description: props.project.description,
          thumbnail: props.project.thumbnail,
          url: props.project.url,
          githubUrl: props.project.githubUrl
      }
    }
    render(){
        return (
            <motion.div whileHover={{ scale: 1.05 }} className="card">
                 <img src={`assets/${this.state.thumbnail}`} alt={`${this.state.title}`} />
                 <div className="transparent"></div>
                <h1>{this.state.title}</h1>
                <h2>{this.state.description}</h2>      
                <h3>Link to site: <a target={"_blank"} rel="noreferrer" href={`${this.state.url}`}>LINK</a> / Link to gitHub: <a arget={"_blank"} rel="noreferrer" href={`${this.state.githubUrl}`}>LINK</a></h3>         
            </motion.div>
  )}
}

export default Card;