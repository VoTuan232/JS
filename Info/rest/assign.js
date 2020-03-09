// Shallow-clone an object:
const data = { x: 42, y: 27, label: "Treasure" };
// The old way:
const clone1 = Object.assign({}, data);
// The new way:
const clone2 = { ...data };
// Either results in:
// { x: 42, y: 27, label: 'Treasure' }

// Merge two objects:
const defaultSettings = { logWarnings: false, logErrors: false };
const userSettings = { logErrors: true };
// The old way:
const settings1 = Object.assign({}, defaultSettings, userSettings);
// The new way:
const settings2 = { ...defaultSettings, ...userSettings };
// Either results in:
// { logWarnings: false, logErrors: true }
