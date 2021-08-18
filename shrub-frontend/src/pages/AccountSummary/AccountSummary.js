import React from 'react';
import { InfoSection } from '../../component';
import { homeObjOne, homeObjTwo } from './Data';

function AccountSummary() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default AccountSummary;