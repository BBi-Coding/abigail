import Image from 'next/image'

interface ProjectProps {
  title: string
  category: string
  description: string
  imagePath: string
}

export default function ProjectCard({ title, category, description, imagePath }: ProjectProps) {
  return (
    <div className="group relative w-full mb-32 block cursor-pointer">
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-subtle rounded-sm mb-8">
        <Image 
          src={imagePath} 
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        {/* Subtle overlay for contrast */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
      </div>
      
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
        <div>
          <h3 className="font-heading text-3xl font-semibold mb-2">{title}</h3>
          <p className="text-foreground/60 text-lg">{description}</p>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-sm uppercase tracking-widest text-foreground/50">{category}</span>
          <button className="text-accent hover:text-accent/80 transition-colors duration-300 font-medium flex items-center gap-2 group-hover:translate-x-2 ease-out">
            Visit Project <span>→</span>
          </button>
        </div>
      </div>
    </div>
  )
}