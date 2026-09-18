import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { PortfolioNav } from "@/components/portfolio-nav";
import { ProjectGallery } from "@/components/project-gallery";
import { ExperienceBar, PixelIcon, Zombie } from "@/components/pixel-art";
import { profile, skills } from "@/lib/portfolio";

function SocialLinks() {
  return <div className="social-links">
    <a href={profile.github} target="_blank" rel="noopener noreferrer" className="square-button" aria-label="GitHub Agung Gihon"><Github size={18} /></a>
    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="square-button social-linkedin" aria-label="LinkedIn Agung Gihon"><Linkedin size={18} /></a>
    <a href={`mailto:${profile.email}`} className="square-button social-mail" aria-label={`Kirim email ke ${profile.email}`}><Mail size={18} /></a>
  </div>;
}

export default function Portfolio() {
  return (
    <>
      <a href="#main-content" className="skip-link">Lewati ke konten utama</a>
      <PortfolioNav />
      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-heading">
          <div className="hero-world" aria-hidden="true" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content content-width">
            <div className="hero-character">
              <div className="player-name">gihonhon <span>◆</span></div>
              <Zombie />
              <div className="character-caption">Your friendly neighborhood dev.</div>
            </div>
            <div className="hero-copy">
              <span className="hello-label">HELLO, WORLD!</span>
              <h1 id="hero-heading">I&apos;M AGUNG<br />GIHON.</h1>
              <p className="hero-role">Web developer. Lifelong learner.</p>
              <p className="hero-description">Merakit ide menjadi pengalaman digital.<br />Satu baris kode, satu blok, satu petualangan baru.</p>
              <div className="hero-actions">
                <a className="block-button green-button" href="#projects"><PixelIcon name="pickaxe" /> Explore my work</a>
                <a className="block-button stone-button" href="#contact">Let&apos;s talk <ArrowUpRight size={16} /></a>
              </div>
            </div>
          </div>
          <div className="hero-hud content-width">
            <div className="health-bar" role="img" aria-label="Semangat belajar penuh. Always learning, always building.">{Array.from({ length: 10 }, (_, i) => <PixelIcon key={i} name="heart" />)}<span>Always learning. Always building.</span></div>
            <a href="#projects" className="scroll-hint">Scroll to explore <ArrowDown size={14} /></a>
          </div>
          <div className="grass-edge" aria-hidden="true" />
        </section>

        <section id="projects" className="projects-section section-spacing content-width" aria-labelledby="projects-heading">
          <div className="section-heading">
            <div><div className="heading-with-icon"><PixelIcon name="chest" /><h2 id="projects-heading">MY CREATIONS</h2></div><p>Ide, eksperimen, dan hal-hal yang saya bangun.</p></div>
            <SocialLinks />
          </div>
          <ProjectGallery />
          <a className="more-projects" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17} /> More adventures on GitHub <ArrowUpRight size={16} /></a>
        </section>

        <section id="about" className="about-section" aria-labelledby="about-heading">
          <div className="content-width section-spacing">
            <div className="about-grid">
              <div className="player-card">
                <div className="player-card-title"><span>PLAYER PROFILE</span><span className="online-dot" /></div>
                <div className="player-portrait"><div className="portrait-grid" /><Zombie /><span className="player-level">KEEP EXPLORING</span></div>
                <div className="player-details"><strong>Agung Gihon</strong><span>@gihonhon</span><div className="player-class"><PixelIcon name="sword" /> Class: Web Developer</div></div>
              </div>
              <div className="about-copy">
                <div className="heading-with-icon"><PixelIcon name="face" /><h2 id="about-heading">BEHIND THE BLOCKS</h2></div>
                <h3>A curious mind.<br />An inventory full of ideas.</h3>
                <p>Saya adalah mahasiswa Informatika yang sedang mendalami Fullstack Web Development. Saat ini saya fokus mempelajari React, Next.js, Node.js, dan database untuk membangun aplikasi web yang fungsional dan menarik.</p>
                <p>Seperti membangun dunia dari blok-blok kecil, saya percaya hal besar dimulai dari rasa ingin tahu dan keberanian mencoba. Setiap project adalah tempat untuk belajar, bereksperimen, dan naik level.</p>
                <div className="about-stats"><div><strong>10<span>+</span></strong><span>Proyek belajar & showcase</span></div><div><strong>2<span>+</span></strong><span>Tahun mengeksplorasi web</span></div></div>
                <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">Get to know me on GitHub <ArrowUpRight size={16} /></a>
              </div>
            </div>
            <div id="skills" className="skills-section" aria-labelledby="skills-heading">
              <div className="section-heading"><div><div className="heading-with-icon"><PixelIcon name="pickaxe" /><h2 id="skills-heading">MY TOOLKIT</h2></div><p>Tools yang menemani setiap petualangan.</p></div><span className="toolkit-note">Still gaining XP...</span></div>
              <div className="skills-grid">
                {skills.map(skill => <article className="skill-card" key={skill.name}><div className="skill-icon"><PixelIcon name={skill.icon} /></div><h3>{skill.name}</h3><p>{skill.description}</p><div className="skill-progress-label"><span>Learning progress</span><span>{skill.level}%</span></div><ExperienceBar level={skill.level} label={`Progress belajar ${skill.name}`} /></article>)}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-spacing content-width" aria-labelledby="contact-heading">
          <div className="contact-build" aria-hidden="true"><PixelIcon name="gem" /></div>
          <span className="contact-kicker">NEXT QUEST?</span>
          <h2 id="contact-heading">LET&apos;S BUILD<br />SOMETHING COOL.</h2>
          <p>Punya ide, project, atau sekadar ingin menyapa?<br />Inventory saya selalu punya tempat untuk kolaborasi baru.</p>
          <a className="block-button green-button contact-cta" href={`mailto:${profile.email}`}><Mail size={18} /> Say hello</a>
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <div className="contact-socials"><a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></a></div>
        </section>
      </main>
      <footer className="site-footer"><div className="content-width"><a href="#home" className="footer-brand"><PixelIcon name="face" /> GIHONHON.DEV</a><p>Crafted with curiosity. One block at a time.</p><span>© {new Date().getFullYear()} Agung Gihon</span><a href="#home" className="back-to-top" aria-label="Kembali ke atas">↑</a></div></footer>
    </>
  );
}
