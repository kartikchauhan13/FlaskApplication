
import React,{Component} from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";


export default class App extends Component {
  render(){
  return (
    <div>
      <Navbar/>
      <News/>
    </div>
  );
  }
}