import React, { useRef, useEffect, useState, useCallback, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Sparkles } from 'lucide-react';
import './AccordionGallery.css';

export interface AccordionGalleryItemData {
  image: string;
  label?: string;
  shortLabel?: string;
  tag?: string;
  tagline?: string;
  desc?: string;
  stats?: { label: string; value: string }[];
  recommendedSeries?: string[];
  link?: string;
  alt?: string;
  icon?: React.ElementType;
}

export interface AccordionGalleryProps {
  items: AccordionGalleryItemData[];
  defaultIndex?: number;
  accentColor?: string;
  overlayColor?: string;
  textColor?: string;
  height?: number;
  gap?: number;
  radius?: number;
  expandRatio?: number;
  orientation?: 'horizontal' | 'vertical';
  duration?: number;
  ease?: string;
  parallax?: number;
  tilt?: number;
  stagger?: number;
  trigger?: 'hover' | 'click';
  showLabels?: boolean;
  grayscale?: boolean;
  className?: string;
}

export const AccordionGallery: React.FC<AccordionGalleryProps> = ({
  items,
  defaultIndex = 0,
  accentColor = '#dc2626',
  overlayColor = '#080d16',
  textColor = '#ffffff',
  height = 540,
  gap = 14,
  radius = 28,
  expandRatio = 0.58,
  orientation = 'horizontal',
  duration = 0.6,
  ease = 'power3.out',
  parallax = 0.4,
  tilt = 5,
  stagger = 0.05,
  trigger = 'hover',
  showLabels = true,
  grayscale = false,
  className = ''
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);
  const mediaRefs = useRef<(HTMLElement | null)[]>([]);
  const activeContentRefs = useRef<(HTMLElement | null)[]>([]);
  const collapsedLabelRefs = useRef<(HTMLElement | null)[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const firstRunRef = useRef<boolean>(true);
  const mediaSizeRef = useRef<number>(560);

  const vertical = orientation === 'vertical';
  const count = items.length;
  const [active, setActive] = useState<number>(Math.min(Math.max(defaultIndex, 0), count - 1));

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const applyLayout = useCallback(
    (animate: boolean) => {
      const panels = panelRefs.current;
      if (!panels.length) return;

      const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;
      const mediaSize = mediaSizeRef.current;

      tlRef.current?.kill();
      const dur = animate && !prefersReduced ? duration : 0;
      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = i === active;
        const media = mediaRefs.current[i];
        const activeContent = activeContentRefs.current[i];
        const collapsedLabel = collapsedLabelRefs.current[i];

        const rot = isActive ? 0 : i < active ? tilt : -tilt;
        const rotProp = vertical ? { rotateX: -rot } : { rotateY: rot };

        tl.to(panel, { flexGrow: isActive ? grow : 1, ...rotProp, duration: dur, ease }, 0);

        if (media) {
          const drift = Math.max(-1.5, Math.min(1.5, active - i));
          const shift = drift * parallax * mediaSize * 0.06;
          const gray = grayscale ? (isActive ? 0 : 1) : 0;
          tl.to(
            media,
            {
              xPercent: -50,
              yPercent: -50,
              x: vertical ? 0 : isActive ? 0 : shift,
              y: vertical ? (isActive ? 0 : shift) : 0,
              '--ag-gray': gray,
              '--ag-dim': isActive ? 0 : 0.45,
              duration: dur,
              ease
            },
            0
          );
        }

        // Active expanded content visibility
        if (activeContent) {
          if (isActive) {
            tl.to(
              activeContent,
              {
                opacity: 1,
                y: 0,
                pointerEvents: 'auto',
                visibility: 'visible',
                duration: dur,
                delay: prefersReduced ? 0 : 0.05,
                ease
              },
              0
            );
          } else {
            tl.to(
              activeContent,
              {
                opacity: 0,
                y: 16,
                pointerEvents: 'none',
                visibility: 'hidden',
                duration: dur * 0.4,
                ease
              },
              0
            );
          }
        }

        // Collapsed label visibility
        if (collapsedLabel) {
          if (isActive) {
            tl.to(collapsedLabel, { opacity: 0, pointerEvents: 'none', duration: dur * 0.3, ease }, 0);
          } else {
            tl.to(collapsedLabel, { opacity: 1, pointerEvents: 'auto', duration: dur, delay: prefersReduced ? 0 : 0.1, ease }, 0);
          }
        }
      });

      tlRef.current = tl;
    },
    [
      active,
      count,
      expandRatio,
      duration,
      ease,
      vertical,
      tilt,
      parallax,
      grayscale,
      prefersReduced
    ]
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const total = vertical ? rect.height : rect.width;
      const usable = Math.max(total - gap * (count - 1), 120);
      const size = Math.max(160, usable * Math.min(Math.max(expandRatio, 0.2), 0.9) * 1.25);
      mediaSizeRef.current = size;
      el.style.setProperty('--ag-media-size', `${size}px`);
      applyLayout(!firstRunRef.current);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [applyLayout, gap, count, expandRatio, vertical]);

  useEffect(() => {
    applyLayout(!firstRunRef.current);
    firstRunRef.current = false;
  }, [applyLayout]);

  useEffect(() => {
    return () => {
      tlRef.current?.kill();
    };
  }, []);

  const handleEnter = (i: number) => {
    if (trigger === 'hover') setActive(i);
  };

  const handleClick = (i: number, e: React.MouseEvent) => {
    if (i !== active) {
      e.preventDefault();
      setActive(i);
    }
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`accordion-gallery${vertical ? ' accordion-gallery--vertical' : ''}${className ? ` ${className}` : ''}`}
      style={{
        '--ag-accent': accentColor,
        '--ag-overlay': overlayColor,
        '--ag-text': textColor,
        '--ag-gap': `${gap}px`,
        '--ag-radius': `${radius}px`,
        height: vertical ? `${Math.round(height * 1.6)}px` : `${height}px`
      } as React.CSSProperties}
      role="list"
      aria-label="Interactive sector gallery"
    >
      {items.map((item, i) => {
        const isActive = i === active;
        const Icon = item.icon;

        return (
          <div
            key={i}
            ref={(el) => {
              panelRefs.current[i] = el;
            }}
            className={`ag-panel${isActive ? ' ag-panel--active' : ''}`}
            style={{ borderRadius: `${radius}px` }}
            onClick={e => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => setActive(i)}
            onKeyDown={e => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
            aria-label={item.label}
          >
            {/* Background Media Frame */}
            <span className="ag-panel__frame">
              <span 
                className="ag-panel__media" 
                ref={(el) => {
                  mediaRefs.current[i] = el;
                }}
              >
                <img src={item.image} alt={item.alt || item.label || ''} draggable="false" />
              </span>
              <span className="ag-panel__overlay" aria-hidden="true" />
            </span>

            {/* COLLAPSED STATE: Clean Icon & Vertical Title */}
            <div
              ref={(el) => {
                collapsedLabelRefs.current[i] = el;
              }}
              className="ag-panel__collapsed-label"
            >
              {Icon && (
                <div className="w-10 h-10 rounded-xl bg-slate-900/90 text-white flex items-center justify-center border border-white/20 shadow-md">
                  <Icon className="w-5 h-5 text-red-400" />
                </div>
              )}
              <span className="ag-panel__collapsed-badge">
                0{i + 1} • {item.shortLabel || item.label}
              </span>
            </div>

            {/* ACTIVE EXPANDED STATE: Full Clean Layout */}
            <div
              ref={(el) => {
                activeContentRefs.current[i] = el;
              }}
              className="ag-panel__active-content"
            >
              

              {/* Bottom Content Area */}
              <div className="space-y-4 w-full pt-6">
                {/* Red Accent Stripe & Main Title */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="ag-panel__bar" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-400">
                      Sector 0{i + 1} Solutions
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
                    {item.label}
                  </h3>

                  {item.tagline && (
                    <p className="text-xs text-slate-300 font-medium line-clamp-1">
                      {item.tagline}
                    </p>
                  )}
                </div>

                {/* Description */}
                {item.desc && (
                  <p className="text-xs text-slate-300 leading-relaxed font-normal line-clamp-2 sm:line-clamp-3">
                    {item.desc}
                  </p>
                )}

                {/* 3-Column Performance Stats Matrix */}
                {item.stats && item.stats.length > 0 && (
                  <div className="grid grid-cols-3 gap-2.5 pt-1">
                    {item.stats.map((st, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-slate-950/70 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 border border-white/10 text-center shadow-xs"
                      >
                        <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider truncate">
                          {st.label}
                        </span>
                        <span className="text-xs sm:text-sm font-black text-white mt-0.5 block truncate">
                          {st.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Recommended Series Chips & Action Link */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  {item.recommendedSeries && item.recommendedSeries.length > 0 && (
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                        Recommended Series:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.recommendedSeries.map((s, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-white/15 backdrop-blur-md text-white text-[10px] font-bold border border-white/10"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.link && (
                    <a
                      href={item.link}
                      className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-black text-xs transition-colors shadow-lg pointer-events-auto inline-flex items-center justify-center gap-2 shrink-0 ml-auto"
                    >
                      <span>Explore Series</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccordionGallery;
