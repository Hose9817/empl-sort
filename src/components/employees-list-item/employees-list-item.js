import './emloyees-list-item.css';

const EmployeesListItem = ({name, salary, increase}) => {
    let liClassName = "list-group-item d-flex justify-content-between";
    if(increase){
        liClassName += ' increase';
        console.log(liClassName);
    }
    return (
        <li className={liClassName}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + ' EUR'} />
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                    className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;