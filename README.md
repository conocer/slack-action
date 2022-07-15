# Slack Action

>A GitHub action to send a Slack message using a Slack bot token.

## Set up

See https://api.slack.com/bot-users for information on setting up and installing a Slack Bot.

## Inputs

- `token`: The Slack bot user access token
- `payload`: The payload should contain channel and other arguments see https://api.slack.com/methods/chat.postMessage

## Example Usage

```yaml
      - name: Notify slack
        uses: conocer/slack-action@main
        with:
          token: ${{ secrets.SLACK_BOT_TOKEN }}
          payload: '{\"channel\":\"C123456789\", \"text\":\"Message\" }'
```
