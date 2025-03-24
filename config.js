const TITLE = "Free Evaluation System Framework (Freva) - STAC API";
module.exports = {
    catalogUrl: null,
    catalogTitle: TITLE,
    allowExternalAccess: true,
    allowedDomains: [
      "dkrz.de"
    ],
    detectLocaleFromBrowser: true,
    storeLocale: true,
    locale: "en",
    fallbackLocale: "en",
    supportedLocales: [
        "de",
        "es",
        "en",
        "fr",
        "it",
        "ro",
        "pt"
    ],
    apiCatalogPriority: null,
    useTileLayerAsFallback: false,
    displayGeoTiffByDefault: false,
    buildTileUrlTemplate: null,
    stacProxyUrl: null,
    pathPrefix: "/",
    historyMode: "history",
    cardViewMode: "cards",
    cardViewSort: "asc",
    showKeywordsInItemCards: false,
    showKeywordsInCatalogCards: false,
    showThumbnailsAsAssets: false,
    geoTiffResolution: 128,
    redirectLegacyUrls: false,
    itemsPerPage: 12,
    defaultThumbnailSize: null,
    maxPreviewsOnMap: 50,
    crossOriginMedia: null,
    requestHeaders: {},
    requestQueryParameters: {},
    socialSharing: ['email', 'bsky', 'mastodon', 'x'],
    preprocessSTAC: stac => {
        if (stac.getBrowserPath() === '/') {
            stac.title = TITLE;
        }
        return stac;
    },
    authConfig: {
        type: "openIdConnect",
        openIdConnectUrl:"https://freva-keycloak.cloud.dkrz.de/realms/Freva/.well-known/openid-configuration"
    }
};