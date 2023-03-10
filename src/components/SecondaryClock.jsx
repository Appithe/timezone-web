import React from 'react';
import PropTypes from 'prop-types';
import Clock from './Clock';

function SecondaryClock(props) {
  const { zone } = props;

  return (
    <article className="bg-slate-400 rounded-lg flex flex-col p-5 w-60">
      <Clock zone={zone} isPrincipal={false} />
      <h2 className="text-xl font-bold">{zone}</h2>
    </article>
  );
}

export default SecondaryClock;

SecondaryClock.propTypes = {
  zone: PropTypes.string.isRequired,
};
