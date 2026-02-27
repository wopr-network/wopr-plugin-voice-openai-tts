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
		unregisterExtension(name: string): void;
		log: {
			info(msg: string): void;
			error(msg: string): void;
			warn(msg: string): void;
			debug(msg: string): void;
		};
		[key: string]: unknown;
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export type WOPRPlugin = any;
}

declare module "wopr/voice" {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export type TTSProvider = any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export type TTSOptions = any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export type TTSSynthesisResult = any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export type Voice = any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export type VoicePluginMetadata = any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export type AudioFormat = any;
}
