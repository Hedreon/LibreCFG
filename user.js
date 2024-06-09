//// TELEMETRY \\\\
// Disable crash reporting
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);

// Disable beacon
user_pref("beacon.enabled", false);

// Disable sensors
user_pref("device.sensors.ambientLight.enabled", false);
user_pref("device.sensors.enabled", false);
user_pref("device.sensors.motion.enabled", false);
user_pref("device.sensors.orientation.enabled", false);
user_pref("device.sensors.proximity.enabled", false);
user_pref("device.sensors.test.events", false);

// Disable experiments
user_pref("extensions.experiments.enabled", false);
user_pref("messaging-system.rsexperimentloader.enabled", false);

// Disable addon recommendations
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// Disable WebRTC
user_pref("media.peerconnection.enabled", false);

// Disable Safebrowsing
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);

// Disable Captive Portal
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

// Disable Geolocation
user_pref("geo.enabled", false);

// Disable tracking camera and microphone availability
user_pref("media.navigator.enabled", false);

// Disable clipboard activity tracking
user_pref("dom.event.clipboardevents.enabled", false);

//// DEFAULTS \\\\
// Enable CSS customizations
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Disable form autocomplete
user_pref("dom.forms.autocomplete.formautofill", false);

// Clear open windows on shutdown
user_pref("privacy.clearOnShutdown.openWindows", true);

// Enable daily fingerprint randomization
user_pref("privacy.resistFingerprinting.randomization.daily_reset.enabled", true);
user_pref("privacy.resistFingerprinting.randomization.daily_reset.private.enabled", true);

// Spoof language to English
user_pref("privacy.spoof_english", 2);

// Disable offline caching
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", false);

// Disable autoplay
user_pref("media.autoplay.blocking_policy", 2);

// Set default emoji
user_pref("font.name-list.emoji", "Twemoji Mozilla, Segoe UI Emoji");

// Enable browser toolbox
user_pref("devtools.chrome.enabled", true);
user_pref("devtools.debugger.remote-enabled", true);

//// QUALITY OF LIFE \\\\
// Disable Firefox View
user_pref("browser.tabs.tabmanager.enabled", false);
user_pref("browser.firefox-view.max-history-rows", 0);
user_pref("browser.firefox-view.search.enabled", false);
user_pref("browser.firefox-view.view-count", 0);
user_pref("browser.firefox-view.virtual-list.enabled", false);
user_pref("browser.tabs.firefox-view", false);
user_pref("browser.tabs.firefox-view-newIcon", false);
user_pref("browser.tabs.firefox-view-next", false);
user_pref("browser.tabs.firefox-view.notify-for-tabs", false);

// Combine private windows
user_pref("browser.privateWindowSeparation.enabled", false);

// Disable loading bookmarks in the background
user_pref("browser.tabs.loadBookmarksInBackground", false);

// Highlight all matches in the find bar
user_pref("findbar.highlightAll", true);