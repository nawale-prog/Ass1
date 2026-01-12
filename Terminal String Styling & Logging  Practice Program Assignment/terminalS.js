// String styling using ANSI escape codes
console.log("\x1b[32m%s\x1b[0m", "SUCCESS: Program started successfully");
console.log("\x1b[33m%s\x1b[0m", "WARNING: Low memory");
console.log("\x1b[31m%s\x1b[0m", "ERROR: Something went wrong");

// Logging examples
console.log("This is a normal log");
console.error("This is an error log");
console.warn("This is a warning log");

const username = "Nasra";
console.log(`User logged in: ${username}`);
