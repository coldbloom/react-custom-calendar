import "flatpickr/dist/themes/material_green.css";
import { Russian } from "flatpickr/dist/l10n/ru.js"

import Flatpickr from "react-flatpickr";
import {Component, useState} from "react";

import React from 'react';

const FlatPicker = () => {

    const [date, setDate] = useState(null)
    const onchangeChange = (e) => {
        setDate(e)
        console.log(e)
    }

    return (
        <Flatpickr
            data-enable-time
            value={date}
            onChange={e => onchangeChange(e)}
            locale={Russian}
            allowInpuе={true}
            options={{
                enable: ["2023-02-30", "2023-02-21", "2023-02-08"],
                enableTime: false,
            }}
        />
    );
};

export default FlatPicker;