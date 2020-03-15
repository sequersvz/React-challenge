import React, { useEffect, useState } from "react"
import { Select } from "antd";
import axios from "axios"

const { Option } = Select;

const API = () => {
    return axios.get("https://restcountries.eu/rest/v2/all", {});
}

export const SelectCountry = () => {
    const [response, setResponse] = useState(null)
    useEffect(() => {
        API().then(v => {
            setResponse(v.data)
        })
    }, [])

    return response ? (
    <Select
        showSearch
        style={{ width: "100%" }}
        placeholder="Select a person"
        optionFilterProp="children"
        filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
    >
    {response.map(country => (
            <Option key={country.name} value={country.alpha2Code}>{country.name}</Option>
    ))}
    </Select>
    ) : null
}
