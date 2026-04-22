// Netlify serverless function — proxies Google Calendar API
// API key is stored in Netlify env vars as CALENDAR_API_KEY (never in git)

exports.handler = async function (event) {
  var CALENDAR_ID = 'c_4d80f180f301ddb8c681fedffda3b8d68306fdf77db0388debc7cf456036a260@group.calendar.google.com';
  var API_KEY = process.env.CALENDAR_API_KEY;

  if (!API_KEY) {
    return { statusCode: 500, body: JSON.stringify({ error: 'API key not configured' }) };
  }

  var params = event.queryStringParameters || {};
  var timeMin = params.timeMin;
  var timeMax = params.timeMax;

  if (!timeMin || !timeMax) {
    return { statusCode: 400, body: JSON.stringify({ error: 'timeMin and timeMax are required' }) };
  }

  var calId = encodeURIComponent(CALENDAR_ID);
  var url = 'https://www.googleapis.com/calendar/v3/calendars/' + calId +
            '/events?key=' + API_KEY +
            '&timeMin=' + encodeURIComponent(timeMin) +
            '&timeMax=' + encodeURIComponent(timeMax) +
            '&singleEvents=true&orderBy=startTime';

  try {
    var response = await fetch(url);
    var data = await response.json();
    return {
      statusCode: response.status,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return { statusCode: 502, body: JSON.stringify({ error: 'Failed to fetch calendar data' }) };
  }
};
