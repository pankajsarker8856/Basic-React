import React, { Component } from 'react';
import './App.css';
import Book from './component/Book';

class App extends Component {
  state = {
    books: [
      { bookName: "1984", writer: "George Orwell" },
      { bookName: "The Da Vinci Code", writer: "Dan Brown" },
      { bookName: "The Alchemist", writer: "Paulo Coelho" }
    ],
    otherProp: "I am some other Prop"
  }

  changeBookState = () => {
    // Wrong: this.state.books[0].bookName = "1974" 
    this.setState({
      books: [
        { bookName: "Nineteen Eighty-Four", writer: "George Orwell" },
        { bookName: "The Da Vinci Code", writer: "Dan Brown" },
        { bookName: "Metmorphosis", writer: "Franz Kafka" }
      ]
    });
  }

  changeWithInputState= (e)=>{
    this.setState({
      books: [
        { bookName: e.target.value, writer: "George Orwell" },
        { bookName: "The Da Vinci Code", writer: "Dan Brown" },
        { bookName: "Metmorphosis", writer: "Franz Kafka" }
      ]
    });
  }

  render() {

    const style={
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white"
    };
    console.log(this.state);
    return (
      <div className="App" style={style}>
        <h1>Book List</h1>
        <button onClick={this.changeBookState}>Change State</button>
        <input type="text" onChange={this.changeWithInputState}/>
        <Book
          bookName={this.state.books[0].bookName}
          writer={this.state.books[0].writer} 
          inputName={this.changeWithInputState} 
        />
        <Book
          bookName={this.state.books[1].bookName}
          writer={this.state.books[1].writer} 
          />
        <Book
          bookName={this.state.books[2].bookName}
          writer={this.state.books[2].writer}
          change={this.changeBookState}
         />
      </div>
    );
  }
}

export default App;
