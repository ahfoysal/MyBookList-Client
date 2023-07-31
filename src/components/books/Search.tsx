import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from '@radix-ui/react-hover-card';
import { Badge } from '../ui/badge';
import { ISearchResult } from '@/redux/features/search/searchSlice';
import { FC } from 'react';

const SearchResult = ({ items }) => {
  console.log(items);
  return (
    <div className="py-8">
      <div className="grid grid-cols-6 gap-5">
        {items.map((item, index) => {
          return (
            <HoverCard key={index} openDelay={500} closeDelay={100}>
              <HoverCardTrigger className="rounded-sm">
                <img src={items.img} className="h-full w-full rounded-sm"></img>
                <p className="mt-1 text-sm">{items.name}</p>
              </HoverCardTrigger>
              <HoverCardContent
                side="right"
                sideOffset={4}
                alignOffset={15}
                align={'start'}
                className="min-h-[100px] min-w-[240px]  p-2 px-3 rounded-md  hidden md:block bg-[#151F2E]"
              >
                <HoverCardArrow
                  className="mr-4 text-[#151F2E] "
                  color="#151F2E"
                  width={10}
                  height={10}
                />
                <div className="flex flex-col ">
                  <p className="text-sm font-normal"> Total Page 200</p>
                  <div className="flex gap-1 mt-3 text-xs ">
                    <Badge className="bg-[#bbe916ab] text-white"> Story </Badge>
                    <Badge className="bg-[#bbe916ab] text-white">
                      Classic Story
                    </Badge>
                    <Badge className="bg-[#bbe916ab] text-white">
                      Short Story
                    </Badge>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
