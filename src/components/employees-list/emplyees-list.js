import EmployeesListItem from "../employees-list-item/employees-list-item";
import './emplyees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp, onChangeSalary }) => {

    const elements = data.map(item => {
        const { id, ...propsItem } = item;
        return (
            <EmployeesListItem
                key={id}
                {...propsItem}
                onDelete={() => onDelete(id)}
                onChangeSalary={onChangeSalary}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))} />
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;