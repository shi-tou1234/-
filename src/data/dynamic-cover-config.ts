export interface DynamicCoverConfig {
    enabled: boolean;
    unsplash: {
        accessKey: string;
        orientation: 'landscape' | 'portrait' | 'squarish';
        quality: number;
        width: number;
        height: number;
    };
    picsum: {
        enabled: boolean;
        blur: boolean;
        grayscale: boolean;
        width: number;
        height: number;
    };
    cacheEnabled: boolean;
    cacheTtlMs: number;
}

const dynamicCoverConfig: DynamicCoverConfig = {
    enabled: true,
    unsplash: {
        accessKey: import.meta.env.UNSPLASH_ACCESS_KEY || '',
        orientation: 'landscape',
        quality: 80,
        width: 800,
        height: 450,
    },
    picsum: {
        enabled: true,
        blur: false,
        grayscale: false,
        width: 800,
        height: 450,
    },
    cacheEnabled: true,
    cacheTtlMs: 1000 * 60 * 60 * 24,
};

export default dynamicCoverConfig;
