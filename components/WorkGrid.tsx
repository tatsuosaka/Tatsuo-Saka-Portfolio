import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../constants";
import { PlayCircle, Globe, PenTool } from "lucide-react";
import { useVideoThumbnail } from "../hooks/useVideoThumbnail";

type Category = "Todos" | "Vídeo" | "Site" | "Design";

interface WorkGridProps {
    limit?: number;
    showAllButton?: boolean;
    title?: string;
    compact?: boolean;
}

// Componente para exibir cada projeto
const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
    const [failedVideo, setFailedVideo] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);
    const [videoSrcLoaded, setVideoSrcLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const isImageFile = /\.(webp|png|jpg|jpeg|gif)$/i.test(project.thumbnail);
    const generatedThumbnail = useVideoThumbnail(
        !failedVideo && !isImageFile ? project.thumbnail : "",
    );

    // Lazy load vídeos quando entram na viewport
    useEffect(() => {
        if (isImageFile || failedVideo) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVideoSrcLoaded(true);
                    observer.unobserve(entry.target);
                }
            },
            { rootMargin: "50px" },
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [isImageFile, failedVideo]);

    return (
        <Link
            to={`/project/${project.id}`}
            className="group block mb-6 md:mb-8 break-inside-avoid"
        >
            <div
                ref={containerRef}
                className={`relative rounded-2xl overflow-hidden bg-[#111] mb-4 ${
                    project.thumbnailOrientation === "vertical"
                        ? "aspect-[4/5]"
                        : "aspect-video"
                }`}
            >
                {/* Loading placeholder */}
                {imageLoading && !generatedThumbnail && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse" />
                )}

                {isImageFile || failedVideo ? (
                    <img
                        src={project.thumbnail}
                        alt={project.title}
                        loading="lazy"
                        onLoad={() => setImageLoading(false)}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                ) : (
                    <video
                        ref={videoRef}
                        src={videoSrcLoaded ? project.thumbnail : undefined}
                        poster={generatedThumbnail}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        onError={() => setFailedVideo(true)}
                        onLoadedData={() => setImageLoading(false)}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                )}

                {/* Category Icon Overlay */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full text-white/80">
                    {project.category === "Vídeo" && <PlayCircle size={16} />}
                    {project.category === "Site" && <Globe size={16} />}
                    {project.category === "Design" && <PenTool size={16} />}
                </div>
            </div>

            <div className="px-1">
                <h4 className="text-lg font-semibold text-white group-hover:text-brand transition-colors">
                    {project.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                    {project.category} • {project.year}
                </p>
            </div>
        </Link>
    );
};

const WorkGrid: React.FC<WorkGridProps> = ({
    limit,
    showAllButton = false,
    title = "Projetos",
    compact = false,
}) => {
    const [activeCategory, setActiveCategory] = useState<Category>("Todos");

    const filteredProjects =
        activeCategory === "Todos"
            ? PROJECTS
            : PROJECTS.filter((p) => p.category === activeCategory);

    const displayedProjects = limit
        ? filteredProjects.slice(0, limit)
        : filteredProjects;

    return (
        <section
            id="work"
            className={`bg-[#050505] px-4 md:px-8 ${compact ? "py-8 md:py-12" : "py-12 md:py-24"}`}
        >
            <div className="max-w-5xl mx-auto">
                <div className={`${compact ? "mb-8" : "mb-16"} text-center`}>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        {title}
                    </h3>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {(
                            ["Todos", "Vídeo", "Site", "Design"] as Category[]
                        ).map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                                    activeCategory === cat
                                        ? "bg-white text-black border-white"
                                        : "bg-transparent text-gray-400 border-white/20 hover:border-white/50 hover:text-white"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid Layout - Masonry */}
                <div className="columns-1 sm:columns-2 md:columns-3 gap-6 md:gap-8">
                    {displayedProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {displayedProjects.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        <p>Nenhum projeto encontrado nesta categoria.</p>
                    </div>
                )}

                {showAllButton && (
                    <div className="mt-16 text-center">
                        <Link
                            to="/projects"
                            className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
                        >
                            Ver todos os projetos
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default WorkGrid;
