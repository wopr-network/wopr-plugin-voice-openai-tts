# wopr-plugin-voice-openai-tts

OpenAI TTS (text-to-speech) capability provider for WOPR.

## Commands

```bash
npm run build     # tsc
npm run check     # biome check + tsc --noEmit (run before committing)
npm run format    # biome format --write src/
npm test          # vitest run
```

## Key Details

- Implements the `tts` capability provider from `@wopr-network/plugin-types`
- Uses `openai` npm package — `openai.audio.speech.create()`
- Voice selection: alloy, echo, fable, onyx, nova, shimmer (configurable)
- Model: `tts-1` (fast) or `tts-1-hd` (higher quality) — configurable
- API key shared with `wopr-plugin-provider-openai` if installed, but configured independently
- Hosted capability — revenue-generating.

## Plugin Contract

Imports only from `@wopr-network/plugin-types`. Never import from `@wopr-network/wopr` core.

## Issue Tracking

All issues in **Linear** (team: WOPR). Issue descriptions start with `**Repo:** wopr-network/wopr-plugin-voice-openai-tts`.
