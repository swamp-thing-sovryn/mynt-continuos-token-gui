import PropTypes from 'prop-types'
import React from 'react'
import errorPip from './assets/error-pip.svg'
import successPip from './assets/success-pip.svg'
import waitingIcon from './assets/waiting.svg'
import {
  STEP_ERROR, STEP_SUCCESS, STEP_WAITING,
  STEP_WORKING
} from './stepper-statuses'

const STATUS_ICONS = {
  [STEP_WAITING]: waitingIcon,
  [STEP_WORKING]: waitingIcon,
  [STEP_SUCCESS]: waitingIcon,
  [STEP_ERROR]: waitingIcon,
}

const PIP_ICONS = {
  // Not used on this fork
  // [STEP_ERROR]: errorPip,
  // [STEP_SUCCESS]: successPip,
}

function renderPipIfErrorOrSuccess(status) {
  let pipImage = PIP_ICONS[status]

  return (
    <>
      {pipImage && (
        <img
          src={pipImage}
          alt=""
          css={`
            position: absolute;
            bottom: 0;
            right: 0;
          `}
        />
      )}
    </>
  )
}

function StatusIcon({ status }) {
  const icon = STATUS_ICONS[status]

  return (
    <div
      css={`
        position: relative;
      `}
    >
      {renderPipIfErrorOrSuccess(status)}
      <img src={icon} alt="" />
    </div>
  )
}

StatusIcon.propTypes = {
  title: PropTypes.string,
  status: PropTypes.oneOf([
    STEP_WAITING,
    STEP_WORKING,
    STEP_SUCCESS,
    STEP_ERROR,
  ]),
}

export default StatusIcon
