const sites = [
  {name: "Midnight", url: "https://midnight.im/"},
  {name: "XONE", url: "https://xone.fun/"},
  {name: "NixWare", url: "https://nixware.cc/"},
  {name: "Neverlose", url: "https://neverlose.cc/"},
  {name: "Gmail", url: "https://workspace.google.com/intl/ru/gmail/"},
  {name: "Mail.ru", url: "https://mail.ru/"},
  {name: "Yandex Mail", url: "https://360.yandex.ru/mail/"},
  {name: "Наш сайт", url: "https://neon-byte.ru/"}
];

const grid = document.getElementById('sitesGrid');

sites.forEach(s => {
  const card = document.createElement('a');
  card.className = 'card';
  card.href = s.url;
  card.target = '_blank';
  card.rel = 'noopener noreferrer';

  // фавикон через Google s2
  const img = document.createElement('img');
  img.className = 'fav';
  // размер 72px
  const domain = (new URL(s.url)).hostname;
  img.src = `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;
  img.alt = s.name + ' favicon';
  card.appendChild(img);

  const title = document.createElement('div');
  title.className = 'title';
  title.textContent = s.name;
  card.appendChild(title);

  const urldiv = document.createElement('div');
  urldiv.className = 'url';
  urldiv.textContent = domain;
  card.appendChild(urldiv);

  grid.appendChild(card);
});
