const searchInput=document.getElementById("searchInput");

searchInput.oninput=()=>{
  const q=searchInput.value.toLowerCase();
  document.querySelectorAll('.article-block').forEach(art=>{
    art.style.display =
      art.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
}
