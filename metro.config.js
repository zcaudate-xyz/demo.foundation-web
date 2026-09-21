const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Extend asset and source extensions
config.resolver.assetExts.push('db', 'ttf'); // Add 'ttf' for TrueType Fonts
config.resolver.sourceExts.push('db'); // If you have custom '.db' files that need resolving

module.exports = config;