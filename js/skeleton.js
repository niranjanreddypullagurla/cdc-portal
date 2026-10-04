/* ==========================================================================
   CDC Development Portal — Skeleton Loading Controller
   Renders glassmorphic skeleton markup and simulates a brief load delay
   during SPA view transitions (no backend — purely perceived-performance UX).
   ========================================================================== */

const CDC_SKELETON = (() => {

  /**
   * Returns skeleton markup for a card grid (programs, faculty teaser,
   * directory, or media grid).
   * @param {number} count
   * @param {string} cardClass - extra class for card sizing
   */
  function grid(count = 4, cardClass = "") {
    const cards = Array.from({ length: count })
      .map(() => `<div class="skeleton-block skeleton-card ${cardClass}"></div>`)
      .join("");
    return `<div class="skeleton-grid">${cards}</div>`;
  }

  /**
   * Returns skeleton markup for a hero/banner region plus a heading block.
   */
  function heroWithHeading() {
    return `
      <div class="skeleton-wrap">
        <div class="skeleton-block skeleton-heading"></div>
        <div class="skeleton-block skeleton-subheading"></div>
        <div class="skeleton-block skeleton-hero"></div>
      </div>
    `;
  }

  /**
   * Returns skeleton markup for the detail view (hero + two-column panels).
   */
  function detailLayout() {
    return `
      <div class="skeleton-wrap">
        <div class="skeleton-block skeleton-hero"></div>
        <div class="skeleton-grid" style="grid-template-columns: 1.6fr 1fr;">
          <div class="skeleton-block" style="height: 420px;"></div>
          <div class="skeleton-block" style="height: 420px;"></div>
        </div>
      </div>
    `;
  }

  /**
   * Renders a skeleton state into a target element, then invokes the
   * callback after `delay` ms to swap in real content. Returns nothing;
   * the callback is responsible for replacing target.innerHTML.
   * @param {HTMLElement} target
   * @param {string} skeletonHTML
   * @param {Function} renderReal
   * @param {number} delay
   */
  function simulate(target, skeletonHTML, renderReal, delay = 420) {
    if (!target) return;
    target.innerHTML = skeletonHTML;
    target.setAttribute("aria-busy", "true");
    window.setTimeout(() => {
      renderReal();
      target.setAttribute("aria-busy", "false");
    }, delay);
  }

  return { grid, heroWithHeading, detailLayout, simulate };
})();
