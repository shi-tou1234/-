import dynamicCoverConfig from '@/data/dynamic-cover-config';

interface CacheEntry {
    url: string;
    timestamp: number;
}

const coverCache = new Map<string, CacheEntry>();

function getCacheKey(keyword: string, seed: string): string {
    return `${keyword}::${seed}`;
}

function getCachedUrl(key: string): string | null {
    if (!dynamicCoverConfig.cacheEnabled) return null;
    const entry = coverCache.get(key);
    if (!entry) return null;
    if (Date.now() - entry.timestamp > dynamicCoverConfig.cacheTtlMs) {
        coverCache.delete(key);
        return null;
    }
    return entry.url;
}

function setCachedUrl(key: string, url: string): void {
    if (!dynamicCoverConfig.cacheEnabled) return;
    coverCache.set(key, { url, timestamp: Date.now() });
}

function hashString(input: string): number {
    let hash = 0;
    for (let i = 0; i < input.length; i += 1) {
        hash = (hash * 31 + input.charCodeAt(i)) | 0;
    }
    return Math.abs(hash);
}

function buildPicsumUrl(seed: string): string {
    const { width, height, blur, grayscale } = dynamicCoverConfig.picsum;
    const seedNum = hashString(seed);
    const params = new URLSearchParams();
    params.set('w', String(width));
    params.set('h', String(height));
    if (grayscale) params.set('grayscale', '');
    if (blur) params.set('blur', '2');
    return `https://picsum.photos/seed/${seedNum}/${width}/${height}?${params.toString()}`;
}

async function fetchUnsplashCover(keyword: string): Promise<string | null> {
    const { accessKey, orientation, quality, width, height } = dynamicCoverConfig.unsplash;

    if (!accessKey) return null;

    try {
        const query = keyword.slice(0, 100);
        const url = new URL('https://api.unsplash.com/photos/random');
        url.searchParams.set('query', query);
        url.searchParams.set('orientation', orientation);
        url.searchParams.set('client_id', accessKey);

        const response = await fetch(url.toString(), {
            signal: AbortSignal.timeout(5000),
            headers: { 'Accept-Version': 'v1' },
        });

        if (!response.ok) return null;

        const data = await response.json() as Record<string, unknown>;
        const rawUrl = data.urls?.regular as string || data.urls?.small as string || data.urls?.raw as string;

        if (!rawUrl) return null;

        const parsed = new URL(rawUrl);
        parsed.searchParams.set('q', String(quality));
        parsed.searchParams.set('w', String(width));
        parsed.searchParams.set('h', String(height));
        parsed.searchParams.set('fit', 'crop');

        return parsed.toString();
    } catch {
        return null;
    }
}

export async function fetchDynamicCover(title: string, urlSeed?: string): Promise<string | null> {
    if (!dynamicCoverConfig.enabled) return null;

    const seed = urlSeed || title;
    const cacheKey = getCacheKey(title, seed);

    const cached = getCachedUrl(cacheKey);
    if (cached) return cached;

    let result: string | null = null;

    if (dynamicCoverConfig.unsplash.accessKey) {
        result = await fetchUnsplashCover(title);
    }

    if (!result && dynamicCoverConfig.picsum.enabled) {
        result = buildPicsumUrl(seed);
    }

    if (result) {
        setCachedUrl(cacheKey, result);
    }

    return result;
}
