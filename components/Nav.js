const items = [
  {
    name: "Blog",
    href: "https://blog.tylerbuchea.com",
    icon: "fa fa-pencil",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/tylerbuchea",
    icon: "fa fa-twitter",
  },
  {
    name: "Github",
    href: "https://github.com/tylerbuchea",
    icon: "fa fa-github",
  },
  // {
  //   name: "YouTube",
  //   href: "https://www.youtube.com/channel/UCjGfHpKjVrp7MZ45hiwgD_A",
  //   icon: "fa fa-youtube",
  // },

  // {
  //   name: "Angel List",
  //   href: "https://angel.co/tyler-buchea",
  //   icon: "fa fa-angellist",
  // },
  // {
  //   name: "Linked In",
  //   href: "https://www.linkedin.com/in/tyler-buchea-b3a43376",
  //   icon: "fa fa-linkedin",
  // },
];

export default function Nav() {
  return (
    <nav className="navbar">
      <ul className="list">
        {items.map((item) => (
          <li className="item" key={item.name}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              href={item.href}
              aria-label={item.name}
            >
              <i className={item.icon} role="img" />
            </a>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          .navbar {
            margin-top: 3rem;
            display: block;
            border-top: 1px solid var(--foreground);
          }

          .list {
            list-style: none;
            margin: 0px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            padding: 10px 0px;
            grid-gap: 20px 10px;
          }

          @media (max-width: 800px) {
            .list {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .item {
            text-align: center;
          }

          .link {
            color: var(--foreground);
            font-size: 2rem;
            transition: color 0.3s ease-in-out;
          }

          .link:hover {
            color: var(--accent);
          }

          .link:active {
            color: var(--accent);
            transition: none;
          }
        `}
      </style>
    </nav>
  );
}
