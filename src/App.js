import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component{
  state={
    string:"asd",
    isLoading:false,
    problems:null
  }
  componentDidMount(){
    let local = 'http://127.0.0.1:8000/problems'
    axios.get('https://rocky-everglades-25887.herokuapp.com/problems').then(res=>{
    console.log("res",res.data);  
    this.setState({problems:res.data})
    this.setState({isLoading:true})
    }).catch(e=>console.error(e))
  }
  render(){
    if(this.state.isLoading){
      let list = this.state.problems.map(item=>{
      return (<div key={item.id}>id=>{item.id}--{item.title}--{item.description}</div>)
      })
      return(<div>{list}</div>)
    }else{
      return("loading")
    }
  }

} 

export default App;
