import React from 'react';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
const MyCalendar = ({disabledDays}) => {

    const defaultValue = {
        year: 2023,
        month: 2,
        day: 7,
    };

    const [selectedDay, setSelectedDay] = React.useState(defaultValue);

    const handleDisabledSelect = disabledDay => {
        console.log('Tried selecting a disabled day', disabledDay);
    };

    const myCustomLocale = {
        // months list by order
        months: [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь',
        ],

        // week days by order
        weekDays: [
            {
                name: 'Понедельник',
                short: 'Пн',
            },
            {
                name: 'Вторник',
                short: 'Вт',
            },
            {
                name: 'Среда',
                short: 'Ср',
            },
            {
                name: 'Четверг',
                short: 'Чт',
            },
            {
                name: 'Пятница',
                short: 'Пт',
            },
            {
                name: 'Суббота',
                short: 'Сб',
                isWeekend: true,
            },
            {
                name: 'Воскресенье', // used for accessibility
                short: 'Вс', // displayed at the top of days' rows
                isWeekend: true, // is it a formal weekend or not?
            },
        ],

        // just play around with this number between 0 and 6
        weekStartingIndex: 0,

        // return a { year: number, month: number, day: number } object
        getToday(gregorainTodayObject) {
            return gregorainTodayObject;
        },

        // return a native JavaScript date here
        toNativeDate(date) {
            return new Date(date.year, date.month - 1, date.day);
        },

        // return a number for date's month length
        getMonthLength(date) {
            return new Date(date.year, date.month, 0).getDate();
        },

        // return a transformed digit to your locale
        transformDigit(digit) {
            return digit;
        },

        // texts in the date picker
        nextMonth: 'Next Month',
        previousMonth: 'Previous Month',
        openMonthSelector: 'Open Month Selector',
        openYearSelector: 'Open Year Selector',
        closeMonthSelector: 'Close Month Selector',
        closeYearSelector: 'Close Year Selector',
        defaultPlaceholder: 'Select...',

        // for input range value
        from: 'from',
        to: 'to',


        // used for input value when multi dates are selected
        digitSeparator: ',',

        // if your provide -2 for example, year will be 2 digited
        yearLetterSkip: 0,

        // is your language rtl or ltr?
        isRtl: false,
    }

    const minimumDate = {
        year: 2023,
        month: 1,
        day: 10
    };

    const maximumDate = {
        year: 2023,
        month: 12,
        day: 31
    }

    return (
        <div>
            <Calendar
                value={selectedDay}
                onChange={setSelectedDay}
                disabledDays={disabledDays} // here we pass them
                onDisabledDayError={handleDisabledSelect} // handle error
                shouldHighlightWeekends
                locale={myCustomLocale} // custom locale object
                minimumDate={minimumDate}
                maximumDate={maximumDate}
            />
        </div>
    );
};

export default MyCalendar;