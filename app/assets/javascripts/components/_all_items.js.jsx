// import { Component } from 'react-rails';

var AllItems = React.createClass({

  onUpdate(item) {
    this.props.onUpdate(item);
  },

  render() {
    var items = this.props.items.map((item) => {
      return (
        <div key={item.id}>
          <Item item={item}
                handleUpdate={this.onUpdate}/>
        </div>
      )
    });

    return (
      <div>
        {items}
      </div>
    )
  }
});
