import React from 'react';
import TodoElement from './TodoElement'

class TodoList extends React.Component {

  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <TodoElement id="TodoElement"
            item={item}
            handleEdit={this.props.handleEdit}
            handleDelete={this.props.handleDelete}

          />
        ))}
      </ul>
    );
  }
  
}

export default TodoList