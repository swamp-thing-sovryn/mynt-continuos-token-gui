import React, { useState, useEffect, useCallback } from 'react'
import {
  useOpenOrder,
  useClaimOrder,
  useApprove,
  useAllowance,
  useClaimOrderReceiptAmount,
  useWaitForBatchToFinish,
  useWaitForTx
} from 'lib/web3-contracts'
import { bigNum } from 'lib/utils'
import ConvertSteps from 'components/ConvertSteps/ConvertSteps'

import { useStore } from 'components/utils/store';
import { STEP_CLAIM_BATCH, STEP_CREATE_ORDER, STEP_RAISE_APPROVAL, STEP_RESET_APPROVAL, STEP_WAIT_BATCH } from 'components/utils/constants';

function ManageConversion({ handleReturnHome }) {
  const openOrder = useOpenOrder()
  const claimOrder = useClaimOrder()
  const waitForBatch = useWaitForBatchToFinish()
  const waitForTx = useWaitForTx()
  const claimOrderReceiptAmount = useClaimOrderReceiptAmount()
  const changeAllowance = useApprove()
  const getAllowance = useAllowance()
  const [conversionSteps, setConversionSteps] = useState([])
  const [convertedTotal, setConvertedTotal] = useState(bigNum(-1))
  const [toBonded, amountSource, openOrderHash, setOrderHash, savedSteps] = useStore(state => [
      state.toBonded,
      state.amountSource,
      state.openOrderHash,
      state.setOrderHash,
      state.savedSteps
  ])

  const updateConvertedValue = useCallback(
    async hash => {
      try {
        const amount = await claimOrderReceiptAmount(hash)

        setConvertedTotal(amount)
      } catch (err) {
        throw new Error(err)
      }
    },
    [claimOrderReceiptAmount]
  )

  useEffect(() => {
    let cancelled = false

    // Interacting with the bonding curve involves 2, 3 or 4 transactions (depending on the direction and state of allowance):
    // 1. Reset approval (If we're converting COLLATERAL -> BONDED, an allowance was previously set but abandoned)
    // 2. Raise approval (If we're converting COLLATERAL -> BONDED, the current allowance is not high enough)
    // 3. Open a buy order
    // 4. Claim the order
    const createConvertSteps = async () => {
      let steps = []

      // First we check for allowance if the direction is COLLATERAL -> BONDED
      if (toBonded) {
        const allowance = await getAllowance()

        // and if we need more, add a step to ask for an approval
        const requiresAllowance = allowance.lt(bigNum(amountSource)) && savedSteps.length === 0;
        const savedIsAllowance = savedSteps.length > 0 && (savedSteps[0].name === STEP_RESET_APPROVAL || savedSteps[0].name === STEP_RAISE_APPROVAL);

        if ( requiresAllowance || savedIsAllowance ) {
            steps.unshift([
              'Raise approval',
              {
                onTxCreated: () => changeAllowance(amountSource),
                onResumeWait: (hash) => waitForTx(hash),
                showDesc: true,
                name: STEP_RAISE_APPROVAL
              },
            ])

          // Then there's the case when a user has an allowance set to the market maker contract
          // but wants to convert even more tokens this time. When dealing with this case
          // we want to first prepend a transaction to reset the allowance back to zero
          // (before raising it in the next transaction from above).
          // Note: the second part of the if statement is a workaround. When state is saved and restored 
          //       and the buy order has been created already, the transfer was made and allowance is zero
          //       resulting on this step not to be included and not matching the saved steps.
          //       This is not a nice fix but due to time constraints is better than nothing.
          if (!allowance.isZero() || savedIsAllowance) {
            steps.unshift([
              'Reset approval',
              {
                onTxCreated: () => changeAllowance(0),
                onResumeWait: (hash) => waitForTx(hash),
                showDesc: true,
                name: STEP_RESET_APPROVAL
              },
            ])
          }
        }
      }

      // Next add the open order
      steps.push([
        `Create ${toBonded ? 'buy' : 'sell'} order`,
        {
          onTxCreated: () => {
            console.log('onTxCreated', amountSource, toBonded)
            return openOrder(amountSource, toBonded)
          },

          // We need to store a reference to the hash so we can use it in the following step
          onHashCreated: hash => {
            setOrderHash(hash)
          },
          onWaitForTx: (hash) => waitForTx(hash),
          showDesc: true,
          name: STEP_CREATE_ORDER
        },
      ])

      steps.push([
        'Wait for batch to finish',
        {
          onWaitCondition: (hash) => waitForBatch(openOrderHash ? openOrderHash : hash),
          showDesc: false,
          name: STEP_WAIT_BATCH
        },
      ])
      // And finally the claim order
      steps.push([
        'Claim order',
        {
          onOrderClaim: (hash) => claimOrder(openOrderHash ? openOrderHash : hash, toBonded),
          onResumeWait: (hash) => waitForTx(hash),
          onTxMined: hash => updateConvertedValue(hash),
          showDesc: true,
          disableAbandon: true,
          name: STEP_CLAIM_BATCH
        },
      ])

      // Update state to reflect the correct amount of steps
      // Show loader for a small amount of time to provide a smooth visual experience
      setTimeout(() => {
        if (!cancelled) {
          setConversionSteps(steps)
        }
      }, 900)
    }

    createConvertSteps()

    return () => {
      cancelled = true
    }
  }, [
    changeAllowance,
    claimOrder,
    amountSource,
    getAllowance,
    openOrder,
    toBonded,
    updateConvertedValue,
  ])

  return (
    <>
      {conversionSteps.length > 0 ? (
        <ConvertSteps
          steps={conversionSteps}
          toBonded={toBonded}
          fromAmount={amountSource}
          convertedTotal={convertedTotal}
          onReturnHome={handleReturnHome}
        />
      ) : (
        <div
          css={`
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 100vh;
          `}
        ></div>
      )}
    </>
  )
}

export default ManageConversion
