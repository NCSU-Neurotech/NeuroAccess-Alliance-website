# Setup Guide — Running This Project

This project was exported from Figma and uses **Vite**. Follow the steps for your operating system below.

## 1. Prerequisites

You need **Node.js** installed (version 18 or higher).

- Check if you already have it: open a terminal and run:
  ```bash
  node -v
  ```
- If you get an error or a version below 18, download and install Node.js from https://nodejs.org (choose the "LTS" version).

## 2. Open a Terminal

- **Mac:** open the **Terminal** app (search for it with Spotlight — `Cmd + Space`, then type "Terminal").
- **Windows:** open **PowerShell** or **Command Prompt** (search for it in the Start menu).

## 3. Navigate to the Project Folder

Use the `cd` (change directory) command to move into the unzipped folder.

**Example (Mac, if unzipped to Desktop):**
```bash
cd ~/Desktop/my-site
```

**Example (Windows, if unzipped to Desktop):**
```powershell
cd C:\Users\YourName\Desktop\my-site
```

Tip: instead of typing the path, you can type `cd ` (with a trailing space) and then **drag the folder** from Finder/File Explorer into the terminal window — it will auto-fill the path for you. Then press Enter.

To confirm you're in the right place, run:
```bash
ls        # Mac/Linux
dir       # Windows
```
You should see files like `package.json` and `vite.config.js` (or `.ts`) listed.

## 4. Install Dependencies

Still inside the project folder, run:
```bash
npm install
```
This downloads everything the project needs. It may take a minute or two.

## 5. Start the Project

```bash
npm run dev
```

Terminal will print a local address, usually:
```
http://localhost:5173
```

Copy that into your web browser to see the site running.

## 7. Stopping the Server

When you're done, go back to the terminal and press `Ctrl + C` to stop it.

---

### Troubleshooting

- **"command not found: npm"** → Node.js isn't installed or your terminal needs to be restarted after installing it.
- **Port already in use** → Vite will automatically pick a different port and print the new address — just use that one.
- **Errors during `npm install`** → try deleting the `node_modules` folder and `package-lock.json` file (if present), then run `npm install` again.
