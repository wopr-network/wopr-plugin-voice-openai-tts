/**
 * Type stubs for WOPR peer dependencies.
 *
 * The `wopr` and `wopr/voice` packages are provided by the WOPR runtime at
 * install time and are not available as standalone npm packages. These stubs
 * satisfy tsc --noEmit in a standalone dev environment.
 */

declare module "wopr" {
	export interface WOPRPluginContext {
		getConfig<T = Record<string, unknown>>(): T;
		registerTTSProvider(provider: unknown): void;
		registerConfigSchema(pluginId: string, schema: unknown): void;
		unregisterConfigSchema(pluginId: string): void;
		unregisterCapabilityProvider(capability: string, providerId: string): void;
		log: {
			info(msg: string): void;
			error(msg: string): void;
			warn(msg: string): void;
			debug(msg: string): void;
		};
		[key: string]: unknown;
	}
	// biome-ignore lint/suspicious/noExplicitAny: intentional stub for unavailable peer dep
	export type WOPRPlugin = any;
}

declare module "wopr/voice" {
	// biome-ignore lint/suspicious/noExplicitAny: intentional stub for unavailable peer dep
	export type TTSProvider = any;
	// biome-ignore lint/suspicious/noExplicitAny: intentional stub for unavailable peer dep
	export type TTSOptions = any;
	// biome-ignore lint/suspicious/noExplicitAny: intentional stub for unavailable peer dep
	export type TTSSynthesisResult = any;
	// biome-ignore lint/suspicious/noExplicitAny: intentional stub for unavailable peer dep
	export type Voice = any;
	// biome-ignore lint/suspicious/noExplicitAny: intentional stub for unavailable peer dep
	export type VoicePluginMetadata = any;
	// biome-ignore lint/suspicious/noExplicitAny: intentional stub for unavailable peer dep
	export type AudioFormat = any;
}
