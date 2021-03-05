export function Project({ image, title, description }) {
  return `
            <article class="project">
              <img src="${image}" alt="${title}" loading="lazy" />
              <span>${title}</span>
              <h3>${description}</h3>
              <div class="buttons">
                <button class="btn btn--initial">
                  Ver código del proyecto
                </button>
                <button class="btn btn--purple">
                  Ver detalle del proyecto
                </button>
              </div>
            </article>
    `;
}
