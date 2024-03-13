import React from "react";

import OneApp from "./one-app";
import SendReceive from "./send-receive";
import KYCStarts from "./kyc-starts";

export default function LandingPage() {
  return (
    <>
      <KYCStarts />
      <OneApp />
      <SendReceive />
    </>
  );
}
