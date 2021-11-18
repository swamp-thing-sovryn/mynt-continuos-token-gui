import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import {
  STEPPER_IN_PROGRESS,
  STEPPER_SUCCESS,
  STEPPER_ERROR,
} from './stepper-statuses'
import { formatUnits } from 'lib/web3-utils'
import { useTokenDecimals } from 'lib/web3-contracts'
import { getTokenName } from '../utils/constants'

const smallCaps = css`
  font-size: 32px;
`

function StepperTitle({ fromAmount, convertedTotal, status, toBonded }) {
  const antDecimals = useTokenDecimals('COLLATERAL')
  const anjDecimals = useTokenDecimals('BONDED')

  const formattedFromAmount = formatUnits(fromAmount, {
    digits: toBonded ? antDecimals : anjDecimals,
    truncateToDecimalPlace: 8,
    commas: true,
  })

  const formattedTotal = formatUnits(convertedTotal, {
    digits: toBonded ? anjDecimals : antDecimals,
    truncateToDecimalPlace: 8,
    commas: true,
  })

  if (status === STEPPER_IN_PROGRESS || status === STEPPER_ERROR) {
    return (
      <>
        Convert {formattedFromAmount}{' '}
        <span css={smallCaps}>
          {getTokenName(toBonded ? 'COLLATERAL' : 'BONDED')}
        </span>{' '}
        to{' '}
        <span css={smallCaps}>
          {getTokenName(toBonded ? 'BONDED' : 'COLLATERAL')}
        </span>
      </>
    )
  } else if (status === STEPPER_SUCCESS) {
    return (
      <>
        You successfully converted <br />
        {formattedFromAmount}{' '}
        <span css={smallCaps}>
          {getTokenName(toBonded ? 'COLLATERAL' : 'BONDED')}
        </span>{' '}
        to {formattedTotal}{' '}
        <span css={smallCaps}>
          {getTokenName(toBonded ? 'BONDED' : 'COLLATERAL')}
        </span>
      </>
    )
  }
}

StepperTitle.propTypes = {
  fromAmount: PropTypes.object,
  convertedTotal: PropTypes.object,
  toBonded: PropTypes.bool,
  status: PropTypes.oneOf([
    STEPPER_IN_PROGRESS,
    STEPPER_SUCCESS,
    STEPPER_ERROR,
  ]),
}

export default StepperTitle
