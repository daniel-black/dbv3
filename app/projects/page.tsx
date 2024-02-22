export default function ProjectsPage() {
  return (
    <div className="space-y-5 text-lg text-zinc-400">
      <p>
        In my free time, I enjoy building projects with TypeScript, React,
        Next.js, and Tailwind.
      </p>
      <p>
        I like learning new things and experimenting with different
        technologies. Lately, I&apos;ve been playing around with Go and
        Postgres.
      </p>
      <p>Here are a couple of the projects I&apos;ve worked on.</p>
      <ul className="space-y-2 list-disc ml-5">
        <li>
          <a
            href="https://userefactory.com"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Refactory
          </a>{" "}
          - Refactor code with the help of AI
        </li>
        {/* <li>
          <a
            href="https://textmachina.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Text Machina
          </a>{" "}
          - ChatGPT but with style
        </li> */}
        {/* <li>
          <a
            href="https://promocha-v2.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            ProMocha
          </a>{" "}
          - A tool for managing promocodes
        </li> */}
        <li>
          <a
            href="https://tack-weld.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Tack
          </a>{" "}
          - A tool for building TailwindCSS color palettes
        </li>
        <li>
          <a
            href="https://www.hacolyte.com"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Hacolyte
          </a>{" "}
          - A client for reading Hacker News stories
        </li>
        {/* <li>
          <a href="https://where-to-eta.vercel.app" target='_blank' rel="noreferrer" className='link'>Where To?</a> - A very incomplete move-planning app
        </li>
        <li>
          <a href="https://fan-wine.vercel.app" target='_blank' rel="noreferrer" className='link'>Fan</a> and <a href="https://shop-one-iota.vercel.app" target='_blank' className='link'>Shop</a> - Two interfaces intended to work together as a system for placing orders at concession stands in stadiums. The two don't talk to each other at all lol
        </li>
        <li>
          <a href="https://yallhiring.vercel.app" target='_blank' rel="noreferrer" className='link'>Y'all Hiring?</a> - An incomplete job board for US Gov jobs 👷‍♂️
        </li> */}
      </ul>
    </div>
  );
}
