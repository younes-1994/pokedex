import React from "react";
import Input from "../../components/input/Input.component";

const Search = ({ onSearch }) => {
  const onChangeText = (value) => {
    //TODO:IMPLEMENT DEBOUNCE LATER
    onSearch(value);
  };

  return <Input onChangeText={onChangeText} placeholder="جستجو" />;
};

export default Search;
