import React from 'react';

const WarningMessage = ({ warn }) => {
  return <div className="warning__message">올바른 {warn}을 입력해주세요.</div>;
};

export default WarningMessage;
