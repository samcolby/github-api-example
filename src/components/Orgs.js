import React, { memo } from "react";
import PropTypes from "prop-types";

const Orgs = ({ user, orgs }) => {
  const noOfOrgs = orgs.length;
  const orgsDisplay = orgs.join(", ");
  return (
    <>
      <div>
        {user} is a member of {noOfOrgs} organisations
      </div>
      {orgsDisplay && <div>{orgsDisplay}</div>}
    </>
  );
};

Orgs.propTypes = {
  user: PropTypes.string.isRequired,
  orgs: PropTypes.object.isRequired
};

export default memo(Orgs);
