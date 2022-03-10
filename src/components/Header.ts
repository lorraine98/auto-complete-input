export default function Header({ target }) {
    const header = document.createElement('header');
    header.className = 'header';

    target.appendChild(header);

    const title = document.createElement('h1');
    title.innerHTML = 'Auto Complete';
    header.appendChild(title);
}
