const links = [
  {
    name: "github",
    url: "https://github.com/daniel-black",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/danielblack2022",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/danblack__",
  },
];

export default function Footer() {
  return (
    <footer className="text-center text-xs space-y-3 mt-10 text-zinc-600">
      <div className="flex space-x-5">
        {links.map((l) => (
          <a key={l.name} href={l.url} target="_blank" rel="noreferrer">
            <div className="p-1 rounded-lg bg-zinc-800 hover:bg-zinc-700">
              <img
                src={`/${l.name}.svg`}
                alt={`${l.name} icon`}
                className="w-6 h-6"
              />
            </div>
          </a>
        ))}
      </div>
      <div>2024</div>
    </footer>
  );
}
