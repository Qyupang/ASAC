import React, { useEffect, useState } from 'react';

const AuthenticMessage = ({ isValidAuthenNum }) => {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <div className="authenticated-message">
      {!isValidAuthenNum ? (
        <>
          <h3>인증번호가 요청되었습니다.</h3>
          <h3>
            유효시간 {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h3>
        </>
      ) : (
        <h3 style={{ color: '#89C18B' }}>인증되었습니다.</h3>
      )}
    </div>
  );
};

export default AuthenticMessage;
