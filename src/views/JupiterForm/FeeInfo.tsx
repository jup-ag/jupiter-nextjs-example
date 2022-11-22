import React, { FunctionComponent, useEffect, useMemo, useState } from "react";

import { RouteInfo, TransactionFeeInfo } from "@jup-ag/react-hook";

const FeeInfo: FunctionComponent<{ route: RouteInfo }> = ({
  route,
}: {
  route: RouteInfo;
}) => {
  const fees = useMemo<TransactionFeeInfo | undefined>(() => {
    return route.fees;
  }, [route]);

  return (
    <div>
      {fees && (
        <div>
          <br />
          Deposit For serum: {/* In lamports */}
          {fees.openOrdersDeposits.reduce((total, i) => total + i, 0) /
            10 ** 9}{" "}
          SOL
          <br />
          Deposit For ATA: {/* In lamports */}
          {fees.ataDeposits.reduce((total, deposit) => total + deposit, 0) /
            10 ** 9}{" "}
          SOL
          <br />
          Fee: {/* In lamports */}
          {fees.signatureFee / 10 ** 9} SOL
          <br />
        </div>
      )}
    </div>
  );
};

export default FeeInfo;
