import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search } from 'lucide-react';
import { useAppDispatch } from '@/redux/hook';
import { setSearchResult, setTerm } from '@/redux/features/search/searchSlice';
import { useSearchQuery } from '@/redux/features/search/searchApi';

export function NavigationBrowse() {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [skip, setSkip] = React.useState(true);
  const { data, isLoading, error, isSuccess, isError } = useSearchQuery(
    searchTerm,
    {
      skip,
    }
  );
  if (isSuccess) {
    dispatch(setSearchResult(data.data));
  }
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setSkip(false);
    console.log(value);
    dispatch(setTerm(value)); // If value is empty, set it to null
  };
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <p className="mb-2.5 font-semibold text-white">Search</p>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <div className="flex  gap-2  items-center justify-center">
              <Search size="20px" />
              <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                className="border-none w-full  bg-transparent hover:bg-none focus:outline-none"
              />
            </div>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="relative">
          <p className="mb-2.5 font-semibold text-white">Genres</p>

          <NavigationMenuTrigger>Any</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ScrollArea className="h-[200px]   rounded-md border p-4">
              <ul className="grid w-72 gap-3 py-2 grid-cols-2 ">
                {genres.map((genre) => (
                  <ListItem
                    key={genre.title}
                    title={genre.title}
                    href={genre.id}
                  ></ListItem>
                ))}
              </ul>
            </ScrollArea>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <p className="mb-2.5 font-semibold text-white">Authors</p>

          <NavigationMenuTrigger>Any</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <p className="mb-2.5 font-semibold text-white">Year</p>

          <NavigationMenuTrigger disabled>Any</NavigationMenuTrigger>
          <NavigationMenuContent></NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-1 pt-1.5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

const genres: { title: string; id: string }[] = [
  {
    title: 'Story',
    id: '/docs/primitives/alert-dialog',
  },
  {
    title: 'Short Story',
    id: '/docs/primitives/hover-card',
  },
  {
    title: 'Classic Story',
    id: '/docs/primitives/hover-card',
  },
  {
    title: 'Story',
    id: '/docs/primitives/alert-dialog',
  },
  {
    title: 'Short Story',
    id: '/docs/primitives/hover-card',
  },
  {
    title: 'Classic Story',
    id: '/docs/primitives/hover-card',
  },
  {
    title: 'Story',
    id: '/docs/primitives/alert-dialog',
  },
  {
    title: 'Short Story',
    id: '/docs/primitives/hover-card',
  },
  {
    title: 'Classic Story',
    id: '/docs/primitives/hover-card',
  },
  {
    title: 'Story',
    id: '/docs/primitives/alert-dialog',
  },
  {
    title: 'Short Story',
    id: '/docs/primitives/hover-card',
  },
  {
    title: 'Classic Story',
    id: '/docs/primitives/hover-card',
  },
];
