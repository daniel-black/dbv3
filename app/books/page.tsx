
type Book = {
  href: string;
  title: string;
  author: string;
};

const books: Book[] = [
  {
    href: 'https://www.amazon.com/Antifragile-Things-That-Disorder-Incerto/dp/0812979680',
    title: 'Antifragile',
    author: 'Nassim Taleb',
  },
  {
    href: 'https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296',
    title: 'Zero to One',
    author: 'Peter Thiel',
  },
  {
    href: 'https://www.amazon.com/Dominion-Christian-Revolution-Remade-World/dp/1541675592',
    title: 'Dominion',
    author: 'Tom Holland',
  },
  {
    href: 'https://www.amazon.com/Anna-Karenina-Wordsworth-Classics-Tolstoy/dp/1853262714',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
  },
  {
    href: 'https://www.amazon.com/Last-First-Men-Story-future/dp/160444357X',
    title: 'Last and First Men',
    author: 'Olaf Stapledon',
  },
  {
    href: 'https://www.amazon.com/There-No-Antimemetics-Division-qntm/dp/B0915M7T61',
    title: 'There is no Antimemetics Division',
    author: 'qntm',
  },
  {
    href: 'https://www.amazon.com/Zen-Art-Motorcycle-Maintenance-Inquiry/dp/0060589469',
    title: 'Zen and the Art of Motorcycle Maintentance',
    author: 'Robert Pursig',
  },
];

export default function BooksPage() {
  return (
    <div className='space-y-5 text-lg'>
      <p>These are some of my favorite books.</p>
      <ul className='space-y-2'>
        {books.map(book => (
          <li key={book.title}>
            <a href={book.href} target='_blank'>
              {book.title}
            </a> by {book.author}
          </li>
        ))}
      </ul>
      <p>Send any and all book recs to <a href="mailto:drblack651@gmail.com?subject=book recs">drblack651@gmail.com</a>!</p>
    </div>
  );
}