# ShoreSquad

ShoreSquad is a vibrant, Gen Z-inspired web app to rally your crew, track weather, and join the next beach cleanup! 🌊☀️⛱️

## Features
- Interactive map with next cleanup location
- Real-time 24-hour weather forecast (NEA API)
- Modern, mobile-friendly, accessible design
- Fun, beachy UI with emojis

## Setup Instructions
1. **Clone this repo:**
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
2. **Install Live Server (recommended for local dev):**
   - VS Code: Install the 'Live Server' extension
   - Or use any static server (e.g. `npx serve`)
3. **Run locally:**
   - Open the project folder in VS Code
   - Right-click `index.html` and select 'Open with Live Server'
   - Or run: `npx serve` and open the shown URL

## API Usage
- Uses NEA's 24-hour weather forecast API:
  - Endpoint: `https://api.data.gov.sg/v1/environment/24-hour-weather-forecast`
  - Data: General forecast, temperature (low/high), humidity (low/high)
  - See [NEA Data API Docs](https://data.gov.sg/dataset/weather-forecast)

## Minified Assets
- For best performance, use:
  - `css/styles.min.css`
  - `js/app.min.js`
- Update your `index.html` to reference these for production:
  ```html
  <link rel="stylesheet" href="css/styles.min.css">
  <script src="js/app.min.js"></script>
  ```

## Deploying to GitHub Pages
1. **Push your code to GitHub.**
2. In your repo, go to Settings > Pages.
3. Set source to the `main` branch and root (`/`).
4. Save. Your site will be live at `https://your-username.github.io/your-repo/`

---
Questions? Open an issue or PR!
