import React, { useEffect, useRef, useLayoutEffect } from 'react';
import Typed from 'typed.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { Download, Layout as LayoutIcon, Instagram, Github, Linkedin, ArrowLeft, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const el = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Hi, my name is',
        'Bonjour, je m\'appelle',
        'こんにちは、私の名前は',
        'Hallo, mein Name ist',
        'Hallo, mijn naam is',
        'Olá, o meu nome é',
        'Hola, me llamo',
        'Salve, il mio nome è',
        'Привіт, мене звати',
        'Bună ziua, numele meu este'
      ],
      typeSpeed: 20,
      showCursor: false,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // GSAP Animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({ 
        defaults: { ease: 'power3.out', clearProps: 'all' },
        delay: 0.2 // Small delay to ensure DOM is ready
      });
      heroTl
        .from('.hero-typed', { opacity: 0, duration: 0.6 })
        .from('.hero-counter', { opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.hero-name', { opacity: 0, duration: 0.8 }, '-=0.3')
        .from('.hero-tagline', { opacity: 0, duration: 0.8 }, '-=0.5')
        .from('.hero-desc', { opacity: 0, duration: 1 }, '-=0.4')
        .from('.hero-cta', { opacity: 0, duration: 0.6 }, '-=0.5')
        .from('.hero-social a, .hero-social span', {
          opacity: 0, y: 15, stagger: 0.1, duration: 0.4
        }, '-=0.3')
        .from('.tech-ui-element', {
          opacity: 0, scale: 0.8, stagger: 0.15, duration: 0.5
        }, '-=0.6');

      // ── About section scroll reveal ──
      gsap.from('.about-tag', {
        scrollTrigger: { trigger: '.about-tag', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 0, scale: 0.7, duration: 0.5
      });
      gsap.from('.about-title', {
        scrollTrigger: { trigger: '.about-title', start: 'top 85%' },
        opacity: 0, x: -40, duration: 0.8
      });
      gsap.from('.about-line', {
        scrollTrigger: { trigger: '.about-line', start: 'top 90%' },
        scaleX: 0, transformOrigin: 'left', duration: 1, ease: 'power2.out'
      });
      gsap.from('.about-text', {
        scrollTrigger: { trigger: '.about-text', start: 'top 85%' },
        opacity: 0, y: 30, duration: 0.8
      });
      gsap.from('.about-tech li', {
        scrollTrigger: { trigger: '.about-tech', start: 'top 85%' },
        opacity: 0, x: -15, stagger: 0.08, duration: 0.5, ease: 'power2.out'
      });
      gsap.from('.about-photo', {
        scrollTrigger: { trigger: '.about-photo', start: 'top 80%' },
        opacity: 0, scale: 0.85, rotation: -3, duration: 1.2, ease: 'power3.out'
      });

      // ── Projects section header ──
      gsap.from('.projects-tag', {
        scrollTrigger: { trigger: '.projects-tag', start: 'top 85%' },
        opacity: 0, y: -10, duration: 0.5
      });
      gsap.from('.projects-title', {
        scrollTrigger: { trigger: '.projects-title', start: 'top 85%' },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out'
      });
      gsap.from('.projects-hud', {
        scrollTrigger: { trigger: '.projects-hud', start: 'top 90%' },
        scaleX: 0, transformOrigin: 'left', duration: 1.2, ease: 'power2.out'
      });
      gsap.from('.projects-status', {
        scrollTrigger: { trigger: '.projects-status', start: 'top 85%' },
        opacity: 0, x: 30, duration: 0.6
      });
      // Swiper cards entrance
      gsap.from('.project-swiper .swiper-slide', {
        scrollTrigger: { trigger: '#built', start: 'top 70%' },
        opacity: 0, y: 60, stagger: 0.15, duration: 0.8, ease: 'power3.out'
      });

      // ── Achievement section ──
      gsap.from('.achv-header > *', {
        scrollTrigger: { trigger: '#achievement-section', start: 'top 95%' },
        opacity: 0, stagger: 0.12, duration: 0.6, clearProps: 'all'
      });
      gsap.from('.achv-card', {
        scrollTrigger: { trigger: '#achievement-section', start: 'top 90%' },
        opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out', clearProps: 'all'
      });
      gsap.from('.achv-cta', {
        scrollTrigger: { trigger: '#achievement-section', start: 'bottom bottom' },
        opacity: 0, duration: 0.6, clearProps: 'all'
      });

      // ── Contact section ──
      gsap.from('.contact-tag', {
        scrollTrigger: { trigger: '#contact', start: 'top 90%' },
        opacity: 0, scale: 0.7, duration: 0.5
      });
      gsap.from('.contact-title', {
        scrollTrigger: { trigger: '#contact', start: 'top 85%' },
        opacity: 0, y: 30, duration: 0.8
      });
      gsap.from('.contact-desc', {
        scrollTrigger: { trigger: '#contact', start: 'top 85%' },
        opacity: 0, duration: 1
      });
      gsap.from('.contact-btn', {
        scrollTrigger: { trigger: '#contact', start: 'top 90%' },
        opacity: 0, scale: 0.9, duration: 0.6
      });

      // ── Antenna looping animation ──
      gsap.to('.antenna-a', {
        height: 60, yoyo: true, repeat: -1, duration: 1.5, ease: 'sine.inOut'
      });
      gsap.to('.antenna-b', {
        height: 40, yoyo: true, repeat: -1, duration: 1.5, ease: 'sine.inOut', delay: 0.5
      });

      // Refresh ScrollTrigger after all animations are set up
      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 'PRJ-006',
      title: 'Advanced Logistics System',
      category: 'Logistics – Fullstack',
      date: '2025',
      image: '/img/project/WhatsApp Image 2026-04-24 at 11.29.21.jpeg',
      icons: ['/img/icon/laravel.svg', '/img/icon/tailwind-css-2.svg', '/img/icon/file-type-typescript-official.svg'],
      tag: '// LOGISTICS_CORE_OS'
    },
    {
      id: 'PRJ-007',
      title: 'Topup Roblox ',
      category: 'Dashboard – Front-End',
      date: '2025',
      image: '/img/project/Screenshot 2026-04-24 112954.png',
      icons: ['/img/icon/tailwind-css-2.svg', '/img/icon/file-type-typescript-official.svg', '/img/icon/golang-1.svg'],
      tag: '// INT_PORTAL_LOG'
    },
    {
      id: 'PRJ-001',
      title: 'Professional Certification Registration',
      category: 'Registration App – Fullstack',
      date: '2024',
      image: '/img/project/lsp.png',
      icons: ['/img/icon/laravel.svg', '/img/icon/bootstrap-5-1.svg'],
      tag: '// CERTIFICATION_LOG'
    },
    {
      id: 'PRJ-002',
      title: 'E-rooms',
      category: 'E-rooms – Fullstack',
      date: '2023',
      image: '/img/project/erooms.png',
      icons: ['/img/icon/laravel.svg', '/img/icon/bootstrap-5-1.svg'],
      tag: '// ROOM_MGMT_SYS'
    },
    {
      id: 'PRJ-003',
      title: 'Sisarpras',
      category: 'Sisarpras – Fullstack',
      date: '2023',
      image: '/img/project/sisarpras.png',
      icons: ['/img/icon/laravel.svg', '/img/icon/bootstrap-5-1.svg'],
      tag: '// ASSET_TRACK_LOG'
    },
    {
      id: 'PRJ-004',
      title: 'Unit-produksi',
      category: 'Unit-produksi – Back-End',
      date: '2024',
      image: '/img/project/up.png',
      icons: ['/img/icon/file-type-typescript-official.svg', '/img/icon/tailwind-css-2.svg', '/img/icon/golang-1.svg'],
      tag: '// PROD_UNIT_OS'
    },
    {
      id: 'PRJ-005',
      title: 'sematic webb',
      category: 'WEB smkn 1 jakarta – Fullstack',
      date: '2024',
      image: '/img/project/static.png',
      icons: ['/img/icon/figma.svg', '/img/icon/tailwind-css-2.svg'],
      tag: '// SEMANTIC_WEB_UI'
    }
  ];

  const achievements = [
    {
      id: 'ACHV-001',
      year: '2023',
      type: 'CERTIFICATE_ARCHIVE',
      title: 'Web peminjaman ruangan',
      image: '/img/achievement/sertifikat20231006_13571867_page-0001.jpg',
      tag: '// DICODING_JS_LOG'
    },
    {
      id: 'ACHV-002',
      year: '2023',
      type: 'CERTIFICATE_ARCHIVE',
      title: 'web peminjaman barang',
      image: '/img/achievement/WhatsApp Image 2024-03-04 at 15.07.12.jpeg',
      tag: '// SMK1_ASSET_LOG'
    },
    {
      id: 'ACHV-003',
      year: '2024',
      type: 'CERTIFICATE_ARCHIVE',
      title: 'Peserta liga Digital Nasional',
      image: '/img/achievement/Putra Praditya Hariyantoro - Sertifikat Tahap Basic Course Web Development - Liga Digital Nasional_page-0001.jpg',
      tag: '// SKILVUL_LDN_LOG'
    }
  ];

  return (
    <main ref={mainRef} className="bg-bgLight text-textLight">
      {/* Hero Section */}
      <section id="hero" className="relative flex justify-center pt-36 pb-32 lg:pt-44 lg:pb-48 overflow-hidden bg-hero-glow">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/scifi_landscape_background_1776868040207.png"
            alt="bg"
            className="w-full h-full object-cover opacity-10 grayscale brightness-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bgLight/50 via-bgLight/80 to-bgLight"></div>
        </div>

        {/* Decorative UI Elements */}
        <div className="tech-ui-element top-20 left-10 lg:left-20">LOC: 35.6895° N, 139.6917° E</div>
        <div className="tech-ui-element bottom-20 right-10 lg:right-20">SYSTEM_STATUS: ACTIVE</div>
        <div className="tech-ui-element top-1/2 left-4 -translate-y-1/2 [writing-mode:vertical-lr]">OS_VERSION_8.4.2</div>

        <div className="px-4 lg:px-32 xl:px-52 relative z-10 w-full">
          <div className="w-full relative">
            <p className="hero-typed text-base font-extralight text-textLight mb-5 lg:mb-10 h-5" ref={el}></p>

            <div className="hero-counter">
              <div className="w-14 h-2 bg-textLight"></div>
              <p className="font-bold lg:font-black font-tungsten text-6xl lg:text-7xl text-textLight/20 select-none">00.</p>
            </div>

            <h1 className="hero-name text-textLight font-tungsten text-5xl lg:text-8xl font-bold lg:font-black mb-2 uppercase glitch-hover">
              Putra Praditya Hariyantoro
            </h1>

            <h1 className="hero-tagline text-textLight/60 font-tungsten text-5xl lg:text-8xl font-bold lg:font-black mb-7 lg:mb-7 uppercase relative group">
              I create solutions from <span className="text-redval glitch-hover">coding</span>.
              <div className="absolute -left-4 top-0 w-1 h-full bg-redval opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </h1>

            <p className="hero-desc text-base text-paraVal lg:w-1/2 mb-9 leading-relaxed">
              Saya seorang <span className="font-bold text-textLight underline decoration-redval/30">Fullstack Web Developer</span> dari Jakarta,
              Indonesia. Saya menikmati logika dan struktur pemrograman dan selalu berusaha untuk menulis kode yang elegan dan efisien.
            </p>

            <div className="hero-cta flex flex-wrap gap-5 lg:gap-10 items-center">
              <div className="p-2 border border-black/10 relative">
                <Link to="/achievement" className="flex items-center relative buttonAnimate text-textLight font-bold px-10 py-3 border border-textLight hover:text-white group transition duration-300 ease-in-out overflow-hidden uppercase tracking-widest text-sm">
                  <LayoutIcon className="mr-4" size={24} /> Portfolio
                </Link>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="hero-social flex lg:flex-col lg:absolute lg:left-8 bottom-7 justify-start lg:justify-center items-center mt-10 lg:mt-0 gap-8">
            <a href="https://www.instagram.com/PutraDyta_/" target="_blank" className="text-textLight/40 hover:text-redval transition duration-300 hover:scale-110">
              <Instagram size={20} />
            </a>
            <a href="https://github.com/Putrapraditya" target="_blank" className="text-textLight/40 hover:text-redval transition duration-300 hover:scale-110">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/putra-praditya-h-1a03532b1/" target="_blank" className="text-textLight/40 hover:text-redval transition duration-300 hover:scale-110">
              <Linkedin size={20} />
            </a>
            <span className="bg-black/10 w-20 h-[1px] lg:w-[1px] lg:h-20"></span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pb-32 lg:pb-48 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.05] pointer-events-none select-none">
          <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#0F1923_10px,#0F1923_11px)]"></div>
        </div>

        <div className="px-4 lg:px-32 xl:px-52 lg:flex lg:gap-11 relative z-10">
          <div className="w-full">
            <div className="w-full flex items-center gap-5">
              <div className="about-tag tech-tag !bg-textLight !text-white text-[8px]">BIO_DATA</div>
              <h4 className="about-title font-bold lg:font-black font-tungsten text-textLight text-4xl lg:text-5xl uppercase glitch-hover">About me</h4>
              <span className="about-line w-1/2 h-[1px] bg-black/10 block lg:w-3/4"></span>
            </div>
            <p className="about-text mt-14 mb-7 text-paraVal leading-relaxed text-lg">
              Saya seorang <span className="text-redval font-bold">Backend-focused Fullstack Developer</span>. Saat ini pekerjaan saya lebih banyak di backend, terutama menangani logic kompleks, API, dan stabilitas sistem.
              <br /><br />
              Berikut beberapa teknologi yang sering saya gunakan:
            </p>
            <div className="about-tech flex gap-20">
              <ul className="text-textLight list-disc list-inside space-y-3 font-mono text-sm">
                {['Bootstrap', 'Tailwind CSS', 'Express.js', 'Laravel'].map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <ul className="text-textLight list-disc list-inside space-y-3 font-mono text-sm">
                {['PHP', 'TypeScript', 'Go', '.NET'].map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="about-photo w-full mt-16 lg:mt-0 relative group">
            <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] tech-bracket mx-auto relative bg-white shadow-xl">
              <div className="bracket-bottom"></div>
              <img src="/img/putra.jpeg" alt="Putra" className="absolute -left-7 -top-7 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute -right-4 -bottom-4 tech-tag !bg-redval !text-white px-6 py-2 shadow-lg">DEV_ID_2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="built" className="pb-48 overflow-hidden bg-white/30">
        <div className="container mx-auto px-4 relative">
          <div className="stroke font-tungsten text-7xl lg:text-[200px] absolute -top-20 right-0 uppercase opacity-10 select-none">
            Built
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-5">
            <div className="w-full lg:w-1/2">
              <div className="projects-tag tech-tag mb-4 !bg-textLight !text-white">PROJECT_ARCHIVE</div>
              <h4 className="projects-title font-bold lg:font-black font-tungsten text-textLight text-5xl lg:text-7xl uppercase glitch-hover">
                Field Operations
              </h4>
              <div className="projects-hud hud-line mt-4 w-full"></div>
            </div>
            <div className="projects-status hidden lg:block text-right">
              <p className="text-redval font-mono text-xs uppercase tracking-widest font-bold">System Status: Optimal</p>
              <p className="text-paraVal font-mono text-[10px] uppercase tracking-widest">Accessing encrypted archives...</p>
            </div>
          </div>

          <div className="relative group">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={40}
              slidesPerView={1}
              centeredSlides={false}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{
                clickable: true,
                el: '.custom-pagination',
                renderBullet: (index, className) => `<span class="${className} !w-12 !h-[2px] !rounded-none !bg-black/10 !mx-1 transition-all duration-300"></span>`
              }}
              navigation={{
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1280: { slidesPerView: 3 }
              }}
              className="!pb-24 project-swiper"
            >
              {projects.map((project, i) => (
                <SwiperSlide key={i}>
                  <div className="group tech-bracket bg-white transition-all duration-500 hover:-translate-y-2 border border-black/5 shadow-sm hover:shadow-xl">
                    <div className="bracket-bottom"></div>

                    <div className="p-4 border-b border-black/5 flex justify-between items-center bg-black/[0.02]">
                      <span className="text-redval font-mono text-[10px] tracking-widest font-bold">{project.id}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-redval animate-pulse"></div>
                        <span className="text-paraVal font-mono text-[10px]">{project.tag}</span>
                      </div>
                    </div>

                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        {project.icons.map((icon, j) => (
                          <div key={j} className="p-1.5 bg-white shadow-sm border border-black/5">
                            <img src={icon} alt="tech" className="w-4 h-4 grayscale group-hover:grayscale-0 transition duration-500" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-8 tech-border-y bg-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-black/5 uppercase select-none">
                        AUTH_REQUIRED
                      </div>
                      <h5 className="font-bold text-xl text-textLight mb-4 glitch-hover min-h-[3.5rem] leading-tight uppercase">
                        {project.title}
                      </h5>
                      <div className="flex justify-between items-end">
                        <div>
                          <h6 className="text-redval text-[10px] font-mono uppercase tracking-[0.2em] mb-1 font-bold">
                            Deployment Status
                          </h6>
                          <p className="text-paraVal text-xs uppercase tracking-tighter font-medium">
                            {project.category}
                          </p>
                        </div>
                        <span className="text-textLight font-mono text-xs border border-black/10 px-3 py-1 bg-black/5 font-bold">{project.date}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-black/5 flex justify-between items-center group-hover:bg-redval/5 transition-colors duration-300">
                      <div className="text-[10px] font-mono tracking-widest text-textLight/40 group-hover:text-redval transition-colors font-bold uppercase">Decrypt_Data</div>
                      <div className="flex gap-1">
                        {[1, 2, 3].map(bit => (
                          <div key={bit} className="w-1 h-3 bg-black/10 group-hover:bg-redval transition-colors"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <div className="absolute bottom-0 left-0 w-full flex justify-between items-center px-4 z-10">
              <div className="flex items-center gap-8">
                <button className="swiper-prev p-4 border border-black/10 hover:border-redval hover:text-redval transition-all duration-300 disabled:opacity-20 disabled:pointer-events-none rounded-full bg-white shadow-sm">
                  <ArrowLeft size={20} />
                </button>
                <div className="custom-pagination !static !w-auto flex items-center"></div>
                <button className="swiper-next p-4 border border-black/10 hover:border-redval hover:text-redval transition-all duration-300 disabled:opacity-20 disabled:pointer-events-none rounded-full bg-white shadow-sm">
                  <ArrowRight size={20} />
                </button>
              </div>
              <div className="hidden lg:block h-[1px] flex-grow bg-black/5 mx-10"></div>
              <div className="text-paraVal font-mono text-[10px] tracking-[0.5em] hidden lg:block uppercase font-bold">
                Endfield_Protocol_Active
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section id="achievement-section" className="pb-48 relative overflow-hidden bg-bgLight">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="h-full w-full bg-[linear-gradient(rgba(15,25,35,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(15,25,35,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="achv-header flex flex-col items-center mb-20">
            <div className="tech-tag mb-4 !bg-redval !text-white">INTEL_ARCHIVE</div>
            <h4 className="font-bold lg:font-black font-tungsten text-textLight text-5xl lg:text-7xl text-center uppercase glitch-hover">
              Noteworthy <span className="text-redval">Pioneer Logs</span>
            </h4>
            <div className="hud-line mt-6 w-32"></div>
          </div>

          <div className="achv-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
            {achievements.map((item, i) => (
              <div key={i} className="achv-card group tech-bracket bg-white p-6 transition-all duration-500 hover:shadow-2xl border border-black/5">
                <div className="bracket-bottom"></div>

                <div className="relative overflow-hidden aspect-[4/3] mb-8 grayscale hover:grayscale-0 transition-all duration-700 shadow-inner">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-105" />
                  <div className="element-animate"></div>
                  <div className="absolute top-4 left-4 tech-tag !bg-textLight !text-white text-[8px]">{item.id}</div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-black/5 pb-2">
                    <p className="text-[10px] font-mono text-paraVal font-bold">{item.year}</p>
                    <p className="text-[10px] font-mono text-redval tracking-widest font-bold">{item.type}</p>
                  </div>
                  <h4 className="font-bold text-xl uppercase text-textLight glitch-hover leading-tight min-h-[3rem]">
                    {item.title}
                  </h4>
                  <div className="text-[10px] font-mono text-textLight/40 font-bold uppercase tracking-tighter">{item.tag}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="achv-cta flex justify-center">
            <Link to="/achievement" className="buttonAnimate relative text-textLight w-80 py-5 px-12 border-2 border-textLight text-center block hover:text-white transition-all duration-500 font-mono tracking-widest uppercase text-sm font-bold bg-white shadow-xl hover:bg-textLight">
              Access Full Database
            </Link>
          </div>

          <div className="stroke font-tungsten text-7xl lg:text-[250px] absolute -bottom-20 -left-[10%] uppercase -z-10 opacity-10 select-none">
            Archives
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pb-40 relative overflow-hidden bg-radial-gradient">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/scifi_tech_detail_background_1776868063300.png"
            alt="bg"
            className="w-full h-full object-cover opacity-5 grayscale brightness-150"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bgLight via-bgLight/90 to-bgLight"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="contact-tag tech-tag mb-6 !bg-textLight !text-white">SIGNAL_BROADCAST</div>

          <h1 className="contact-title font-bold lg:font-black font-tungsten text-textLight text-7xl lg:text-8xl mb-10 uppercase glitch-hover">
            Get in touch
          </h1>

          <p className="contact-desc max-w-2xl mx-auto mb-20 text-paraVal text-lg leading-relaxed font-medium">
            ............
          </p>

          <div className="contact-btn flex justify-center relative group">
            <div className="absolute -inset-4 border border-redval/20 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"></div>
            <a href="https://www.instagram.com/PutraDyta_/" className="px-16 py-5 text-white font-bold bg-textLight inline-block w-80 transition-all duration-300 relative z-10 shadow-2xl hover:bg-redval hover:-translate-y-1 uppercase tracking-widest text-sm">
              Say Hello
            </a>
          </div>

          <div className="mt-40 flex justify-center gap-12 opacity-20">
            <div className="antenna-a flex flex-col items-center" style={{ height: 40 }}>
              <div className="w-1.5 h-full bg-textLight mb-3"></div>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold">Antenna_A</span>
            </div>
            <div className="antenna-b flex flex-col items-center" style={{ height: 60 }}>
              <div className="w-1.5 h-full bg-redval mb-3"></div>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold">Antenna_B</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
