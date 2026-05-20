export interface Release {
    id: string;
    title: string;
    artist: Artist;
    coverUrl: string;
    releaseDate: string;
    streamingLinks: StreamingLink[];
    stats?: {
        streams: number;
        likes: number;
        shares: number;
    };
}

export interface Artist {
    id: string;
    name: string;
    avatarUrl: string;
    bio: string;
    socialLinks: SocialLink[];
}

export interface StreamingLink {
    platform: string;
    url: string;
    icon: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export const mockArtists: Artist[] = [
    {
        id: '1',
        name: 'Digital Waves',
        avatarUrl:
            'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
        bio: 'Electronic music producer creating atmospheric soundscapes',
        socialLinks: [
            { platform: 'Instagram', url: '#', icon: 'instagram' },
            { platform: 'Twitter', url: '#', icon: 'twitter' },
            { platform: 'YouTube', url: '#', icon: 'youtube' },
        ],
    },
    {
        id: '2',
        name: 'Neon Dreams',
        avatarUrl:
            'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400',
        bio: 'Synthwave and retrowave artist',
        socialLinks: [
            { platform: 'Instagram', url: '#', icon: 'instagram' },
            { platform: 'Twitter', url: '#', icon: 'twitter' },
        ],
    },
];

export const mockReleases: Release[] = [
    {
        id: '1',
        title: 'Midnight Echoes',
        artist: mockArtists[0],
        coverUrl:
            'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600',
        releaseDate: '2026-05-15',
        streamingLinks: [
            { platform: 'Spotify', url: '#', icon: 'spotify' },
            { platform: 'Apple Music', url: '#', icon: 'apple' },
            { platform: 'YouTube Music', url: '#', icon: 'youtube' },
            { platform: 'SoundCloud', url: '#', icon: 'cloud' },
        ],
        stats: {
            streams: 125000,
            likes: 8500,
            shares: 320,
        },
    },
    {
        id: '2',
        title: 'Neon Lights',
        artist: mockArtists[1],
        coverUrl:
            'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600',
        releaseDate: '2026-05-10',
        streamingLinks: [
            { platform: 'Spotify', url: '#', icon: 'spotify' },
            { platform: 'Apple Music', url: '#', icon: 'apple' },
            { platform: 'YouTube Music', url: '#', icon: 'youtube' },
        ],
        stats: {
            streams: 89000,
            likes: 5200,
            shares: 180,
        },
    },
    {
        id: '3',
        title: 'Digital Dreams',
        artist: mockArtists[0],
        coverUrl:
            'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600',
        releaseDate: '2026-04-28',
        streamingLinks: [
            { platform: 'Spotify', url: '#', icon: 'spotify' },
            { platform: 'Apple Music', url: '#', icon: 'apple' },
            { platform: 'SoundCloud', url: '#', icon: 'cloud' },
        ],
        stats: {
            streams: 210000,
            likes: 12000,
            shares: 450,
        },
    },
    {
        id: '4',
        title: 'Cosmic Voyage',
        artist: mockArtists[1],
        coverUrl: 'https://picsum.photos/200/300',
        releaseDate: '2026-04-20',
        streamingLinks: [
            { platform: 'Spotify', url: '#', icon: 'spotify' },
            { platform: 'Apple Music', url: '#', icon: 'apple' },
            { platform: 'YouTube Music', url: '#', icon: 'youtube' },
        ],
        stats: {
            streams: 156000,
            likes: 9800,
            shares: 290,
        },
    },
    {
        id: '5',
        title: 'Cosmic Voyage',
        artist: mockArtists[1],
        coverUrl: 'https://picsum.photos/200/300',
        releaseDate: '2026-04-20',
        streamingLinks: [
            { platform: 'Spotify', url: '#', icon: 'spotify' },
            { platform: 'Apple Music', url: '#', icon: 'apple' },
            { platform: 'YouTube Music', url: '#', icon: 'youtube' },
        ],
        stats: {
            streams: 156000,
            likes: 9800,
            shares: 290,
        },
    },
    {
        id: '6',
        title: 'Cosmic Voyage',
        artist: mockArtists[1],
        coverUrl: 'https://picsum.photos/200/300',
        releaseDate: '2026-04-20',
        streamingLinks: [
            { platform: 'Spotify', url: '#', icon: 'spotify' },
            { platform: 'Apple Music', url: '#', icon: 'apple' },
            { platform: 'YouTube Music', url: '#', icon: 'youtube' },
        ],
        stats: {
            streams: 156000,
            likes: 9800,
            shares: 290,
        },
    },
    {
        id: '7',
        title: 'Cosmic Voyage',
        artist: mockArtists[1],
        coverUrl: 'https://picsum.photos/200/300',
        releaseDate: '2026-04-20',
        streamingLinks: [
            { platform: 'Spotify', url: '#', icon: 'spotify' },
            { platform: 'Apple Music', url: '#', icon: 'apple' },
            { platform: 'YouTube Music', url: '#', icon: 'youtube' },
        ],
        stats: {
            streams: 156000,
            likes: 9800,
            shares: 290,
        },
    },
    {
        id: '8',
        title: 'Cosmic Voyage',
        artist: mockArtists[1],
        coverUrl: 'https://picsum.photos/200/300',
        releaseDate: '2026-04-20',
        streamingLinks: [
            { platform: 'Spotify', url: '#', icon: 'spotify' },
            { platform: 'Apple Music', url: '#', icon: 'apple' },
            { platform: 'YouTube Music', url: '#', icon: 'youtube' },
        ],
        stats: {
            streams: 156000,
            likes: 9800,
            shares: 290,
        },
    },
    {
        id: '9',
        title: 'Cosmic Voyage',
        artist: mockArtists[1],
        coverUrl: 'https://picsum.photos/200/300',
        releaseDate: '2026-04-20',
        streamingLinks: [
            { platform: 'Spotify', url: '#', icon: 'spotify' },
            { platform: 'Apple Music', url: '#', icon: 'apple' },
            { platform: 'YouTube Music', url: '#', icon: 'youtube' },
        ],
        stats: {
            streams: 156000,
            likes: 9800,
            shares: 290,
        },
    },
    {
        id: '10',
        title: 'Cosmic Voyage',
        artist: mockArtists[1],
        coverUrl: 'https://picsum.photos/200/300',
        releaseDate: '2026-04-20',
        streamingLinks: [
            { platform: 'Spotify', url: '#', icon: 'spotify' },
            { platform: 'Apple Music', url: '#', icon: 'apple' },
            { platform: 'YouTube Music', url: '#', icon: 'youtube' },
        ],
        stats: {
            streams: 156000,
            likes: 9800,
            shares: 290,
        },
    },
    {
        id: '11',
        title: 'Cosmic Voyage',
        artist: mockArtists[1],
        coverUrl: 'https://picsum.photos/200/300',
        releaseDate: '2026-04-20',
        streamingLinks: [
            { platform: 'Spotify', url: '#', icon: 'spotify' },
            { platform: 'Apple Music', url: '#', icon: 'apple' },
            { platform: 'YouTube Music', url: '#', icon: 'youtube' },
        ],
        stats: {
            streams: 156000,
            likes: 9800,
            shares: 290,
        },
    },
    {
        id: '12',
        title: 'Cosmic Voyage',
        artist: mockArtists[1],
        coverUrl: 'https://picsum.photos/200/300',
        releaseDate: '2026-04-20',
        streamingLinks: [
            { platform: 'Spotify', url: '#', icon: 'spotify' },
            { platform: 'Apple Music', url: '#', icon: 'apple' },
            { platform: 'YouTube Music', url: '#', icon: 'youtube' },
        ],
        stats: {
            streams: 156000,
            likes: 9800,
            shares: 290,
        },
    },
];
