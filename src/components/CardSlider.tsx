import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CardSliderProps<T> {
  items: T[];
  renderItem: (item: T, index: number, isCurrent: boolean) => React.ReactNode;
  ariaLabel: string;
  maxDesktopColumns?: 1 | 2 | 3;
  prevLabel?: string;
  nextLabel?: string;
  slideLabel?: string;
  ofLabel?: string;
  className?: string;
  cardClassName?: string;
}

export function CardSlider<T>({
  items,
  renderItem,
  ariaLabel,
  maxDesktopColumns = 3,
  prevLabel = 'Previous slide',
  nextLabel = 'Next slide',
  slideLabel = 'Slide',
  ofLabel = 'of',
  className = '',
  cardClassName = '',
}: CardSliderProps<T>) {
  const count = items.length;

  // Responsive visible count detection
  const [visibleCount, setVisibleCount] = useState<number>(() => {
    if (typeof window === 'undefined') return 1;
    const w = window.innerWidth;
    if (w < 640) return 1;
    if (w < 1024) return Math.min(2, Math.max(1, count));
    return Math.min(maxDesktopColumns, Math.max(1, count));
  });

  const [reduceMotion, setReduceMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const updateVisibleCount = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setVisibleCount(1);
      } else if (w < 1024) {
        setVisibleCount(Math.min(2, Math.max(1, count)));
      } else {
        setVisibleCount(Math.min(maxDesktopColumns, Math.max(1, count)));
      }
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMotionChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    mediaQuery.addEventListener?.('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', updateVisibleCount);
      mediaQuery.removeEventListener?.('change', handleMotionChange);
    };
  }, [count, maxDesktopColumns]);

  // If there are no items or only 1 item, display centered without slider mechanics
  const isSlideable = count > 1;

  // 5 sets buffer for seamless infinite loop (Set 0, 1, 2, 3, 4)
  // Middle set (Set 2) starts at index 2 * count
  const [currentIndex, setCurrentIndex] = useState<number>(() => (isSlideable ? 2 * count : 0));
  const [isTransitionEnabled, setIsTransitionEnabled] = useState<boolean>(true);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // Drag / touch state
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartX = useRef<number>(0);
  const isPointerDown = useRef<boolean>(false);
  const hasMovedEnough = useRef<boolean>(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Sync index if items count changes
  useEffect(() => {
    if (isSlideable) {
      setCurrentIndex(2 * count);
      setIsTransitionEnabled(false);
    }
  }, [count, isSlideable]);

  // Animation lock safety watchdog (prevents animation lock if onTransitionEnd is dropped)
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Re-enable transition after silent position reset
  useEffect(() => {
    if (!isTransitionEnabled) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitionEnabled(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitionEnabled]);

  const realIndex = isSlideable ? ((currentIndex % count) + count) % count : 0;

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (!isSlideable || isAnimating) return;
    setIsAnimating(true);
    setIsTransitionEnabled(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isSlideable, isAnimating]);

  const handlePrev = useCallback(() => {
    if (!isSlideable || isAnimating) return;
    setIsAnimating(true);
    setIsTransitionEnabled(true);
    setCurrentIndex((prev) => prev - 1);
  }, [isSlideable, isAnimating]);

  const handleGoTo = useCallback(
    (targetRealIndex: number) => {
      if (!isSlideable || isAnimating || targetRealIndex === realIndex) return;

      let diff = targetRealIndex - realIndex;
      if (diff > count / 2) diff -= count;
      if (diff < -count / 2) diff += count;

      setIsAnimating(true);
      setIsTransitionEnabled(true);
      setCurrentIndex((prev) => prev + diff);
    },
    [isSlideable, isAnimating, realIndex, count]
  );

  // Transition End & silent reset
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== trackRef.current) return;
    setIsAnimating(false);

    // Keep currentIndex strictly within middle set [2*count, 3*count - 1]
    if (currentIndex >= 3 * count) {
      setIsTransitionEnabled(false);
      setCurrentIndex((prev) => prev - count);
    } else if (currentIndex < 2 * count) {
      setIsTransitionEnabled(false);
      setCurrentIndex((prev) => prev + count);
    }
  };

  // Pointer / Touch gestures
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isSlideable || e.button !== 0 || isAnimating) return;
    isPointerDown.current = true;
    dragStartX.current = e.clientX;
    hasMovedEnough.current = false;
    setDragOffset(0);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown.current) return;
    const diff = e.clientX - dragStartX.current;
    if (Math.abs(diff) > 6) {
      hasMovedEnough.current = true;
      setIsDragging(true);
      setDragOffset(diff);
    }
  };

  const onPointerUp = () => {
    if (!isPointerDown.current) return;
    isPointerDown.current = false;
    setIsDragging(false);

    if (Math.abs(dragOffset) > 50) {
      if (dragOffset < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setDragOffset(0);

    if (hasMovedEnough.current) {
      setTimeout(() => {
        hasMovedEnough.current = false;
      }, 120);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  // If only 1 item or not slideable, render clean centered layout
  if (!isSlideable) {
    return (
      <div className={`w-full flex justify-center ${className}`}>
        {items.map((item, idx) => (
          <div key={idx} className={`w-full max-w-md ${cardClassName}`}>
            {renderItem(item, idx, true)}
          </div>
        ))}
      </div>
    );
  }

  // Build duplicated buffer (5 sets)
  const repeatedSets = [0, 1, 2, 3, 4];
  const stepPercent = 100 / visibleCount;
  const baseTranslate = -(currentIndex * stepPercent);

  const transitionStyle = reduceMotion
    ? 'none'
    : isTransitionEnabled && !isDragging
      ? 'transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1)'
      : 'none';

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
      className={`relative w-full focus:outline-none ${className}`}
      tabIndex={0}
    >
      {/* Outer Slider Window */}
      <div
        className="relative overflow-hidden py-4 -my-4 touch-pan-y select-none cursor-grab active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onClickCapture={(e) => {
          if (hasMovedEnough.current) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        {/* Sliding Track */}
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(calc(${baseTranslate}% + ${dragOffset}px))`,
            transition: transitionStyle,
          }}
          className="flex flex-row will-change-transform"
        >
          {repeatedSets.map((setIdx) =>
            items.map((item, itemIdx) => {
              const globalIdx = setIdx * count + itemIdx;
              const isCurrent = (globalIdx % count) === realIndex;
              return (
                <div
                  key={`${setIdx}-${itemIdx}`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${slideLabel} ${itemIdx + 1} ${ofLabel} ${count}`}
                  style={{ width: `${stepPercent}%` }}
                  className="flex-shrink-0 px-3 sm:px-3.5 flex flex-col"
                >
                  <div className={`h-full w-full flex flex-col ${cardClassName}`}>
                    {renderItem(item, itemIdx, isCurrent)}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Floating Side Arrow Controls */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label={prevLabel}
        className="absolute -left-3 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center glass-strong text-stone-800 dark:text-stone-200 border border-stone-900/10 dark:border-white/10 shadow-card dark:shadow-card-dark hover:border-brand-500/50 hover:text-brand-600 dark:hover:text-brand-300 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label={nextLabel}
        className="absolute -right-3 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center glass-strong text-stone-800 dark:text-stone-200 border border-stone-900/10 dark:border-white/10 shadow-card dark:shadow-card-dark hover:border-brand-500/50 hover:text-brand-600 dark:hover:text-brand-300 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Bottom Controls: Pagination Dots + Slide Counter Pill */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {items.map((_, dotIdx) => {
            const isActive = dotIdx === realIndex;
            return (
              <button
                key={dotIdx}
                type="button"
                onClick={() => handleGoTo(dotIdx)}
                aria-label={`${slideLabel} ${dotIdx + 1}`}
                aria-current={isActive ? 'true' : undefined}
                className={`transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                  isActive
                    ? 'w-8 h-2.5 rounded-full bg-brand-600 dark:bg-brand-400 shadow-sm'
                    : 'w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-700 hover:bg-stone-400 dark:hover:bg-stone-500'
                }`}
              />
            );
          })}
        </div>

        {/* Slide Counter Badge */}
        <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full glass-soft text-stone-600 dark:text-stone-400 border border-stone-900/5 dark:border-white/5 select-none">
          {String(realIndex + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}
