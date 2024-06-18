# acetao-ini-parser

A GitHub Action for parsing `acetao.ini` so other actions can use its content.

## Inputs

### `section`

**Required** The section in `acetao.ini` to parse.

## Outputs

Each key/value pair under `section` will be available as an output.

## Example usage

```yaml
uses: OpenDDS/acetao-ini-parser@v0.1.0
with:
  section: 'ace6tao2'
```
