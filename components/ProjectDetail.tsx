import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../constants";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = PROJECTS.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
                <h2 className="text-3xl font-bold mb-4">
                    Projeto não encontrado
                </h2>
                <Link to="/" className="text-brand hover:underline">
                    Voltar para o início
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white pt-20">
            {/* Content */}
            <div className="max-w-5xl mx-auto px-6 py-20">
                <h3 className="text-2xl font-semibold mb-8 text-white">
                    {project.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {project.media.map((item, idx) => (
                        <div
                            key={idx}
                            className={`rounded-2xl overflow-hidden bg-gray-900 group ${
                                item.orientation === "vertical"
                                    ? "aspect-[9/16] md:col-span-1"
                                    : "aspect-video md:col-span-2"
                            }`}
                        >
                            {item.type === "video" ? (
                                <video
                                    src={item.url}
                                    controls
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <img
                                    src={item.url}
                                    alt={`Detalhe ${idx}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="bg-[#111] p-8 rounded-3xl border border-white/5 h-fit">
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">
                            Ferramentas Utilizadas
                        </h3>
                        <ul className="space-y-3">
                            {project.tools.map((tool) => (
                                <li
                                    key={tool}
                                    className="flex items-center text-gray-400"
                                >
                                    <CheckCircle2
                                        size={16}
                                        className="mr-3 text-brand"
                                    />
                                    {tool}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Gallery Grid */}
            </div>
        </div>
    );
};

export default ProjectDetail;
