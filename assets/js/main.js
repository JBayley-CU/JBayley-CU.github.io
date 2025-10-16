
// Dark mode toggle with localStorage
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    root.classList.add('dark');
  }
  document.getElementById('themeToggle').addEventListener('click', ()=>{
    root.classList.toggle('dark');
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
