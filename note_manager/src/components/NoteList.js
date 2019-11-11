import React, { Component } from 'react';
import {noteData} from './firebaseConnect';
import NoteItem from './NoteItem';
class NoteList extends Component {
    constructor(props){
        super(props);
        this.state={
            dataFirebase:[]
        };
      }
    
    UNSAFE_componentWillMount() {
        noteData.on('value', (notes)=>{
            var arrData =[];
            notes.forEach(element =>{
                const key= element.key;
                const noteTitle = element.val().noteTitle;
                const noteContent = element.val().noteContent;
                arrData.push({
                    id:key,
                    noteTitle:noteTitle,
                    noteContent:noteContent
                })
            });
            this.setState({
                dataFirebase: arrData
            });
        })
    }
    
    getData = ()=>{
        if(this.state.dataFirebase){
            return(
                
                this.state.dataFirebase.map((value,key) =>{
                return (
                    <NoteItem
                     key={key}
                     i={key}
                     note = {value}
                     noteTitle={ value.noteTitle}
                     noteContent={ value.noteContent}
                     />
                )
            })
            )
        }   
    }
    
    // getData = () =>{
    //     noteData.on('value',(notes) =>{
    //         var arrData =[];
    //         notes.forEach(element => {
    //             const key= element.key;
    //             const noteTitle= element.val().noteTitle;
    //             const noteContent= element.val().noteContent;
    //             arrData.push({
    //                 key:key,
    //                 noteTitle:noteTitle,
    //                 noteContent:noteContent
    //             })
    //         });
    //         this.setState({
    //             dataFirebase:data
    //         });
    //         console.log(arrData);
    //         console.log(notes.val());
    //     })
    // }    
    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    {
                        this.getData()
                    }
                </div>
            </div>    


        );
    }
}

export default NoteList;