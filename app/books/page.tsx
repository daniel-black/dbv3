import Link from "next/link";

export default function BooksPage() {
  return (
    <div className='space-y-5 text-lg'>
      <Link href='/'>← back</Link>
      <h2 className='text-zinc-500 italic text-base'>Books</h2>
      <p>These are some of my favorite books.</p>
      <ul>
        <li>
          <a href="https://www.amazon.com/Antifragile-Things-That-Disorder-Incerto/dp/0812979680/ref=sr_1_1?keywords=antifragile&qid=1672688067&sr=8-1" target='_blank'>Antifragile</a> by Nassim Taleb
        </li>
        <li>
          <a href="https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296/ref=sr_1_1?crid=1S6Y1MFEITTXT&keywords=zero+to+one&qid=1672688089&sprefix=zero+to%2Caps%2C482&sr=8-1" target='_blank'>Zero to One</a> by Peter Thiel
        </li>
        <li>
          <a href="https://www.amazon.com/Dominion-Christian-Revolution-Remade-World/dp/1541675592/ref=sr_1_1?keywords=dominion+tom+holland&qid=1672688185&sprefix=dominion+tom%2Caps%2C137&sr=8-1" target='_blank'>Dominion</a> by Tom Holland
        </li>
        <li>
          <a href="https://www.amazon.com/Anna-Karenina-Wordsworth-Classics-Tolstoy/dp/1853262714/ref=sr_1_3?crid=1S6UYF8E82UT7&keywords=anna+karenina&qid=1672688110&sprefix=anna+karenina%2Caps%2C169&sr=8-3" target='_blank'>Anna Karenina</a> by Leo Tolstoy
        </li>
        <li>
          <a href="https://www.amazon.com/Last-First-Men-Story-future/dp/160444357X/ref=sr_1_1?keywords=last+and+first+men+by+olaf+stapleton&qid=1672688130&sprefix=last+and+fir%2Caps%2C147&sr=8-1" target='_blank'>Last and First Men</a> by Olaf Stapledon
        </li>
        <li>
          <a href="https://www.amazon.com/There-No-Antimemetics-Division-qntm/dp/B0915M7T61/ref=sr_1_1?keywords=there+is+no+antimemetics+division&qid=1672688161&sprefix=there+is+no%2Caps%2C163&sr=8-1" target='_blank'>There is no Antimemetics Division</a> by qntm
        </li>
        <li>
          <a href="https://www.amazon.com/Zen-Art-Motorcycle-Maintenance-Inquiry/dp/0060589469" target='_blank'>Zen and the Art of Motorcyle Maintenance</a> by Robert Pursig
        </li>
      </ul>
      <p>Send any and all book recs to <a href="mailto:drblack651@gmail.com?subject=book recs">drblack651@gmail.com</a>!</p>
    </div>
  );
}