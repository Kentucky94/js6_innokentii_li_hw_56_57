import React, {Component, Fragment} from 'react';
import nanoid from 'nanoid';

import Cell from "../../Components56/Cell/Cell";
import Counter from "../../Components56/Counter/Counter";
import ResetButton from "../../Components56/ResetButton/ResetButton";

import './CellContainer.css';

const CellsList = [];

for(let i = 0; i < 36; i++){
  const item = {content: '', hidden: true, isPushed: false};

  CellsList.push(item);
}

CellsList[Math.floor(Math.random() * 36)].content = 'O';

class CellContainer extends Component {
  state = {
    cells: [...CellsList],
    count: 0,
    isOver: false,
  };

  reset = () => {
    let cells = [...this.state.cells];

    const NewCellsList = [];

    for(let i = 0; i < 36; i++){
      const item = {content: '', hidden: true,};

      NewCellsList.push(item);
    }
    NewCellsList[Math.floor(Math.random() * 36)].content = 'O';

    cells = NewCellsList;

    this.setState({cells, count: 0, isOver: false,})
  };

  openCell = index => {
    const cells = [...this.state.cells];

    const cell = {...this.state.cells[index]};

    let count = this.state.count;

    let isOver = this.state.isOver;

    cell.hidden = false;

    cells[index] = cell;

    if(!cell.isPushed){
      count++;
      cell.isPushed = true;
    }

    if(cell.content){
      isOver = true;
    }

    this.setState({cells, count, isOver})
  };

  render() {
    const cells = this.state.cells.map(cell => {
      const index = this.state.cells.indexOf(cell);

      let cellClass;

      if(cell.hidden){
        cellClass = 'cell_block hidden'
      }else{
        cellClass = 'cell_block';
      }

      return <Cell
        key={nanoid()}
        content={cell.content}
        class={cellClass}
        open={() => this.openCell(index)}
      />
    });

    if(this.state.isOver){
      alert('You win!!!');
      this.reset();
    }

    return (
      <Fragment>
        <div className='CellContainer'>
          {cells}
        </div>
        <Counter count={this.state.count}/>
        <ResetButton reset={this.reset}/>
      </Fragment>
    );
  }
}

export default CellContainer;