const fs = require('fs');

class CommonUtils {

    /**
     * Reads a JSON file and parses it.
     * 
     * @param {string} filePath - The path to the JSON file.
     * @returns {Object} - The parsed JSON data.
     */
    static readJSONFile(filePath) {
        try {
            const data = fs.readFileSync(filePath, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            console.error(`Error reading or parsing the JSON file at ${filePath}:`, error);
            throw error;
        }
    }

    /**
     * Generates a random integer between min (inclusive) and max (exclusive).
     * 
     * @param {number} min - The minimum value (inclusive).
     * @param {number} max - The maximum value (exclusive).
     * @returns {number} - A random integer between min and max.
     */
    static generateRandomNumber(max) {
        if (max <= 0) {
            throw new Error('max should be greater than 0');
        }
        return Math.floor(Math.random() * max); // Random number in range [0, max)
    }

}
module.exports = CommonUtils;