# slack-post-action
Simple GitHub Action To Send Slack Message

## Inputs

### `SLACK_WEBHOOK`

**Required** The slack webhook url. Default `""`.

### `MESSAGE`

**Required** The message to send. Default `""`.

## Example usage

uses: devtk0582/slack-post-action@v1.0

with:
  SLACK_WEBHOOK: ${{ secrets.SLACK_WEBHOOK }}
  MESSAGE: "Success"