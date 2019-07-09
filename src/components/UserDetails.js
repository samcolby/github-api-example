import React, { memo } from "react";
import PropTypes from "prop-types";

import Orgs from "./Orgs";

const getDisplayName = user => {
  if (user.name) {
    return user.name;
  } else {
    return user.login;
  }
};

const UserDetails = ({ data }) => {
  const { user, orgs } = data;
  const { avatar_url, bio } = user;

  const name = getDisplayName(user);

  return (
    <div>
      <img width="50" height="50" src={avatar_url} alt={name + "'s avatar"} />
      <span>
        <div>{name}</div>
        <div>{bio}</div>
      </span>
      <Orgs user={name} orgs={orgs} />
    </div>
  );
};

UserDetails.propTypes = {
  data: PropTypes.object.isRequired
};

export default memo(UserDetails);
