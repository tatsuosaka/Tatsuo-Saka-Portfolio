import { useState, useEffect } from "react";

export const useVideoThumbnail = (videoUrl: string) => {
    const [thumbnail, setThumbnail] = useState<string>("");

    useEffect(() => {
        if (!videoUrl) return;

        const video = document.createElement("video");
        video.src = videoUrl;
        video.crossOrigin = "anonymous";

        const handleLoadedMetadata = () => {
            video.currentTime = Math.min(1, video.duration * 0.1); // Pega frame em 10% do vídeo
        };

        const handleSeeked = () => {
            const canvas = document.createElement("canvas");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            const ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.drawImage(video, 0, 0);
                const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
                setThumbnail(dataUrl);
            }
        };

        video.addEventListener("loadedmetadata", handleLoadedMetadata);
        video.addEventListener("seeked", handleSeeked);

        return () => {
            video.removeEventListener("loadedmetadata", handleLoadedMetadata);
            video.removeEventListener("seeked", handleSeeked);
        };
    }, [videoUrl]);

    return thumbnail;
};
