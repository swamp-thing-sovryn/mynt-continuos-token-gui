import React from 'react'
import PropTypes from 'prop-types'
import Anchor from '../Anchor/Anchor'
import { shortenAddress } from 'lib/web3-utils'
import { getEtherscanHref } from 'lib/utils'
import { COLORS } from 'components/utils/constants'

function TransactionBadge({ transactionHash, className }) {
  return (
    <div
      className={className}
      css={`
        display: inline;
        border-radius: 4px;
        padding: 6px 12px;
        font-size: 16px;
        line-height: 1;
      `}
    >
      <Anchor
        href={getEtherscanHref(transactionHash)}
        css={`
          color: ${COLORS.FONT};

          &:hover {
            text-decoration: initial;
            color: ${COLORS.ACCENT};
          }
        `}
      >
        {shortenAddress(transactionHash)}
      </Anchor>
    </div>
  )
}

TransactionBadge.propTypes = {
  transactionHash: PropTypes.string,
}

export default TransactionBadge
