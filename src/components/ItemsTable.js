import React from "react";

class ItemsTable extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }

    deleteItem = (index) => {
        this.props.deleteItem( index);
    }



    render(){
        const theadRender = () => (
            <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Delete</th>
            </tr>
        );
        const tbodyRender = (array) => {
            const idx_generator = id=> id+1;
            const type_generator = type=> type===0? "Expense": "Income";

            return array.map((item, index) => {    
                return (
                    <tr key={index}>
                        <td>{idx_generator(index)}</td>
                        <td>{item.name}</td>
                        <td>{item.amount}</td>
                        <td>{type_generator(item.amountType)}</td>
                        <td><i className="fa fa-trash" onClick={ () => this.deleteItem(index) }></i> </td>
                    </tr>
                );
            })
        };
        const tfootRender = (array) => {
            const calculateSum = list => {
                if (list.length>0){
                    return list.map( prop=>prop.amount).reduce( (x,y) => parseInt(x,10)+parseInt(y,10));
                }
                return 0;
            };

            const totalIncome = list => calculateSum( list.filter(item => item.amountType === 1) );
            const totalExpense = list => calculateSum( list.filter(item => item.amountType === 0) );
            const balance = (income, expense) => income-expense;


            return (
                <tr>
                    <th></th>
                    <th></th>
                    <th>Total Income: $ {totalIncome(array) }</th>
                    <th>Total Expense: $ {totalExpense(array) }</th>
                    <th className="alert alert-warning js-total">Balance: $ {balance(totalIncome(array), totalExpense(array)) }</th>
                </tr>
            );
        }

        let filterItem;
        if (this.props.display === 0) {
            filterItem = this.props.list;
        } else if (this.props.display === 1) {
            filterItem = this.props.list.filter(item=> item.amountType === 1);
        } else {
            filterItem = this.props.list.filter(item=> item.amountType === 0);
        }
        

        return (
            <table class="table table-striped text-center">
                <thead className="thead-dark">{ theadRender() }</thead>
                <tbody>{ tbodyRender(filterItem) }</tbody>
                <tfoot>{ tfootRender(filterItem) }</tfoot>
            </table>
        );
    }
}

export default ItemsTable;