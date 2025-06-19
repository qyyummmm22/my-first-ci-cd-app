const fs = require('fs');
const path = require('path');

console.log('Running basic application tests...');

// Simulate a "build" check (e.g., ensuring index.html exists)
const indexPath = path.join(__dirname, 'index.html');
if (fs.existsSync(indexPath)) {
    console.log('PASS: index.html exists.');
} else {
    console.error('FAIL: index.html does NOT exist.');
    process.exit(1); // Exit with error code if critical file is missing
}

// Simulate a "content" check (e.g., ensuring specific text is present)
const htmlContent = fs.readFileSync(indexPath, 'utf8');
if (htmlContent.includes('Welcome to My CI/CD Journey!')) {
    console.log('PASS: Found expected title in index.html.');
} else {
    console.error('FAIL: Could not find expected title in index.html.');
    process.exit(1);
}

// Simulate a simple "logic" check (e.g., ensuring the version is valid)
const versionMatch = htmlContent.match(/<span id="app-version">(\d+\.\d+)<\/span>/);
if (versionMatch && parseFloat(versionMatch[1]) >= 1.0) {
    console.log(`PASS: App version ${versionMatch[1]} is valid.`);
} else {
    console.error('FAIL: App version is missing or invalid.');
    process.exit(1);
}

console.log('All basic tests passed!');