import {INFO_STATUS, SUCCESS_STATUS, ERROR_STATUS} from '../constants';

/**
 * Convert status in a understandable status for the Notification component
 * @param {String|Number} status
 * @returns {String} status an understandable status
 */
export function convertStatus(status) {
  const reHttpStatusCode = /^\d{3}$/;
  // convert HTTP status code
  if (reHttpStatusCode.test(status)) {
    switch (true) {
      case /^1/.test(status):
        return INFO_STATUS;
      case /^2/.test(status):
        return SUCCESS_STATUS;
      case /^(4|5)/.test(status):
        return ERROR_STATUS;
    }
  }
  return status;
}