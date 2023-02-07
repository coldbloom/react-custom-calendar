import {createMonth} from "./createMonth";
import {getMonthNumberOfDays} from "./getMonthNumberOfDays";
import {createDate} from "./createDate";

export const createYear = (yearProp, monthNumberProp, locale = 'default') => {
    const monthCount = 12
    const today = createDate()

    const year = (yearProp !== null) ? yearProp : today.year
    const monthNumber = (monthNumberProp !== null) ? monthNumberProp : today.monthNumber

    const month = createMonth(locale, new Date(year, monthNumber - 1))

    console.log(month)

    const getMonthDays = (monthIndex) => {
        createMonth(locale, new Date(year, monthIndex)).createMonthDays()
        //console.log(createMonth(locale, new Date(year, monthIndex)).createMonthDays())
    }

    const createYearMonthes = () => {
        const monthes = []

        for (let i = 0; i <= monthCount - 1; i += 1) {
            monthes[i] = getMonthDays(i)
        }

        return monthes;
    }

    return {
        createYearMonthes,
        month,
        year,
    }
}