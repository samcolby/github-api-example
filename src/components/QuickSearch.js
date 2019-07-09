import React, { memo, useState } from "react";
import PropTypes from "prop-types";

const QuickSearch = ({ onChangeText }) => {
  const [value, setValue] = useState("");

  const onChange = event => {
    setValue(event.currentTarget.value);
    onChangeText(value);
  };

  return (
    <form className="form-group" name="quick-search">
      <label>
        Quick search:
        <input
          className="form-control"
          id="quick-search"
          name="quick-search"
          onChange={onChange}
          placeholder="Search entire table"
          type="text"
          value={value}
        />
      </label>
    </form>
  );
};

QuickSearch.propTypes = {
  onChangeText: PropTypes.func.isRequired
};

export default memo(QuickSearch);
