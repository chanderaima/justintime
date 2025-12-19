Google Apps Script example

1) Create a Google Sheet and open Extensions → Apps Script, create a new script and paste the code below.
2) Replace SHEET_ID with your Google Sheet ID and save.
3) Deploy: Deploy → New deployment → Select "Web app" and set access to "Anyone, even anonymous". Copy the URL and paste it into `src/config/contact.ts` (replace YOUR_DEPLOY_ID).

Sample code:

```javascript
const SHEET_ID = 'YOUR_SHEET_ID';
function doPost(e) {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName('Sheet1') || ss.getSheets()[0];

    const params = e.postData && e.postData.type === 'application/json'
      ? JSON.parse(e.postData.contents)
      : e.parameter;

    if (params._gotcha) return ContentService.createTextOutput(JSON.stringify({status:'spam'})).setMimeType(ContentService.MimeType.JSON);

    sheet.appendRow([
      new Date(),
      params.name || '',
      params.company || '',
      params.phone || '',
      params.email || '',
      params.serviceType || '',
      params.partnershipLevel || '',
      params.areaLocation || '',
      params.serviceDestination || '',
      params.requirements || ''
    ]);

    return ContentService.createTextOutput(JSON.stringify({status:'ok'})).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({status:'error', message: err.message})).setMimeType(ContentService.MimeType.JSON);
  }
}
```
