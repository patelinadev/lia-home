import Image from "next/image";
import type { Project } from "@/lib/content";

// 16:9 illustration slot for a project. Renders the generated image when the
// project has one, otherwise a sketch placeholder with the same footprint.
export default function Illustration({ project }: { project: Project }) {
  return (
    <figure className="relative">
      <div className="relative aspect-video w-full overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Illustration for ${project.title}`}
            fill
            sizes="(min-width: 768px) 480px, 100vw"
            className="object-contain"
          />
        ) : (
          <div className="sketch-soft flex h-full w-full items-center justify-center">
            <span className="note text-neutral-500">illustration on its way</span>
          </div>
        )}
      </div>
      <figcaption
        className={`note note-${project.accent} absolute -bottom-6 right-6 -rotate-2`}
      >
        {project.note}
      </figcaption>
    </figure>
  );
}
