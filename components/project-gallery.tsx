"use client";

import { useState } from "react";
import { ArrowUpRight, Github, Code2 } from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/portfolio";
import { PixelIcon } from "@/components/pixel-art";

const filters = ["All projects", "Web apps", "Branding", "Experiments"] as const;
type Filter = typeof filters[number];
const category: Record<number, Filter> = { 1: "Web apps", 2: "Web apps", 3: "Experiments", 4: "Web apps", 5: "Branding", 6: "Branding", 7: "Experiments" };
const screenshots: Record<number, string> = { 1: "/images/travelwind.webp", 2: "/images/learnify.webp", 4: "/images/movies.webp" };
const covers: Record<number, { icon: string; title: string; caption: string; theme: string }> = {
  1: { icon: "gem", title: "TravelWind", caption: "Your next adventure awaits.", theme: "travel" },
  2: { icon: "chest", title: "Learnify", caption: "A new world of knowledge.", theme: "learn" },
  3: { icon: "pickaxe", title: "RFID SYSTEM", caption: "Connect. Scan. Check in.", theme: "rfid" },
  4: { icon: "gem", title: "MOVIE LIST", caption: "Find your next favorite story.", theme: "movie" },
  5: { icon: "chest", title: "SARI GADING", caption: "Good food. Great company.", theme: "food" },
  6: { icon: "pickaxe", title: "SUMBER MAKMUR", caption: "Growing together.", theme: "farm" },
  7: { icon: "sword", title: "THE LABORATORY", caption: "Build. Break. Learn. Repeat.", theme: "lab" },
};

export function ProjectGallery() {
  const [filter, setFilter] = useState<Filter>("All projects");
  const shown = projects.filter((project) => filter === "All projects" || category[project.id] === filter);

  return (
    <>
      <div className="gallery-toolbar">
        <div className="project-filters" role="group" aria-label="Filter project">
          {filters.map((item) => <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={`filter-button ${filter === item ? "selected" : ""}`}>{item}</button>)}
        </div>
        <span className="project-count" role="status" aria-live="polite">{shown.length} builds in inventory</span>
      </div>
      <div className="project-grid">
        {shown.map((project) => {
          const cover = covers[project.id];
          return (
            <article className={`project-card ${project.id === 7 && filter === "All projects" ? "is-lab" : ""}`} key={project.id}>
              <a className="item-frame" href={project.demoLink ?? project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`Buka ${project.title}${project.demoLink ? " demo" : " di GitHub"}`}>
                <span className="frame-corner top-left" /><span className="frame-corner top-right" /><span className="frame-corner bottom-left" /><span className="frame-corner bottom-right" />
                <div className={`project-cover cover-${cover.theme}`}>
                  {screenshots[project.id] ? <Image src={screenshots[project.id]} alt={`Tampilan website ${project.title}`} fill sizes="(max-width: 600px) calc(100vw - 58px), (max-width: 900px) 45vw, 340px" className="project-screenshot" /> : <>
                  <div className="cover-grid" />
                  <span className="cover-label">{category[project.id]}</span>
                  <PixelIcon name={cover.icon} className="cover-item" />
                  <strong>{cover.title}</strong>
                  <span className="cover-caption">{cover.caption}</span>
                  <div className="cover-ground" />
                  </>}
                </div>
                <span className="frame-open"><ArrowUpRight size={17} /></span>
              </a>
              <div className="project-info">
                <span className="project-kind">{category[project.id]}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links">
                  {project.demoLink ? <a href={project.demoLink} target="_blank" rel="noopener noreferrer">View project <ArrowUpRight size={15} /></a> : <span className="source-only"><Code2 size={14} /> Source available</span>}
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`Source code ${project.title}`}><Github size={16} /> Code</a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
