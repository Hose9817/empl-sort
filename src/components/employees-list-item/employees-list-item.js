import { Component } from 'react';

import './emloyees-list-item.css';

class EmployeesListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            salary: this.props.salary
        }
    }

    onChangeSalary = (e) => {

        const { onChangeSalary, name } = this.props;

        this.setState(({ salary }) => ({
            salary: e.target.value
        }));

        onChangeSalary(name, e.target.value)
    }


    render() {

        const { name, salary, onDelete, onToggleProp, rise, increase } = this.props;

        let classNames = "list-group-item d-flex justify-content-between";

        if (rise) {
            classNames += ' like';
        }

        if (increase) {
            classNames += ' increase';
            // console.log(liClassName);
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label" 
                onClick={onToggleProp} 
                data-toggle="rise"
                style={{fontSize: '30px', color: 'red'}}>{name}
                </span>
                <input
                    type="text"
                    className="list-group-item-input"
                    defaultValue={salary + ' EUR'}
                    onChange={this.onChangeSalary} />
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                        className="btn-cookie btn-sm"
                        data-toggle="increase"
                        onClick={onToggleProp}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }

}

export default EmployeesListItem;