import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/emplyees-list";
import EmployeesAddForm from "../emplyees-add-form/emplyees-add-form";

function app() {

    const data = [
        { name: 'Jhon Smith', salary: 1000, increase: true, id: 1},
        { name: 'Steve Helmet', salary: 3000, increase: true, id: 2},
        { name: 'Ali Muhsin', salary: 1900, increase: false, id: 3},
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList data={data} />
            <EmployeesAddForm />
        </div>
    )
}

export default app;