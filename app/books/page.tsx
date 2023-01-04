import { books } from "../../data";

export default function BooksPage() {
  return (
    <div className='space-y-5 text-lg text-zinc-400'>
      <p>These are some of my favorite books.</p>
      <ul className='space-y-2 list-disc ml-5'>
        {books.map(book => (
          <li key={book.title}>
            <a href={book.href} target='_blank' className='link'>
              {book.title}
            </a> by {book.author}
          </li>
        ))}
      </ul>
      <p>
        Send any and all book recs to&nbsp;
        <a 
          href="mailto:drblack651@gmail.com?subject=book recs"
          className='link'
        >
          drblack651@gmail.com
        </a>!
      </p>
    </div>
  );
}