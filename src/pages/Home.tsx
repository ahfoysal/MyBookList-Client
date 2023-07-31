import { NavigationBrowse } from '@/components/Navigation';
import BookListGrid from '@/components/books/BookListGrid';
import SearchResult from '@/components/books/Search';
import { useAppSelector } from '@/redux/hook';

export default function Home() {
  const { results } = useAppSelector((state) => state.search);

  return (
    <div>
      <div className="">
        <NavigationBrowse />
        {results && <SearchResult items={results} />}
        <BookListGrid />
      </div>
    </div>
  );
}
