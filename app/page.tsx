import Link from "next/link";

const listItems = [
  {
    emoji: '❄️',
    content: <span>I'm from Minnesota</span>,
  },
  {
    emoji: '🏔',
    content: <span>I live in Denver</span>,
  },
  {
    emoji: '💻',
    content: <span>Studied computer engineering at the University of Minnesota (graduated in 2022)</span>,
  },
  {
    emoji: '👨‍💻',
    content: <span>Work as a software engineer for C.H. Robinson on an app called <a href="https://www.freightquote.com/book" target='_blank'>Freightquote</a></span>,
  },
  {
    emoji: '📚',
    content: <span>I like to <Link href={'/books'}>read</Link></span>,
  },
  {
    emoji: '🔨',
    content: <span>I like to work on <Link href={'/projects'}>side projects</Link></span>,
  },
  {
    emoji: '🙅‍♂️',
    content: <span>And I abhor cooking</span>,
  },
];

export default function Home() {
  return (
    <div className='space-y-5 text-lg'>
      <h2 className='text-zinc-500 italic text-base'>About</h2>
      <p className='text-2xl'>Hello there 👋</p>
      <p>My name is Dan and this is my home on the internet.</p>
      <p>Here's a couple quick things about me:</p>
      <ul className='space-y-3 bg-zinc-800 rounded-lg p-3 max-w-md'>
        {listItems.map(item => (
          <li key={item.emoji} className='flex flex-row space-x-3'>
            <span>{item.emoji}</span>
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
