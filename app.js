// Common functionality for the Forest Monitoring System

// Authentication check
function checkAuth() {
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
        window.location.href = 'index.html';
        return false;
    }
    return true;
}

// Initialize user info in the navbar
function initUserInfo() {
    const userEmail = localStorage.getItem('userEmail');
    const userRole = localStorage.getItem('userRole');
    
    if (userEmail && document.getElementById('user-role')) {
        document.getElementById('user-role').textContent = 
            userRole === 'admin' ? 'Admin' : 'Forest Officer';
    }
}

// Logout functionality
function setupLogout() {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userRole');
            window.location.href = 'index.html';
        });
    }
}

// Load threshold settings
function loadThresholdSettings() {
    return JSON.parse(localStorage.getItem('thresholdSettings')) || {
        tempWarning: 35,
        tempDanger: 40,
        gasWarning: 0.5,
        gasDanger: 0.8,
        noiseWarning: 70,
        noiseDanger: 85
    };
}

// Save threshold settings
function saveThresholdSettings(settings) {
    localStorage.setItem('thresholdSettings', JSON.stringify(settings));
}

// Generate simulated sensor data
function generateSensorData() {
    return {
        temperature: Math.floor(Math.random() * 50),
        gasLevel: Math.random().toFixed(2),
        noise: Math.floor(Math.random() * 100),
        motion: Math.random() > 0.7
    };
}

// Check for anomalies based on thresholds
function checkAnomalies(data, thresholds) {
    const anomalies = [];
    
    if (data.temperature > thresholds.tempDanger) {
        anomalies.push({
            type: 'temperature',
            value: data.temperature,
            threshold: thresholds.tempDanger,
            message: `High temperature detected (${data.temperature}°C)`
        });
    }
    
    if (data.gasLevel > thresholds.gasDanger) {
        anomalies.push({
            type: 'gas',
            value: data.gasLevel,
            threshold: thresholds.gasDanger,
            message: `High gas level detected (${data.gasLevel}ppm)`
        });
    }
    
    if (data.noise > thresholds.noiseDanger) {
        anomalies.push({
            type: 'noise',
            value: data.noise,
            threshold: thresholds.noiseDanger,
            message: `High noise level detected (${data.noise}dB)`
        });
    }
    
    return anomalies;
}

// Initialize common functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initUserInfo();
    setupLogout();
});