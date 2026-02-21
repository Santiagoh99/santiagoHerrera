/**
 * Security utilities for sanitizing and validating data
 */

/**
 * Sanitize user input to prevent XSS attacks
 * @param {string} input - The input to sanitize
 * @returns {string} - Sanitized input
 */
export const sanitizeInput = (input) => {
    if (typeof input !== 'string') return '';
    
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
};

/**
 * Validate and sanitize email
 * @param {string} email - The email to validate
 * @returns {boolean} - True if valid email
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate URL is safe (only http, https, mailto)
 * @param {string} url - The URL to validate
 * @returns {boolean} - True if safe URL
 */
export const isValidUrl = (url) => {
    try {
        const urlObj = new URL(url);
        return ['http:', 'https:', 'mailto:'].includes(urlObj.protocol);
    } catch {
        return false;
    }
};

/**
 * Safe external link attributes
 * @returns {object} - Safe rel and target attributes
 */
export const safeExternalLinkAttrs = {
    target: '_blank',
    rel: 'noopener noreferrer'
};

/**
 * Sanitize form data before submission
 * @param {object} formData - The form data to sanitize
 * @returns {object} - Sanitized form data
 */
export const sanitizeFormData = (formData) => {
    const sanitized = {};
    
    for (const [key, value] of Object.entries(formData)) {
        if (typeof value === 'string') {
            sanitized[key] = sanitizeInput(value).trim();
        } else {
            sanitized[key] = value;
        }
    }
    
    return sanitized;
};
