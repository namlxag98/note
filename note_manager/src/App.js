
import './App.css';
import Nav from './components/Nav';
import React, { Component } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import { noteData } from './components/firebaseConnect';
import {connect} from 'react-redux';
class App extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  // addData = (item) =>{
  //   noteData.push(item);
  //   // alert("Them du lieu" +JSON.stringify(item) + "thanh cong")
  // }
  showForm = () =>{
    if(this.props.isEdit){
      return <NoteForm/>
    }
  }
  render() {
    // console.log(noteData);
    
    return (
      <div>
        <Nav/>
        <div className="container">
          <div className="row">
           <NoteList/> 
           {
             this.showForm()
           }
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
      isEdit: state.isEdit
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({
        type: "CHANGE_EDIT_STATUS"
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)