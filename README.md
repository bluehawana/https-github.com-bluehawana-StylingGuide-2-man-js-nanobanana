<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1GGLjU-6sHoBX_yJbOOG72DfxuJt0LovE

## Run Locally

Prerequisites: Node.js

1. Install dependencies: `npm install`
2. Create `.env` from the example and set your key:
   - Copy `.env.example` to `.env`
   - Set `GEMINI_API_KEY=YOUR_GEMINI_API_KEY`
   - `.env` is git-ignored; never commit real keys
3. Start the API server and web app together: `npm run dev:all`
   - API runs at `http://localhost:8787`
   - Web runs at `http://localhost:5173` (Vite proxies `/api` to the server)

The browser never receives your API key. The frontend calls the local API server (`/api/style-image`), which uses the key from `.env` on the server side.

## Security Notes

- Never commit `.env` or real keys. `.env` is now ignored and `.env.example` contains placeholders only.
- If a key was ever committed, rotate it immediately in Google AI Studio / Google Cloud, then remove it from git history (see below).

### Rotating and purging a leaked key

1. Rotate/revoke the leaked key in Google:
   - Google AI Studio: Create a new API key and delete the old one
   - Or Google Cloud Console > APIs & Services > Credentials > Regenerate/Delete
2. Purge from git history (one option):
   - Use the included script (rewrites history):
     - `scripts/purge-secrets.sh --yes`
     - Re-add your remote and force-push all branches and tags:
       - `git remote add origin https://github.com/bluehawana/https-github.com-bluehawana-StylingGuide-2-man-js-nanobanana.git`
       - `git push --force --all origin`
       - `git push --force --tags origin`
3. Recreate `.env` locally with the new key. Do not commit it.
