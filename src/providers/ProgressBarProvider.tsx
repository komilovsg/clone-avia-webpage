// Create a Providers component to wrap your application with all the components requiring 'use client', such as next-nprogress-bar or your different contexts...
"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="3px"
        color="#257eff"
        options={{ showSpinner: false }}
        shallowRouting
        shouldCompareComplexProps
      />
    </>
  );
};

export default ProgressBarProvider;
