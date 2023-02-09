import { Action } from 'react-insta-stories/dist/interfaces';

export type StoryNavigationProps = {
  action: Action;
  isPaused: boolean;
  onNext: () => void;
  onPrevious: () => void;
};

const StoryNavigation = ({ onNext, onPrevious }: StoryNavigationProps) => {
  return (
    <div className='fixed z-[999] mt-14 mb-20 flex !h-[calc(100%_-_8.5rem)] w-full flex-row flex-nowrap'>
      <div className='h-full w-1/2' onClick={onPrevious}></div>
      <div className='h-full w-1/2' onClick={onNext}></div>
    </div>
  );
};

export default StoryNavigation;
