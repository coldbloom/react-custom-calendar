import logo from './logo.svg';
import './App.css';
import {createDate} from './utils/helpers/createDate'
import {createMonth} from "./utils/helpers/createMonth";
import {createYear} from "./utils/helpers/createYear";
import {useEffect} from "react";
import React from "react";
import axios from "axios";

function App() {

    //console.log('createDate', createDate('en-US'))

    //console.log('createMonth', createMonth().createMonthDays())

    //console.log('createDate', createDate('ru-RU', new Date(2023, 1, 6)))

    //console.log('createDate', createYear().createYearMonthes())

    const year = createYear().createYearMonthes()

    //console.log(year)

    const myArray = []

    for (let i = 0; i < year.length; i++) {
        //console.log(year[i])
        let mounth = year[i]
        for (let i = 0; i < mounth.length; i++) {
            myArray.push({
                year: mounth[i].year,
                month: mounth[i].monthNumber,
                day: mounth[i].dayNumber,
            })
        }
    }

    console.log(myArray)

    const [posts, setPosts] = React.useState([])

    useEffect(() => {
        axios
            .get('https://mandarina.lv/getdates?countryCode=TR')
            .catch(err =>
                console.log(err))
            .then(response => {
                setPosts(response.data)
            })
    }, [])

    console.log(posts)

  return (
    <div className="app__container">
      Calendar
    </div>
  );
}

export default App;
