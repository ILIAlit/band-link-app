export interface Release {
    id: string;
    title: string;

    coverUrl: string;
    releaseDate: string;
    streamingLinks: StreamingLink[];
}

export interface StreamingLink {
    platform: string;
    url: string;
    icon: string;
}

export interface Profile {
    id: number;
    about?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
}
