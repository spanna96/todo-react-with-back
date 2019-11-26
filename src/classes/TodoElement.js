import React from 'react';


class TodoElement extends React.Component {
    state = {
      isChange: false ,
    };
  
    changeEdit = () => {
      this.setState({
        isChange: !this.state.isChange,
      })
    }
    changeText = (item, value) => {
      const text = value;
      const { key, color } = item
      this.setState({
        text,
        key,
        color
      })
  
    }

    changeChkBox = (e) => {
      const { item: 
        {checked, key, text, color} } = this.props;
      this.props.handleEdit({
        key,
        text,
        color,
        checked: !checked,
      })
    }
  
    changeItem = () => {
      const editedItem = {
        key: this.state.key,
        text: this.state.text,
        color: this.state.color,
        checked: this.state.checked
      };
      this.setState({ text: null })
      this.props.handleEdit(editedItem);
      //берем из проПсов эту функц со значением текущего элемента
    }
  
    notToChangeItem = () => {
      const lastItem = {
        key: this.state.key,
        text: this.props.item.text,
        color: this.state.color,
        checked: this.state.checked
      };
      this.props.handleEdit(lastItem);
      this.setState({ text: this.props.item.text })
    }
  
    keyPressed = (event) => {
      if (event.key === "Enter") {
        if (this.state.text.trim()) {
          this.changeItem()
        } else {
          this.notToChangeItem()
        }
        this.changeEdit()
      }
    }

    render() {
      const { item, checked } = this.props;
      
      return (
        <li key={item.key}
        className= {item.color}>
          {this.state.isChange ?
            <div id="editSubmit">
              <input id="editField"
                name= {item.key}
                type="text"
                defaultValue={this.state.text}
                value={this.state.text ? this.state.text : item.text}
                onChange={(e)=>
                  this.changeText(item, e.target.value)}
                onKeyPress={this.keyPressed}
              >
              </input>
            </div>
            :
            <div id={"item"}>
              <input id={"chkBox"}
              type="checkbox"
              onClick = {(e)=> this.changeChkBox(e)}
              checked={item.checked}
              className = {"gridEl"}
              
              >
               </input>
              <div id= {"writtenTask"}
              className = {"gridEl"}>
                {item.text}
              </div>
              <button id={"edtBtn"}
              className = {"gridEl"}
                onClick={this.changeEdit}>
                ✎
            </button>
              <button id={"delBtn"}
              className = {"gridEl"}
                onClick={() => this.props.handleDelete(item)}>
                ✘
            </button>
            </div>
          }
  
        </li>
      )
    }
  }

  export default TodoElement