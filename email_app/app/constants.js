import path from 'path';

export const CONSTANTS = {
  LOCAL_AUTH_DATA_KEY: 'local_auth_data_key',
  TAG_TYPE_DNS: 15001,
  TAG_TYPE_INBOX: 15003,
  TAG_TYPE_EMAIL_ARCHIVE: 15004,
  SERVICE_NAME_POSTFIX: '@email',
  SERVICE_METADATA: {name: 'Services container for', description: 'Container where all the services are mapped for the Public ID'},
  ACCOUNT_KEY_EMAIL_INBOX: 'inbox',
  ACCOUNT_KEY_EMAIL_ARCHIVE: 'archive',
  ACCOUNT_KEY_EMAIL_ID: 'email_id',
  ACCOUNT_KEY_EMAIL_ENC_SECRET_KEY: 'email_enc_sk',
  ACCOUNT_KEY_EMAIL_ENC_PUBLIC_KEY: 'email_enc_pk',
  MD_KEY_EMAIL_ENC_PUBLIC_KEY: '__email_enc_pk',
  MD_META_KEY: '_metadata',
  TOTAL_AVAILABLE_SPACE: 1000,
  EMAIL_ID_MAX_LENGTH: 100,
  HOME_TABS: {
    INBOX: 'INBOX',
    SAVED: 'SAVED'
  },
  MAIL_SUBJECT_LIMIT: 50,
  MAIL_CONTENT_LIMIT: 150,
  DATE_FORMAT: 'h:MM-mmm dd',
  NET_STATUS_CONNECTED: 'Connected',
  ASAR_LIB_PATH: path.resolve( __dirname, '../..', 'app.asar.unpacked/node_modules/@maidsafe/safe-node-app/src/native'),
  DEV_LIB_PATH: path.resolve( __dirname, '..', 'node_modules/@maidsafe/safe-node-app/src/native')

};

export const APP_STATUS = {
  AUTHORISING: 'AUTHORISING',
  AUTHORISATION_FAILED: 'AUTHORISATION_FAILED',
  AUTHORISATION_DENIED: 'AUTHORISATION_DENIED',
  AUTHORISED: 'AUTHORISED',
  FETCHING_EMAIL_IDS: 'FETCHING_EMAIL_IDS',
  READING_CONFIG: 'READING_CONFIG',
  READY: 'READY',
  CONNECTED: 'CONNECTED',
  CONNECT_FAILED: 'CONNECT_FAILED',
  CONNECTING: 'CONNECTING'
}

export const ACC_STATUS = {
  CREATING: 'CREATING',
  FAILED: 'FAILED',
  CREATED: 'CREATED',
  AUTHORISING: 'AUTHORISING',
  AUTHORISATION_FAILED: 'AUTHORISATION_FAILED',
  AUTHORISATION_DENIED: 'AUTHORISATION_DENIED'
}

export const SAFE_APP_ERROR_CODES = {
  ERR_SHARE_MDATA_DENIED: -206,
  ERR_AUTH_DENIED: -200,
  ENTRY_ALREADY_EXISTS: -107,
  ERR_NO_SUCH_ENTRY: -106,
  ERR_DATA_EXISTS: -104,
  ERR_DATA_NOT_FOUND: -103,
  ERR_OPERATION_ABORTED: -14
}

export const MESSAGES = {
  INITIALISE: {
    AUTHORISE_APP: 'Authorising Application',
    CHECK_CONFIGURATION: 'Checking configuration',
    FETCH_EMAIL_IDS: 'Fetching owned email Ids'
  },
  EMAIL_ALREADY_TAKEN: 'Email ID already taken. Please try again',
  EMAIL_ID_TOO_LONG: 'Email ID is too long',
  EMAIL_ID_NOT_FOUND: 'Email ID not found on the network',
  AUTHORISATION_ERROR: 'Failed to authorise',
  AUTHORISATION_DENIED: 'The authorisation request was denied',
  CHECK_CONFIGURATION_ERROR: 'Failed to retrieve configuration'
};
