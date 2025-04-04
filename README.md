
Built by https://www.blackbox.ai

---

```markdown
# Forest Monitoring System

## Project Overview
The Forest Monitoring System is a web-based application designed to monitor environmental conditions in forest areas. It features a user authentication system for forest officers and administrators, allows real-time data visualization, and provides alerts for anomalies such as high temperature, gas levels, and noise levels.

## Installation
To set up the Forest Monitoring System locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd forest-monitoring-system
   ```

2. **Open the HTML Files**
   You can directly open the `index.html`, `dashboard.html`, or `settings.html` files in your web browser to run the application without any additional setup.

## Usage
- **Login / Sign Up**: Start by creating an account or logging in using the login interface.
- **Dashboard**: Once authenticated, users can access the dashboard to view real-time data on temperature, gas level, noise level, and motion detection.
- **Settings**: Admin users can access profile and threshold settings to configure sensor thresholds.

## Features
- User authentication (Login/Signup)
- Dashboard displaying real-time sensor data and visualizations
- Anomaly detection and alerts for temperature, gas, and noise levels
- Lightweight and responsive UI using Tailwind CSS
- User role management (Admin and Forest Officer)

## Dependencies
The project includes the following external libraries:

- [Tailwind CSS](https://tailwindcss.com) for styling
- [Font Awesome](https://fontawesome.com) for icons
- [Chart.js](https://www.chartjs.org) for data visualization
- Local storage is utilized for authentication and settings management.

## Project Structure
Here's a breakdown of the project structure:

```
forest-monitoring-system/
├── index.html             # Login and Sign Up page
├── dashboard.html         # Main Dashboard page after authentication
├── settings.html          # User settings for profiles and thresholds
├── styles.css             # Custom styles for the application
├── app.js                 # Common JavaScript functionalities
```

### Additional Notes
The project employs local storage for user session management and threshold settings, ensuring a seamless user experience without server-side integration.

Feel free to contribute to the project by reporting issues or submitting feature requests. Happy monitoring!
```