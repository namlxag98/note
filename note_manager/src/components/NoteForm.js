import React, { Component } from 'react';
import {connect} from 'react-redux';
class NoteForm extends Component {
    constructor(props){
        super(props);
        this.state={
            noteTitle:'',
            noteContent: '',
            id: ''
        }
    }
    
    UNSAFE_componentWillMount() {
        if(this.props.editItem){
            this.setState({
                noteTitle: this.props.editItem.noteTitle,
                noteContent: this.props.editItem.noteContent,
                id: this.props.editItem.id
            });
        }
    }
    
    isChange= (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }

    addData = (title,content) => {
        var item ={};
        item.noteTitle =title;
        item.noteContent=content;
        //gui item len tren app
        console.log(item);
        this.props.addDataStore(item);
        //Su dung reducer trong store
        //dispatch ADD_Data
        
        
    }
    render() {
        console.log(this.props.editItem);
        
        return (
            <div className="col-4">
            <h3>Sửa nội dung tiêu đề</h3>
            <form>
            <div className="form-group">
                <label htmlFor="noteTitle">Tiêu đề note</label>
                <input defaultValue={this.props.editItem.noteTitle} onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Tiêu đề note" />
                <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
            </div>
            <div className="form-group">
                <label htmlFor="noteContent">Sửa nội dung note</label>
                <textarea defaultValue={this.props.editItem.noteContent} onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNoteContent" placeholder="Nội dung note" />
                <small id="helpIdNoteContent" className="form-text text-muted">Điền nội dung vào đây</small>
            </div>
            <button type="reset" onClick={()=> this.addData(this.state.noteTitle,this.state.noteContent)} className="btn btn-primary btn-block">Lưu</button>   
            </form>
            </div>

        );
    }
}
const mapStateToProps = (state, addData) => {
    return {
        // test: state.testConnect
        //State co bao nhieu xai bay nhieu
        editItem: state.editItem
    }
}
//nhan duoc this.props.editItem
const mapDispatchToProps = (dispatch, addData) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"ADD_DATA",getItem})
        }
    }
}
//ham duoc goi ve voi dang props
//nhan duoc this.props.addDataStore()

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);