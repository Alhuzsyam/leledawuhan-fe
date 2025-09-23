// ====================================
// API ENDPOINTS CONFIGURATION
// ====================================

// Base API URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://43.165.193.249:8089/api';

// ====================================
// AUTHENTICATION ENDPOINTS
// ====================================
export const AUTH_LOGIN = `${API_BASE_URL}/auth/login`;
export const AUTH_REGISTER = `${API_BASE_URL}/auth/register`;

// ====================================
// POOL MANAGEMENT ENDPOINTS
// ====================================
export const POOL_API_BASE = `${API_BASE_URL}/kolam`;
export const POOL_SELECT_ALL = `${POOL_API_BASE}/select/all`;
export const POOL_ADD = `${POOL_API_BASE}/add`;
export const POOL_UPDATE_STATUS = `${POOL_API_BASE}/updatestatus`;

// ====================================
// SCHEDULE/FEEDER ENDPOINTS
// ====================================
export const SCHEDULE_API_BASE = `${API_BASE_URL}/schedule`;
export const SCHEDULE_SAVE = `${SCHEDULE_API_BASE}/save`;

// ====================================
// SENSOR MONITORING ENDPOINTS
// ====================================
export const SENSOR_API_BASE = `${API_BASE_URL}/monitoring/sensors`;
export const SENSOR_LATEST = `${SENSOR_API_BASE}/latest`;

// ====================================
// CONTROL SYSTEM ENDPOINTS
// ====================================
export const CONTROL_API_BASE = `${API_BASE_URL}/control`;
export const RELAY_API_BASE = `${CONTROL_API_BASE}/relay`;
export const MICRO_CONTROLLER_API_BASE = `${CONTROL_API_BASE}/micro`;

// Specific Control Endpoints
export const RELAY_ALL = `${RELAY_API_BASE}/all`;
export const RELAY_SAVE = `${CONTROL_API_BASE}/save`;
export const RELAY_UPDATE = `${CONTROL_API_BASE}/updateValByCode`;
export const MICRO_GET_BY_CODE = `${MICRO_CONTROLLER_API_BASE}/getByCode`;
export const MICRO_SENSORS = `${MICRO_CONTROLLER_API_BASE}/sensors`;

// ====================================
// UTILITY FUNCTIONS
// ====================================

// Helper function to build URLs with query parameters
export const buildUrl = (baseUrl, params = {}) => {
  const url = new URL(baseUrl);
  Object.keys(params).forEach(key => {
    if (params[key] !== null && params[key] !== undefined) {
      url.searchParams.append(key, params[key]);
    }
  });
  return url.toString();
};

// Helper function for making authenticated requests
export const createAuthHeaders = (token) => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
});

// API Configuration
export const API_CONFIG = {
  timeout: parseInt(import.meta.env.VITE_API_TIMEOUT) || 10000,
  requestTimeout: parseInt(import.meta.env.VITE_REQUEST_TIMEOUT) || 30000,
  enableLogging: import.meta.env.VITE_ENABLE_LOGGING === 'true',
  debugMode: import.meta.env.VITE_DEBUG_MODE === 'true',
};

// Log API calls if enabled
export const logApiCall = (method, url, data = null) => {
  if (API_CONFIG.enableLogging) {
    console.log(` API ${method.toUpperCase()}:`, url);
    if (data && API_CONFIG.debugMode) {
      console.log('Request data:', data);
    }
  }
};
