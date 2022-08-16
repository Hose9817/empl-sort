import { Component } from "react";
// import { v4 as uuidv4 } from 'uuid';

import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/emplyees-list";
import EmployeesAddForm from "../emplyees-add-form/emplyees-add-form";

class app extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Jhon Smith', salary: 1000, increase: false, like: true, id: 1 },
                { name: 'Steve Helmet', salary: 3000, increase: true, like: false, id: 2 },
                { name: 'Ali Burak', salary: 1900, increase: false, like: false, id: 3 },
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (idNew) => {
        this.setState(({ data }) => {
            //    const index = data.findIndex(item => item.id === idNew);
            //    const before = data.slice(0, index);
            //    const after = data.slice(index+1);

            return {
                data: data.filter(item => item.id !== idNew)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    // onToggleIncrease = (id) => {
    //     this.setState(({ data }) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return { ...item, increase: !item.increase }
    //             }
    //             return item;
    //         })
    //     }))
    // }

    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if(item.id === id){
    //                 return {...item, rise: !item.rise }
    //             }
    //             return item;
    //         })
    //     }))
    // }

    //Common function for toggle-methods:

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    render() {
        const countOfPerson = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        const { data } = this.state;

        return (
            <div className="app">
                <AppInfo
                    countOfPerson={countOfPerson}
                    increased={increased}
                />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList data={data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm
                    onAdd={this.addItem} />
            </div>
        )
    }
}

export default app;