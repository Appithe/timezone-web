import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Clock(props) {
  const { zone, isPrincipal } = props;

  const [currentHour, setCurrentHour] = useState(new Date());

  setInterval(() => {
    setCurrentHour(new Date());
  }, 1000);

  const convertirHoraZonaHoraria = (hour, timezone) => {
    const horaZonaHoraria = new Date(hour.toLocaleString('en-US', { timeZone: timezone }));
    return horaZonaHoraria.toLocaleString('en-US', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, timeStyle: 'short' });
  };

  return (
    isPrincipal ? (
      <h1 className="text-8xl text-slate-50">
        {currentHour.toLocaleString('en-US', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, timeStyle: 'short' })}
      </h1>
    ) : (
      <h1 className="text-3xl text-slate-50">
        {convertirHoraZonaHoraria(currentHour, zone)}
      </h1>
    )
  );
}

export default Clock;

Clock.defaultProps = {
  isPrincipal: false,
};

Clock.propTypes = {
  zone: PropTypes.string.isRequired,
  isPrincipal: PropTypes.bool,
};
