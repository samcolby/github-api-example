import React, { memo, useState } from "react";
import PropTypes from "prop-types";

const SelectUser = ({ onChangeUser }) => {
  const [value, setValue] = useState("");

  const onChange = event => {
    setValue(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onChangeUser(value);
  };

  return (
    <form className="form-group" name="username" onSubmit={handleSubmit}>
      <label>
        Select github user:
        <input
          className="form-control"
          id="select-user"
          name="select-user"
          onChange={onChange}
          placeholder="eg. BlackSwanData"
          type="text"
          value={value}
        />
      </label>
      <input type="submit" value="Change user" />
    </form>
  );
};

SelectUser.propTypes = {
  onChangeUser: PropTypes.func.isRequired
};

export default memo(SelectUser);
