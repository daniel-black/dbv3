import Link from "next/link";

const listItems = [
  {
    emoji: "🏔",
    content: <span>Live in Denver</span>,
  },
  {
    emoji: "❄️",
    content: <span>Am from Minnesota</span>,
  },
  {
    emoji: "💻",
    content: (
      <span>
        Graduated from the University of Minnesota in 2022 with a computer
        engineering degree
      </span>
    ),
  },
  {
    emoji: "👨‍💻",
    content: (
      <span>
        Software Engineer working on an app called{" "}
        <a
          href="https://www.freightquote.com/book"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Freightquote
        </a>
      </span>
    ),
  },
  {
    emoji: "📚",
    content: (
      <span>
        Likes to{" "}
        <Link href={"/books"} className="link">
          read
        </Link>
      </span>
    ),
  },
  {
    emoji: "🔨",
    content: (
      <span>
        Likes to work on{" "}
        <Link href={"/projects"} className="link">
          side projects
        </Link>
      </span>
    ),
  },
  {
    emoji: "🙅‍♂️",
    content: <span>Abhors cooking</span>,
  },
];

export default function Home() {
  return (
    <div className="space-y-5 text-zinc-400">
      <p className="text-3xl text-zinc-50">Hello there! 👋</p>
      <p>My name is Dan and this is my home on the internet.</p>
      <p>Here&apos;s a couple quick things about me:</p>
      <ul className="space-y-2">
        {listItems.map((item) => (
          <li key={item.emoji} className="flex flex-row space-x-3">
            <span>{item.emoji}</span>
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
