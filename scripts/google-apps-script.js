/*
Sample Google Apps Script to receive form POSTs and append to a Google Sheet.

Setup steps:
1. Create a Google Sheet and note its ID (from the URL).
2. In Google Sheets: Extensions -> Apps Script -> create a new script and paste this code.
3. Replace SHEET_ID with your sheet's ID and SHEET_NAME with the desired sheet tab name.
4. Deploy -> New deployment -> select 'Web app' and set 'Who has access' to 'Anyone'.
   Save the deployment and copy the Web App URL (it will look like https://script.google.com/macros/s/DEPLOY_ID/exec).
5. Put the Web App URL into `src/config/contact.ts` as CONTACT_SCRIPT_URL and commit.

Notes: Set 'Anyone, even anonymous' to allow non-Google users to post. Ensure you secure the sheet otherwise.
*/

const SHEET_ID = 'YOUR_SHEET_ID_HERE';
const SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

    // If form sends application/json, parse it; else use e.parameter
    let params = {};
    if (e.postData && e.postData.type === 'application/json') {
      params = JSON.parse(e.postData.contents);
    } else {
      params = e.parameter;
    }

    // Basic honeypot field check
    if (params.company_url && params.company_url.length > 0) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'spam' })).setMimeType(ContentService.MimeType.JSON);
    }

    sheet.appendRow([new Date(), params.name || '', params.email || '', params.phone || '', params.company || '', params.message || '']);

    return ContentService.createTextOutput(JSON.stringify({ status: 'ok' })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.message })).setMimeType(ContentService.MimeType.JSON);
  }
}
