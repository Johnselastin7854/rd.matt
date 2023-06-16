import React, { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Select,
} from "@chakra-ui/react";
import "../styles/_Input.scss";

export const NameInput = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);

  return (
    <div>
      <FormControl className="form__control" isRequired={props.required}>
        <FormLabel
          className="form__control--title"
          fontWeight="500"
          fontSize="1.5rem"
        >
          {props.title}
        </FormLabel>
        <Input
          placeholder={props.placeholder}
          type={props.type}
          value={value}
          outline="0.1px solid #ccc"
          onChange={handleChange}
          padding="2rem"
          fontSize="1.5rem"
          color="#d6ccc2"
        />
      </FormControl>
    </div>
  );
};

///////////////////////////////////////////////////////////////

export const NumbersInput = (props) => {
  return (
    <FormControl className="form__control" isRequired={props.required}>
      <FormLabel
        className="form__control--title"
        fontWeight="500"
        fontSize="1.5rem"
      >
        {props.title}
      </FormLabel>
      <NumberInput>
        <NumberInputField
          placeholder={props.placeholder}
          outline="0.1px solid #ccc"
          padding="2rem"
          fontSize="1.5rem"
          color="#d6ccc2"
        />
      </NumberInput>
    </FormControl>
  );
};

/////////////////////////////////////////////////////////

export const EmailInput = (props) => {
  return (
    <FormControl className="form__control" isRequired={props.required}>
      <FormLabel
        className="form__control--title"
        fontWeight="500"
        fontSize="1.5rem"
      >
        Email
      </FormLabel>
      <Input
        type="email"
        placeholder={props.placeholder}
        outline="0.1px solid #ccc"
        padding="2rem"
        fontSize="1.5rem"
        color="#d6ccc2"
      />
    </FormControl>
  );
};

//////////////////////////////////////////////////

export const SelectInput = (props) => {
  return (
    <FormControl className="form__control" isRequired={props.required}>
      <FormLabel
        className="form__control--title"
        fontWeight="500"
        fontSize="1.5rem"
      >
        {props.title}
      </FormLabel>
      <Select
        className="form__control--select"
        placeholder={props.placeholder}
        outline="0.1px solid #ccc"
        size="5px"
        fontSize="1.5rem"
        color="#3d4d5c"
      >
        <option>United Arab Emirates</option>
        <option>Nigeria</option>
      </Select>
    </FormControl>
  );
};
