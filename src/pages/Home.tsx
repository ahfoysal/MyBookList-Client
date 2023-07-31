import { NavigationBrowse } from '@/components/Navigation';
import BookListGrid from '@/components/books/BookListGrid';

export default function Home() {
  return (
    <div>
      <div className="">
        <NavigationBrowse />
        <BookListGrid />
      </div>
    </div>
  );
}
