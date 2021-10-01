import React from "react";
import Input from "../../components/input/Input.component";

const Search = ({ status, onSearch }) => {
  const onChangeText = (value) => {
    //TODO:IMPLEMENT DEBOUNCE LATER
    onSearch(value?.toLowerCase?.());
  };

  return status && <Input onChangeText={onChangeText} placeholder="search" />;
};

export default Search;
