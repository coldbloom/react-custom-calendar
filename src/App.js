import logo from './logo.svg';
import './App.css';
import {createDate} from './utils/helpers/createDate'
import {createMonth} from "./utils/helpers/createMonth";
import {createYear} from "./utils/helpers/createYear";

function App() {

    //console.log('createDate', createDate('en-US'))

    //console.log('createMonth', createMonth().createMonthDays())

    //console.log('createDate', createDate('ru-RU', new Date(2023, 1, 6)))

    console.log('createDate', createYear().createYearMonthes())

  return (
    <div className="app__container">
      Calendar
    </div>
  );
}

export default App;
