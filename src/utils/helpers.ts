// Utilidades generales para el proyecto Humanic

/**
 * Formatea un nombre completo
 */
export function formatName(firstName: string, lastName: string, title?: string): string {
  const fullName = `${firstName} ${lastName}`;
  return title ? `${title} ${fullName}` : fullName;
}

/**
 * Formatea una fecha a formato legible
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

/**
 * Trunca un texto a una longitud máxima
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Genera un slug a partir de un string
 */
export function slugify(text: string): string {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

/**
 * Obtiene años únicos de un array de artículos o volúmenes
 */
export function getUniqueYears<T extends { year: number }>(items: T[]): number[] {
  return [...new Set(items.map(item => item.year))].sort((a, b) => b - a);
}

/**
 * Obtiene tags únicos de un array de artículos
 */
export function getUniqueTags<T extends { tags: string[] }>(items: T[]): string[] {
  const allTags = items.flatMap(item => item.tags);
  return [...new Set(allTags)].sort();
}

/**
 * Contador animado para estadísticas
 */
export function animateCounter(
  element: HTMLElement, 
  target: number, 
  duration: number = 2000
): void {
  const start = 0;
  const startTime = performance.now();
  
  function update(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (easeOutQuart)
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(start + (target - start) * easeOutQuart);
    
    element.textContent = current.toString();
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toString();
    }
  }
  
  requestAnimationFrame(update);
}

/**
 * Detecta si el usuario prefiere movimiento reducido
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Debounce function para eventos
 */
export function debounce<T extends (...args: any[]) => void>(
  func: T, 
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Intersection Observer helper para animaciones on scroll
 */
export function observeElements(
  selector: string, 
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit
): void {
  if (typeof window === 'undefined') return;
  
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(callback);
  }, defaultOptions);
  
  document.querySelectorAll(selector).forEach(el => observer.observe(el));
}
