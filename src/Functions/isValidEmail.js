export function isValidEmail(email) {
    // Regular expression pattern for a basic email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}