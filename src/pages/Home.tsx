import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="h-1/2 w-1/2 mx-auto my-auto">something</div>
      <Button asChild>
        <Link to="/login">Login</Link>
      </Button>
      <Button asChild>
        <Link to="/signup">signup</Link>
      </Button>
      <Popover.Root>
        <Popover.Trigger>More info</Popover.Trigger>
        <Popover.Portal>
          <Popover.Content>
            <p className="text-white">Some more info…</p>
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}
