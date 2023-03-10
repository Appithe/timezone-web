import React from 'react';
import SecondaryClock from './SecondaryClock';

function SecondaryClockList() {
  return (
    <>
      <h2 className="text-slate-50 text-lg my-5">Secondary Clocks</h2>

      <section className="flex flex-wrap flex-col md:flex-row content-center md:justify-center lg:justify-start gap-4 w-full">
        <SecondaryClock zone="Europe/Andorra" />
        <SecondaryClock zone="Asia/Dubai" />
      </section>
    </>
  );
}

export default SecondaryClockList;
