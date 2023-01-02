const listItems = [
  {
    emoji: '❄️',
    text: 'I\'m from Minnesota',
  },
  {
    emoji: '🏔',
    text: 'I live in Denver',
  },
  {
    emoji: '💻',
    text: 'Studied computer engineering at the University of Minnesota (graduated in 2022)',
  },
  {
    emoji: '👨‍💻',
    text: 'Work as a software engineer for C.H. Robinson on an app called Freightquote',
  },
  {
    emoji: '📚',
    text: 'I like to read',
  },
  {
    emoji: '🙅‍♂️',
    text: 'And I abhor cooking',
  },
];

export default function Home() {
  return (
    <div className='space-y-5'>
      <p>Hello there 👋</p>
      <p>My name is Dan and this is my home on the internet.</p>
      <p>Here's a couple quick things about me:</p>
      <ul className='space-y-2'>
        {listItems.map(item => (
          <li key={item.emoji} className='flex flex-row space-x-2'>
            <span>{item.emoji}</span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
