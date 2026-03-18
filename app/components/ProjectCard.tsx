import Image from "next/image";

interface ProjectCardProps {
  title: string;
  client: string;
  image: string;
  description: string;
  decision: string;
  uxProcess: string;
  technology: string[];
}

export default function ProjectCard({
  title,
  client,
  image,
  description,
  decision,
  uxProcess,
  technology,
}: ProjectCardProps) {
  return (
    <div className="border rounded-xl p-6 space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-gray-500">Client: {client}</p>

      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="font-semibold">Description</h3>
        <p>{description}</p>
      </div>

      <div>
        <h3 className="font-semibold">Decision Process</h3>
        <p>{decision}</p>
      </div>

      <div>
        <h3 className="font-semibold">UX Process</h3>
        <p>{uxProcess}</p>
      </div>

      <div>
        <h3 className="font-semibold">Technology Used</h3>
        <div className="flex flex-wrap gap-2">
          {technology.map((tech) => (
            <span key={tech} className="text-sm border px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
