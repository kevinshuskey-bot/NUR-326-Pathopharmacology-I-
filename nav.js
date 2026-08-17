// NUR 326-201 Study Guide — shared nav behavior

const SITE_PAGES = [
  {title:"Home", url:"index.html"},
  {title:"Must Know Quick Reference", url:"exam-hints.html"},
  {title:"Build Your Own Exam", url:"quiz-builder.html"},
  {title:"The Torture Chamber", url:"torture-chamber.html"},
  {title:"Antimicrobial Principles", url:"week1-antimicrobial-principles.html"},
  {title:"Beta-Lactams & Vancomycin", url:"week1-cell-wall-agents.html"},
  {title:"Protein/DNA/Folate Synthesis Inhibitors", url:"week1-protein-dna-synthesis.html"},
  {title:"Antiviral Pharmacology", url:"week1-antivirals.html"},
  {title:"HIV: Patho & Pharmacology", url:"week1-hiv.html"},
];

// ---------- dropdowns ----------
document.querySelectorAll('.dropdown').forEach(dd => {
  const trigger = dd.querySelector('.navlink');
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const wasOpen = dd.classList.contains('open');
    document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
    if(!wasOpen) dd.classList.add('open');
  });
});
document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
});

// ---------- dark mode ----------
const darkKey = 'nur326-dark-mode';
function applyDarkMode(on){
  document.documentElement.classList.toggle('dark', on);
  const btn = document.getElementById('dark-toggle');
  if(btn) btn.innerHTML = on ? SUN_ICON : MOON_ICON;
}
const MOON_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
const SUN_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';

(function initDark(){
  const saved = localStorage.getItem(darkKey);
  applyDarkMode(saved === '1');
})();

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('dark-toggle');
  if(btn){
    applyDarkMode(document.documentElement.classList.contains('dark'));
    btn.addEventListener('click', () => {
      const on = !document.documentElement.classList.contains('dark');
      applyDarkMode(on);
      localStorage.setItem(darkKey, on ? '1' : '0');
    });
  }

  // ---------- search ----------
  const searchBtn = document.getElementById('search-toggle');
  const overlay = document.getElementById('search-overlay');
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');

  function renderResults(query){
    const q = query.trim().toLowerCase();
    const list = q === '' ? SITE_PAGES : SITE_PAGES.filter(p => p.title.toLowerCase().includes(q));
    if(list.length === 0){
      results.innerHTML = '<div class="none">No pages match.</div>';
      return;
    }
    results.innerHTML = list.map(p => '<a href="'+p.url+'">'+p.title+'</a>').join('');
  }

  if(searchBtn){
    searchBtn.addEventListener('click', () => {
      overlay.classList.add('open');
      input.value = '';
      renderResults('');
      setTimeout(() => input.focus(), 30);
    });
    overlay.addEventListener('click', (e) => {
      if(e.target === overlay) overlay.classList.remove('open');
    });
    input.addEventListener('input', () => renderResults(input.value));
    document.addEventListener('keydown', (e) => {
      if(e.key === '/' && document.activeElement.tagName !== 'INPUT'){
        e.preventDefault();
        searchBtn.click();
      }
      if(e.key === 'Escape') overlay.classList.remove('open');
    });
  }
});
