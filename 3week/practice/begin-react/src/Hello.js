import React from 'react';

function Hello({ color, num, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b>}
      안녕하세요 {num}
      {isSpecial && <b>*</b>}
    </div>
  );
}

Hello.defaultProps = {
  num: 1,
};

export default Hello;
