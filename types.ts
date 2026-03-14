export interface ProjectMedia {
    url: string;
    type: "image" | "video";
    orientation: "horizontal" | "vertical";
}

export interface Project {
    id: string;
    title: string;
    category: "Vídeo" | "Design" | "Site";
    description: string;
    client: string;
    year: string;
    thumbnail: string;
    thumbnailOrientation?: "horizontal" | "vertical";
    videoUrl?: string; // Placeholder for embedded video
    media: ProjectMedia[];
    tools: string[];
}

export interface ChatMessage {
    role: "user" | "model";
    text: string;
    isError?: boolean;
}
