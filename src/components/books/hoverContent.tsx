import { HoverCardArrow, HoverCardContent } from '@radix-ui/react-hover-card';

import { Badge } from '../ui/badge';
import { FC } from 'react';

interface IProps {
  isSuccess: boolean;
  book: object;
}
const HoverContent: FC<IProps> = ({ isSuccess, book }) => {
  if (isSuccess) {
    // console.log(id, name);
  }
  //   console.log('o');
  return (
    <HoverCardContent
      side="right"
      sideOffset={4}
      alignOffset={15}
      align={'start'}
      className="min-h-[100px] z-50 min-w-[240px]  p-2 px-3 rounded-md  hidden sm:block bg-[#151F2E]"
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
          <Badge className="bg-[#bbe916ab] text-white">Classic Story</Badge>
          <Badge className="bg-[#bbe916ab] text-white">Short Story</Badge>
        </div>
      </div>
    </HoverCardContent>
  );
};

export default HoverContent;
