import Hero from '@/components/Hero'
import Statement from '@/components/Statement'
import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  return (
    <main className="w-full relative">
      <Hero />
      <Statement />
      
      {/* Full-Bleed Dynamic Expanding Portfolio Section */}
      <section className="w-full bg-background border-y border-border">
        {/* Section Header */}
        <div className="py-16 px-6 md:px-20 max-w-[1600px]">
          <h2 className="font-heading text-4xl md:text-6xl font-bold">Selected Work</h2>
        </div>
        
        {/* 
          Instead of 'grid', we use 'flex' with 'transition-all' and 'duration-500'.
          - Mobile (flex-col): Stacked normally.
          - Desktop (lg:flex-row): Active left-to-right expanding columns.
        */}
        <div className="flex flex-col lg:flex-row min-h-[75vh] w-full overflow-hidden">
          
          {/* Column 1: Green */}
          <div className="bg-[#22C55E] text-white p-8 md:p-12 flex flex-col justify-between group 
            lg:flex-[1] lg:hover:flex-[1.8] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] 
            hover:bg-[#1ebd5a]">
            <ProjectCard 
              title="Aura Architecture" 
              category="Architecture"
              description="A minimal, structure-focused digital presence."
              imagePath="/assets/images/project-1.jpg" 
            />
          </div>

          {/* Column 2: Yellow */}
          <div className="bg-[#EAB308] text-black p-8 md:p-12 flex flex-col justify-between group 
            lg:flex-[1] lg:hover:flex-[1.8] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] 
            hover:bg-[#dba407]">
            <ProjectCard 
              title="Lumina Health" 
              category="Medical"
              description="Clean and accessible patient portal."
              imagePath="/assets/images/project-2.jpg" 
            />
          </div>

          {/* Column 3: Blue */}
          <div className="bg-[#3B82F6] text-white p-8 md:p-12 flex flex-col justify-between group 
            lg:flex-[1] lg:hover:flex-[1.8] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] 
            hover:bg-[#2563eb]">
            <ProjectCard 
              title="Nexus Platform" 
              category="SaaS"
              description="An enterprise-grade analytics dashboard."
              imagePath="/assets/images/project-1.jpg"
            />
          </div>

          {/* Column 4: Purple */}
          <div className="bg-[#A855F7] text-white p-8 md:p-12 flex flex-col justify-between group 
            lg:flex-[1] lg:hover:flex-[1.8] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] 
            hover:bg-[#9333ea]">
            <ProjectCard 
              title="Solstice Studio" 
              category="Agency"
              description="An immersive 3D experience website."
              imagePath="/assets/images/project-2.jpg"
            />
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-40 px-6 min-h-[80vh] flex flex-col items-center justify-center bg-subtle text-center">
        <h2 className="font-heading text-5xl md:text-8xl font-bold mb-12">
          Let’s build something amazing.
        </h2>
        <a href="mailto:hello@abigailgad.com" 
           className="relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-medium tracking-tighter text-white bg-foreground rounded-full group">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-accent rounded-full group-hover:w-72 group-hover:h-72"></span>
          <span className="relative text-xl">Get in touch</span>
        </a>
      </section>
    </main>
  )
}