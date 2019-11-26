import React from 'react';
import TodoList from './TodoList' ;

function randomColorNumb(min, max) {
  return Math.random() * (max - min) + min;
};
let items = [];

class TodoApp extends React.Component {
  state = {
    items: [],
    text: '',
    color: '',
  };
  
  handleChange = (e) => {
    const text = e.target.value;
    this.setState({ text: text });
  }

  addItem = () => {
    let c = Math.round(randomColorNumb(1, 5));

    const { items, text, color, checked } = this.state;
    const newItem = {
      key: items.length + 1,
      text,
      color: "Color"+c ,
      checked: false
    };
    if (text.trim()) {
      this.setState({
        items: items.concat(newItem),
        text: '',
        color: newItem.color,
        checked: false
      });
    }
  }

  keyPressed = (event) => {
    if (event.key === "Enter") {
      if (this.state.text.trim()) {
        this.addItem()
      }

    }
  }


  changeColor = (col, ed) => {
      const editedItem = {
        key: ed.key,
        text: ed.text,
        color: col,
        checked: false
      };     
      this.handleEdit(editedItem);
    
    }    
    
   getChoosedItems = (col) => {
  for (let i = 0; i < this.state.items.length; i++) {
    if (this.state.items[i].checked == true) {
      this.changeColor (col, this.state.items[i])

    }
} }
 
  handleEdit = (thisItem) => {
    this.setState({
      items: this.state.items.map((e) => {
        if (e.key == thisItem.key) {
    
          e.text = thisItem.text;
          e.color = thisItem.color;  
          e.checked = thisItem.checked
        }
        return e;
      }),
      text: '',
      color: '',
      checked: false
    });
  }

  handleDelete = (thisItem) => {
    this.setState({
      items: this.state.items.filter((e) => e.key !== thisItem.key),
      text: ''
    });
  }

  render() {
    return (
      <div id="toStart">
        <div>
          <h3 id="task">
            Input your task</h3>
          <input id="inputField" type="text"
            value={this.state.text}
            onChange={this.handleChange}
            onKeyPress={this.keyPressed}
          />
          <button id="btnAdd" onClick={this.addItem}>
            Add
          </button>
        </div>
        <div>
          <button id="btnCol1"
          onClick={() => this.getChoosedItems ("Color1")}  >
          </button>
          <button id="btnCol2"
          onClick={() => this.getChoosedItems ("Color2")} >
          </button>
          <button id="btnCol3"
          onClick={() => this.getChoosedItems ("Color3")} >
          </button>
          <button id="btnCol4"
          onClick={() => this.getChoosedItems ("Color4")} >
          </button>
          <button id="btnCol5"
          onClick={() => this.getChoosedItems ("Color5")} >
          </button>

          <TodoList
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            items={this.state.items}
            chkBoxVal ={this.chkBoxVal}

          />
        </div>
      </div>
    );
  }
  
}

export default TodoApp