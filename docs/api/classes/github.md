**[vortex_devel](../README.md)**

> [Globals](../globals.md) / GitHub

# Class: GitHub

wrap requests to the Vortex GitHub repo, caching results where appropriate

## Hierarchy

* **GitHub**

## Index

### Properties

* [mRatelimitReset](github.md#mratelimitreset)
* [mReleaseCache](github.md#mreleasecache)
* [CONFIG\_BRANCH](github.md#config_branch)
* [RELEASE\_CUTOFF](github.md#release_cutoff)
* [USER\_AGENT](github.md#user_agent)

### Methods

* [fetchConfig](github.md#fetchconfig)
* [query](github.md#query)
* [queryReleases](github.md#queryreleases)
* [releases](github.md#releases)
* [rawUrl](github.md#rawurl)
* [repoUrl](github.md#repourl)

## Properties

### mRatelimitReset

• `Private` **mRatelimitReset**: number

*Defined in Work/vortex/src/util/github.ts:95*

___

### mReleaseCache

• `Private` **mReleaseCache**: Promise\<[IGitHubRelease](../interfaces/igithubrelease.md)[]>

*Defined in Work/vortex/src/util/github.ts:94*

___

### CONFIG\_BRANCH

▪ `Static` `Private` **CONFIG\_BRANCH**: string = "announcements"

*Defined in Work/vortex/src/util/github.ts:84*

___

### RELEASE\_CUTOFF

▪ `Static` `Private` **RELEASE\_CUTOFF**: string = "0.12.7"

*Defined in Work/vortex/src/util/github.ts:82*

___

### USER\_AGENT

▪ `Static` `Private` **USER\_AGENT**: string = "Vortex"

*Defined in Work/vortex/src/util/github.ts:83*

## Methods

### fetchConfig

▸ **fetchConfig**(`config`: string): Promise\<any>

*Defined in Work/vortex/src/util/github.ts:109*

#### Parameters:

Name | Type |
------ | ------ |
`config` | string |

**Returns:** Promise\<any>

___

### query

▸ `Private`**query**(`baseUrl`: string, `request`: string): Promise\<any>

*Defined in Work/vortex/src/util/github.ts:113*

#### Parameters:

Name | Type |
------ | ------ |
`baseUrl` | string |
`request` | string |

**Returns:** Promise\<any>

___

### queryReleases

▸ `Private`**queryReleases**(): Promise\<[IGitHubRelease](../interfaces/igithubrelease.md)[]>

*Defined in Work/vortex/src/util/github.ts:160*

**Returns:** Promise\<[IGitHubRelease](../interfaces/igithubrelease.md)[]>

___

### releases

▸ **releases**(): Promise\<[IGitHubRelease](../interfaces/igithubrelease.md)[]>

*Defined in Work/vortex/src/util/github.ts:97*

**Returns:** Promise\<[IGitHubRelease](../interfaces/igithubrelease.md)[]>

___

### rawUrl

▸ `Static` `Private`**rawUrl**(): string

*Defined in Work/vortex/src/util/github.ts:90*

**Returns:** string

___

### repoUrl

▸ `Static` `Private`**repoUrl**(): string

*Defined in Work/vortex/src/util/github.ts:86*

**Returns:** string
