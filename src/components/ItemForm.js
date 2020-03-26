import React from "react";

class ItemForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Item Example',
            amont: 100,
            amountType: 0
        };
    }
    changeStatus({stateName, event}){
        let object = {};
        object[stateName] = event.target.value;
        if (stateName === "amountType"){
            object.amountType = parseInt(object.amountType, 2);
        }
        this.setState( object);
    }


    sentItem = (event) => {
        event.preventDefault();
        this.props.addItem(this.state);
    };


    render() {
        return (
            <form onSubmit={this.sentItem}>
                <div>
                    <div className="row mb-3">
                        <div className="col-4">
                            <input 
                                className="form-control text-center form-input"
                                type="text" 
                                placeholder="Item Name" 
                                value={this.state.name}
                                onChange={event => this.changeStatus({stateName: 'name', event})} />
                        </div>
                        <div className="col-4">
                            <input 
                                className="form-control text-center form-input"
                                type="text" 
                                placeholder="Amount" 
                                value={this.state.amount}
                                onChange={event => this.changeStatus({stateName: 'amount', event})} />
                        </div>
                        <div className="col-4">
                            <select className="form-control text-center form-input" value={this.state.amountType} onChange={event => this.changeStatus({stateName: 'amountType', event})}>
                                <option value="0">Expense</option>
                                <option value="1">Income</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-danger btn-block my-">Insert New Item</button>
            </form>
        );
    }

}

export default ItemForm;