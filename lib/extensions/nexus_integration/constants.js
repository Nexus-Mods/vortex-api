"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NEXUS_PUBLIC_KEY = exports.OAUTH_CLIENT_ID = exports.OAUTH_REDIRECT_URL = exports.getOAuthRedirectUrl = exports.OAUTH_REDIRECT_BASE = exports.USERINFO_ENDPOINT = exports.OAUTH_URL = exports.REVALIDATION_FREQUENCY = exports.FALLBACK_AVATAR = exports.PREMIUM_PATH = exports.NEXUS_PROTOCOL = exports.NEXUS_NEXT_URL = exports.NEXUS_BASE_URL = exports.NEXUS_USERS_SUBDOMAIN = exports.NEXUS_NEXT_SUBDOMAIN = exports.NEXUS_FLAMEWORK_SUBDOMAIN = exports.NEXUS_API_SUBDOMAIN = exports.NEXUS_DOMAIN = void 0;
exports.NEXUS_DOMAIN = process.env["NEXUS_DOMAIN"] || "nexusmods.com";
exports.NEXUS_API_SUBDOMAIN = process.env["API_SUBDOMAIN"] || "api";
exports.NEXUS_FLAMEWORK_SUBDOMAIN = process.env["FLAMEWORK_SUBDOMAIN"] || "www";
exports.NEXUS_NEXT_SUBDOMAIN = process.env["NEXT_SUBDOMAIN"] || "next";
exports.NEXUS_USERS_SUBDOMAIN = process.env["USERS_SUBDOMAIN"] || "users";
exports.NEXUS_BASE_URL = process.env["NEXUS_BASE_URL"] ||
    `https://${exports.NEXUS_FLAMEWORK_SUBDOMAIN}.${exports.NEXUS_DOMAIN}`;
//export const NEXUS_NEXT_URL = process.env['NEXUS_NEXT_URL'] || `https://${NEXUS_NEXT_SUBDOMAIN}.${NEXUS_DOMAIN}`;
exports.NEXUS_NEXT_URL = process.env["NEXUS_NEXT_URL"] || `https://${exports.NEXUS_DOMAIN}/games`;
exports.NEXUS_PROTOCOL = "https:";
exports.PREMIUM_PATH = ["account", "billing", "premium"];
exports.FALLBACK_AVATAR = "assets/images/noavatar.png";
// no more than once every five minutes
exports.REVALIDATION_FREQUENCY = 5 * 60 * 1000;
exports.OAUTH_URL = `https://${exports.NEXUS_USERS_SUBDOMAIN}.${exports.NEXUS_DOMAIN}/oauth`;
exports.USERINFO_ENDPOINT = `https://${exports.NEXUS_USERS_SUBDOMAIN}.${exports.NEXUS_DOMAIN}/oauth/userinfo`;
// export const OAUTH_REDIRECT_URL = 'nxm://oauth/callback';
exports.OAUTH_REDIRECT_BASE = "http://127.0.0.1";
const getOAuthRedirectUrl = (port) => `${exports.OAUTH_REDIRECT_BASE}:${port}`;
exports.getOAuthRedirectUrl = getOAuthRedirectUrl;
// Deprecated: Use getOAuthRedirectUrl() instead
exports.OAUTH_REDIRECT_URL = "http://127.0.0.1:PORT";
exports.OAUTH_CLIENT_ID = "vortex_loopback";
exports.NEXUS_PUBLIC_KEY = "-----BEGIN PUBLIC KEY-----\n" +
    "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDhKHxCWOeUy38S3UOBOB11SNd/\n" +
    "wyL9TVvzxePkEsZb4fEVGp0U5MEcDcJgXUo/fZOYTUFMX7ipvCC7sbsyKpJ0xZ/M\n" +
    "l5zXMBcI03gu6p1TvG+eL0xEk6X8LD+t+GbzH9EY58bZ8kOLEx4lbAX3fNYhMhbh\n" +
    "HJra9ZVW2QdgHoDV6wIDAQAB\n" +
    "-----END PUBLIC KEY-----\n";
