//// TELEMETRY \\\\
// Disable crash reporting
user_pref("breakpad.reportURL", "");
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.tabs.crashReporting.sendReport", false);

// Disable health reports
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// Disable beacon
user_pref("beacon.enabled", false);

// Disable sensors
user_pref("device.sensors.ambientLight.enabled", false);
user_pref("device.sensors.enabled", false);
user_pref("device.sensors.motion.enabled", false);
user_pref("device.sensors.orientation.enabled", false);
user_pref("device.sensors.proximity.enabled", false);
user_pref("device.sensors.test.events", false);

// Disable WebAudio API
user_pref("dom.webaudio.enabled", false);

// Disable experiments
user_pref("extensions.experiments.enabled", false);

// Disable addon recommendations
user_pref("extensions.getAddons.discovery.api_url", "");
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// Disable WebRTC
user_pref("media.peerconnection.enabled", false);

// Disable toolkit telemetry
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
user_pref("toolkit.telemetry.unified", false);

// Disable studies
user_pref("app.shield.optoutstudies.enabled", true);

// Disable Safebrowsing
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);

// Disable new tab page
user_pref("browser.newtabpage.enabled", false);

//// DEFAULTS \\\\
// Disable usage of download directory
user_pref("browser.download.useDownloadDir", false);

// Disable smooth scroll
user_pref("general.smoothScroll", false);

// Enable CSS customizations
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

//// ANNOYANCES \\\\
// Disable default browser check
user_pref("browser.shell.checkDefaultBrowser", false);

// Disable translations
user_pref("browser.translations.enable", false);
user_pref("browser.translations.autoTranslate", false);

// Disable Firefox View
user_pref("browser.tabs.tabmanager.enabled", false);
user_pref("browser.tabs.firefox-view", false);
user_pref("browser.firefox-view.max-history-rows", 0);
user_pref("browser.firefox-view.view-count", 0);
user_pref("browser.tabs.firefox-view-newIcon", false);
user_pref("browser.tabs.firefox-view-next", false);
user_pref("browser.tabs.firefox-view.notify-for-tabs", false);
user_pref("browser.tabs.firefox-view.ui-state.tab-pickup.open", false);