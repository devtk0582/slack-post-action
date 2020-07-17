import { getInput, setFailed } from '@actions/core';
import github from '@actions/github';
import { post } from 'request';

try {
  const slackWebhookUrl = getInput('SLACK_WEBHOOK');
  const message = getInput('MESSAGE');

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
    
    post(options, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(`Status: ${res.statusCode}`);
        console.log(body);
    });
  }
} catch (error) {
  setFailed(error.message);
}