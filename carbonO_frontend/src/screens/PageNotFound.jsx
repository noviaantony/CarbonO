import React from 'react';
import { ReactComponent as PageNotFoundSvg } from '../components/pagenotfound/PageNotFound.svg';

const PageNotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <PageNotFoundSvg classname="" width="40rem" />
      </div>
    </>
  );
}

export default PageNotFound;
