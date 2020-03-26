import React from 'react';
import ItemForm from './components/ItemForm';
import ItemsTable from './components/ItemsTable';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      display: 0
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
  }

  addItem(newItem){

    let array = [...this.state.list];
    array.push( newItem);
    this.setState({
      list: array
    });

  }

  deleteItem( Idx) {
    let array = [ ...this.state.list];
    array.splice(Idx, 1);  // replace with null
    this.setState({
      list: array
    });
  }

  changeDisplay(event) {
    let displayOption = event.target.value;
    this.setState({
      display: parseInt(displayOption, 10) 
    });
}


  render() {
    return (
      <div class="p-2">
        <h1 className="text-center mb-5">Money in my Pocket <i className="fas fa-money-check-alt"></i></h1>
        <div className="row">
          <div className="container">
            <ItemForm addItem={this.addItem} />
          </div>
        </div>
        <hr />
        <div className="row mt-5">

          <div className="container">
            <div className="offset-8 col-4 mb-3">
              <select className="form-control text-center form-input" value={this.state.display} onChange={event => this.changeDisplay(event)}>
                <option value="0">Show All</option>
                <option value="1">Only Income</option>
                <option value="2">Only Expense</option>
              </select>
            </div>
            <ItemsTable list={this.state.list} deleteItem={this.deleteItem} display={this.state.display} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
