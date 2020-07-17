const core = require('@actions/core');
const github = require('@actions/github');
const request = require('request');

try {
  const slackWebhookUrl = core.getInput('SLACK_WEBHOOK');
  const message = core.getInput('MESSAGE');

  if (!slackWebhookUrl || !message) {
      console.log('Invalid input');
  } else {
    const options = {
        url: slackWebhookUrl,
        json: true,
        body: {
            body: message
        }
    };

    console.log("Posting message: '" + message + "'");
    console.log(JSON.stringify(options));
    
    request.post(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Status: ${res.statusCode}`);
        console.log(body);
    });
  }
} catch (error) {
  core.setFailed(error.message);
}