//// TELEMETRY \\\\
// Disable crash reporting
user_pref("breakpad.reportURL", "");
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.tabs.crashReporting.sendReport", false);

// Disable health reports
user_pref("datareporting.healthreport.uploadEnabled", false);

// Disable beacon
user_pref("beacon.enabled", false);

// Disable pings
user_pref("browser.send_pings", false);

// Disable data submission
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// Disable sensors
user_pref("device.sensors.ambientLight.enabled", false);
user_pref("device.sensors.enabled", false);
user_pref("device.sensors.motion.enabled", false);
user_pref("device.sensors.orientation.enabled", false);
user_pref("device.sensors.proximity.enabled", false);
user_pref("device.sensors.test.events", false);

// Disable reading system information
user_pref("dom.battery.enabled", false);

// Disable WebAudio API
user_pref("dom.webaudio.enabled", false);

// Disable experiments
user_pref("extensions.experiments.enabled", false);

// Disable addon telemetry
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.getAddons.discovery.api_url", "");

// Disable WebRTC/PeerConnection
user_pref("media.navigator.enabled", false);
user_pref("media.peerconnection.enabled", false);

// Disable video statistics
user_pref("media.video_stats.enabled", false);

// Disable captive portal
user_pref("network.captive-portal-service.enabled", false);

// Block referers
user_pref("network.http.sendRefererHeader", 0);

// Disable telemetry
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.server_owner", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
user_pref("toolkit.telemetry.unified", false);

// Disable studies
user_pref("app.shield.optoutstudies.enabled", true);

// Disable session identifiers
user_pref("security.ssl.disable_session_identifiers", true);

// Disable Normandy (https://github.com/mozilla/normandy)
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);

// Disable session restore
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.sessionstore.max_resumed_crashes", 0);
user_pref("browser.sessionstore.resume_from_crash", false);
user_pref("browser.sessionstore.resume_session_once", false);
user_pref("browser.sessionstore.restore_on_demand", false);

// Disable Safebrowsing
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);

// Disable new tab junk
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
user_pref("browser.newtabpage.activity-stream.topSitesRows", 0);
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showRecentSaves", false);
user_pref("browser.newtabpage.activity-stream.sectionOrder", "");
user_pref("browser.newtabpage.activity-stream.section.topstories.rows", 0);
user_pref("browser.newtabpage.activity-stream.section.highlights.rows", 0);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "duckduckgo");
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.noDefaultSearchTile", true);
user_pref("browser.newtabpage.activity-stream.hideTopSitesTitle", true);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.systemtick", false);
user_pref("browser.newtabpage.activity-stream.feeds.system.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.system.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.sections", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.recommendationprovider", false);
user_pref("browser.newtabpage.activity-stream.feeds.prefs", false);
user_pref("browser.newtabpage.activity-stream.feeds.places", false);
user_pref("browser.newtabpage.activity-stream.feeds.newtabinit", false);
user_pref("browser.newtabpage.activity-stream.feeds.favicon", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.aboutpreferences", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.titleLines", 0);
user_pref("browser.newtabpage.activity-stream.discoverystream.sponsored-collections.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.spocs.personalized", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.spoc-topsites-positions", 0);
user_pref("browser.newtabpage.activity-stream.discoverystream.spoc-positions", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.recs.personalized", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.recentSaves.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.spocTopsitesPlacement.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.readTime.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.personalization.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.endpoints", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.endpointSpocsClear", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");

//// SECURITY \\\\
// Disable auto fill
user_pref("signon.autofillForms", false);
user_pref("dom.forms.autocomplete.formautofill", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.addresses.ignoreAutocompleteOff", true);
user_pref("extensions.formautofill.creditCards.enabled", false);

// Enable HTTPS-Only mode
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_ever_enabled", true);

// Enable tracking protection
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true);

// Enable Do Not Track
user_pref("privacy.donottrackheader.enabled", true);

// Enable query stripping
user_pref("privacy.query_stripping.enabled", true);
user_pref("privacy.query_stripping.enabled.pbmode", true);

// Change cookie behavior
user_pref("network.cookie.cookieBehavior", 1);

// Disable DNS over HTTPS
user_pref("network.trr.mode", 5);

// Disable preloading
user_pref("browser.newtab.preload", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);

// Hide region
user_pref("browser.search.region", "US");
user_pref("doh-rollout.home-region", "US");

//// DEFAULTS \\\\
// Disable autoplay
user_pref("media.autoplay.default", 1);

// Disable trimming URLs
user_pref("browser.urlbar.trimURLs", false);

// Disable usage of download directory
user_pref("browser.download.useDownloadDir", false);

// Disable smooth scroll
user_pref("general.smoothScroll", false);

//// ANNOYANCES \\\\
// Disable Pocket
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.saveToPocketCard.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.sendToPocket.enabled", false);
user_pref("browser.urlbar.pocket.featureGate", false);
user_pref("browser.urlbar.suggest.pocket", false);
user_pref("extensions.pocket.bffRecentSaves", false);
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("extensions.pocket.oAuthConsumerKeyBff", "");
user_pref("extensions.pocket.refresh.emailButton.enabled", false);
user_pref("extensions.pocket.refresh.hideRecentSaves.enabled", true);
user_pref("extensions.pocket.showHome", false);

// Disable "Whats New"
user_pref("browser.startup.homepage_override.mstone", "ignore");

// Disable default browser check
user_pref("browser.shell.checkDefaultBrowser", false);

// Disable search suggestions
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.suggest.enabled.private", false);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("keyword.enabled", false);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.urlbar.autoFill", false);

// Disable translations
user_pref("browser.translations.enable", false);
user_pref("browser.translations.autoTranslate", false);

// Disable Firefox View
user_pref("browser.places.interactions.enabled", false);
user_pref("browser.tabs.firefox-view", false);
user_pref("browser.firefox-view.max-history-rows", 0);
user_pref("browser.firefox-view.view-count", 0);
user_pref("browser.tabs.firefox-view-newIcon", false);
user_pref("browser.tabs.firefox-view-next", false);
user_pref("browser.tabs.firefox-view.notify-for-tabs", false);
user_pref("browser.tabs.firefox-view.ui-state.tab-pickup.open", false);