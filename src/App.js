import logo from './logo.svg';
import './App.css';
import {createDate} from './utils/helpers/createDate'
import {createMonth} from "./utils/helpers/createMonth";
import {createYear} from "./utils/helpers/createYear";
import {useEffect} from "react";
import React from "react";
import axios from "axios";
import MyCalendar from "./components/Calendar/MyCalendar";

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
    //console.log(myArray)

    const arrayOfActualDate = [
        {year: 2023, month: 2, day: 1},
        {year: 2023, month: 2, day: 2},
        {year: 2023, month: 2, day: 3},
        {year: 2023, month: 2, day: 4},
        {year: 2023, month: 2, day: 5},
        {year: 2023, month: 2, day: 6},
        {year: 2023, month: 2, day: 7},
        {year: 2023, month: 2, day: 8},
        {year: 2023, month: 2, day: 9},
        {year: 2023, month: 2, day: 10},
        {year: 2023, month: 2, day: 11},
        {year: 2023, month: 2, day: 12},
        {year: 2023, month: 2, day: 13},
        {year: 2023, month: 2, day: 14},
        {year: 2023, month: 2, day: 15},
        {year: 2023, month: 2, day: 16},
        {year: 2023, month: 2, day: 17},
        {year: 2023, month: 2, day: 18},
        {year: 2023, month: 2, day: 19},
        {year: 2023, month: 2, day: 20},
    ]


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



    function removeMatches(arr1, arr2) {
        const result = []

        for (let i = 0; i < arr1.length; i++) {
            let flag = false;
            for (let j = 0; j < arr2.length; j++) {
                if (JSON.stringify(arr1[i]) === JSON.stringify(arr2[j])) {
                    flag = false
                    break
                }
                else {
                    flag = true
                }
            }
            if (flag) {
                result.push(arr1[i])
            }
        }
        return result
    }

    const disabledDays = removeMatches(myArray, arrayOfActualDate)

  return (
    <div className="app__container">
      Calendar
      <MyCalendar disabledDays={disabledDays}/>
    </div>
  );
}

export default App;
