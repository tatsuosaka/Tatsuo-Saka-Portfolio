export interface ProjectMedia {
    url: string;
    type: "image" | "video";
    orientation: "horizontal" | "vertical";
}

export interface Project {
    id: string;
    title: string;
    category: "Vídeo" | "Design" | "Site";
    thumbnail: string;
    thumbnailOrientation?: "horizontal" | "vertical";
    videoUrl?: string; // Placeholder for embedded video
    url?: string; // URL for Site projects
    media: ProjectMedia[];
    tools: string[];
}

export interface ChatMessage {
    role: "user" | "model";
    text: string;
    isError?: boolean;
}
