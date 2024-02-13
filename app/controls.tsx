"use client";

import React, { useState, Dispatch, SetStateAction } from "react";
import Select from "react-select";

import { User } from "./types/user";

type Props = {
  onChangeSort: Dispatch<SetStateAction<User[]>>;
};

interface Option {
  readonly label: string;
  readonly value: string;
}

const Controls: React.FunctionComponent<Props> = ({ onChangeSort }) => {
  const fieldOptions: Option[] = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions: Option[] = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  const [sortField, setSortField] = useState(fieldOptions[0]);
  const [sortDirection, setSortDirection] = useState(directionOptions[0]);

  const handleSortField = (option: Option | null) => {
    if (option !== null) {
      onChangeSort((state) => {
        const newState = [...state];
        switch (option.value) {
          case "name":
            newState.sort((a, b) => (a.name > b.name ? 1 : -1));
            break;
          case "email":
            newState.sort((a, b) => (a.email > b.email ? 1 : -1));
            break;
          default:
            newState.sort((a, b) => (a.company.name > b.company.name ? 1 : -1));
            break;
        }

        return sortDirection.value === "descending"
          ? newState.reverse()
          : newState;
      });
      setSortField(option);
    }
  };

  const handleSortDirection = (option: Option | null) => {
    if (option !== null) {
      onChangeSort((state) => {
        const newState = [...state];
        switch (sortField.value) {
          case "name":
            newState.sort((a, b) => (a.name > b.name ? 1 : -1));
            break;
          case "email":
            newState.sort((a, b) => (a.email > b.email ? 1 : -1));
            break;
          default:
            newState.sort((a, b) => (a.company.name > b.company.name ? 1 : -1));
            break;
        }

        return option.value === "descending" ? newState.reverse() : newState;
      });
      setSortDirection(option);
    }
  };

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select
          defaultValue={sortField}
          options={fieldOptions}
          inputId="sort-field"
          className="input"
          onChange={handleSortField}
        />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          defaultValue={sortDirection}
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={handleSortDirection}
        />
      </div>
    </div>
  );
};

export default Controls;
