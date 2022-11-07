import React, { useEffect, useState } from 'react';

const AuthenticMessage = () => {
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
      <h3>인증번호가 요청되었습니다.</h3>
      <h3>
        유효시간 {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h3>
    </div>
  );
};

export default AuthenticMessage;
