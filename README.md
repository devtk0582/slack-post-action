# slack-post-action
Simple GitHub Action To Send Slack Message

## Inputs

### `SLACK_WEBHOOK`

**Required** The slack webhook url. Default `""`.

### `MESSAGE`

**Required** The message to send. Default `""`.

## Example usage

uses: actions/slack-post-action@v1
with:
  SLACK_WEBHOOK: ${{ secrets.SLACK_WEBHOOK }}
  MESSAGE: "Success"