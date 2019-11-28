import React, {Component} from 'react';
import nanoid from 'nanoid';
import FormContainer from "../FormContainer/FormContainer";
import ListItem from "../../Components57/ListItem/ListItem";
import './ListContainer.css';


class ListContainer extends Component {
  state = {
    list: [],
    name: '',
    price: 0,
  };

  add = (event) => {
    event.preventDefault();

    const ItemList = [...this.state.list];

    ItemList.push({name: this.state.name, price: this.state.price,});

    this.setState({list: ItemList})
  };
  delete = (index) => {
    const ItemList = [...this.state.list];

    ItemList.splice(index, 1);

    this.setState({list: ItemList})
  };
  addName = (event) => {
    let name = this.state.name;

    name = event.target.value;

    this.setState({name})
  };
  addPrice = (event) => {
    let price = this.state.price;

    price = event.target.value;

    this.setState({price})

  };

  render() {
    const list = this.state.list.map(item => <ListItem
      key={nanoid()}
      name={item.name}
      price={item.price}
      delete={() => this.delete(this.state.list.indexOf(item))}
    />);

    const total = this.state.list.reduce((acc, listItem) => acc + parseInt(listItem.price), 0);

    return (
      <div className='ListContainer'>
        <FormContainer
          add={(event) => this.add(event)}
          addName={(event) => this.addName(event)}
          addPrice={(event) => this.addPrice(event)}
        />
        <div className='list'>
          {list}
        </div>
        <div className='cost'>
          Total cost: {total}
        </div>
      </div>
    );
  }
}

export default ListContainer;