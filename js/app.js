const grid = document.querySelector("#videoGrid");
const modal = document.querySelector("#videoModal");
const modalPlayer = document.querySelector("#modalPlayer");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalCategory = document.querySelector("#modalCategory");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

function normalizeVideoUrl(url) {
  if (!url) return "";
  const trimmed = url.trim();
  if (trimmed.includes("youtube.com/watch?v=")) {
    const id = new URL(trimmed).searchParams.get("v");
    return id ? `https://www.youtube.com/embed/${id}` : trimmed;
  }
  if (trimmed.includes("youtu.be/")) {
    const id = trimmed.split("youtu.be/")[1]?.split(/[?&]/)[0];
    return id ? `https://www.youtube.com/embed/${id}` : trimmed;
  }
  return trimmed;
}

function getTicketLabel(ticket) {
  return ticket === "high-ticket" ? "HIGH TICKET" : "LOW TICKET";
}

function createVideoCard(video) {
  const videoUrl = normalizeVideoUrl(video.videoUrl);
  const preview = videoUrl
    ? `<iframe class="thumb-preview" src="${videoUrl}" title="Pré-visualização de ${video.title}" loading="lazy" tabindex="-1" aria-hidden="true" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>`
    : `<div class="thumb-placeholder" aria-hidden="true"><span>Prévia do vídeo</span></div>`;

  return `
    <article class="video-card">
      <div class="thumb ${videoUrl ? "has-preview" : ""}">
        ${preview}
        <span class="thumb-overlay"></span>
        <button class="play-button" type="button" data-video-id="${video.id}" aria-label="Abrir ${video.title}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.14v13.72c0 .76.84 1.22 1.48.8l10.3-6.86a.96.96 0 0 0 0-1.6L9.48 4.34A.96.96 0 0 0 8 5.14Z"/></svg>
        </button>
      </div>
      <div class="card-body">
        <span class="card-ticket">${getTicketLabel(video.ticket)}</span>
        <h3 class="video-title">${video.title}</h3>
        <button class="card-action" type="button" data-video-id="${video.id}">Assistir</button>
      </div>
    </article>
  `;
}

function renderVideos() {
  const videos = window.PORTFOLIO_VIDEOS || [];
  const high = videos.filter((video) => video.ticket === "high-ticket");
  const low = videos.filter((video) => video.ticket === "low-ticket");

  const section = (label, items, id) => `
    <section class="ticket-section" aria-labelledby="${id}">
      <div class="ticket-heading"><span class="eyebrow"><span></span>${label}</span></div>
      <div class="video-grid">${items.length ? items.map(createVideoCard).join("") : `<div class="empty-state">Nenhum vídeo cadastrado nesta categoria.</div>`}</div>
    </section>
  `;

  grid.innerHTML = section("HIGH TICKET", high, "high-ticket-heading") + section("LOW TICKET", low, "low-ticket-heading");
}

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-video-id]");
  if (!button) return;
  const video = window.PORTFOLIO_VIDEOS.find((item) => item.id === button.dataset.videoId);
  if (video) openModal(video);
});

function openModal(video) {
  const videoUrl = normalizeVideoUrl(video.videoUrl);
  modalTitle.textContent = video.title;
  modalDescription.textContent = "";
  modalCategory.textContent = getTicketLabel(video.ticket);
  modalPlayer.innerHTML = "";

  if (!videoUrl) {
    modalPlayer.innerHTML = `<div class="player-placeholder"><div><strong>Player ainda não configurado</strong><span>O link deste vídeo ainda não foi conectado ao portfólio.</span></div></div>`;
  } else if (videoUrl.endsWith(".mp4")) {
    const videoEl = document.createElement("video");
    videoEl.src = videoUrl;
    videoEl.controls = true;
    videoEl.autoplay = true;
    modalPlayer.appendChild(videoEl);
  } else {
    const iframe = document.createElement("iframe");
    iframe.src = videoUrl;
    iframe.title = video.title;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    modalPlayer.appendChild(iframe);
  }

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  modalPlayer.innerHTML = "";
  document.body.classList.remove("no-scroll");
}

modal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-modal]")) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("active")) closeModal();
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
renderVideos();
