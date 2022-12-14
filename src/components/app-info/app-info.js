import './app-info.css';

const AppInfo = ({countOfPerson, increased}) => {
    return (
     <div className="app-info">
         <h1>Учет сотрудников компании Nautilus</h1>
         <h2>Общее число сотрудников: {countOfPerson}  </h2>
         <h2>Премию получат: {increased}  </h2>
     </div>
    )
}

export default AppInfo;