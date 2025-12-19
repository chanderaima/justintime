// Configure the form endpoint (Google Apps Script URL). Replace DEPLOY_URL with your deployed script URL.
const FORM_ENDPOINT = process.env.REACT_APP_FORM_ENDPOINT || 'https://script.google.com/macros/s/DEPLOY_ID/exec';

export default {
  endpoint: FORM_ENDPOINT,
};
