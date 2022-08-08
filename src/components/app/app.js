import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/emplyees-list";
import EmployeesAddForm from "../emplyees-add-form/emplyees-add-form";

function app() {
    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList />
            <EmployeesAddForm />
        </div>
    )
}

export default app;