import { ReactComponent as ArrowLeftWhiteIcon } from 'assets/icons/ArrowLeftWhite.svg';
// import { ReactComponent as ArrowRightWhiteIcon } from 'assets/icons/ArrowRightWhite.svg';
// import { ReactComponent as LogoIcon } from 'assets/icons/Logo.svg';
// import { ReactComponent as ShotFilmIcon } from 'assets/icons/ShotFilm.svg';
// import Bg22 from 'assets/images/bg-22.png';
import Stories from 'react-insta-stories';
import { useNavigate } from 'react-router-dom';

import { useAuth } from 'contexts/auth';
import useDebounce from 'hooks/useDebounce';
import useHeader from 'hooks/useHeader';
import { isMobile, WEB_IN_APP_EVENT } from 'lib/constant';
import jsFunction from 'lib/jsFunction';
import { scrollToTop } from 'lib/utils';
import { MouseEvent, useRef, useState } from 'react';
import { useSupplierMetabase } from 'services/supplier';
import styles from './LookBack.module.css';
import stories from './stories';
// import { useSupplierSummaryNoel } from 'services/supplier/summaryNoel';
import { useSupplierLookback } from 'services/supplier/supplierLookback';

export default function LookBack() {
  const { showHeader } = useHeader();

  const [showStory, setShowStory] = useState<boolean>(false);
  const [sharing, setSharing] = useState<boolean>(false);
  const navigate = useNavigate();

  const { user } = useAuth();
  const { data, isFetching } = useSupplierMetabase({
    supplier_id: user._id,
  });
  const { data: dataSummary, isFetching: isFetchingDataSummary } =
    useSupplierLookback({
      supplier_id: user._id,
    });

  const startStory = () => {
    setShowStory(true);
    scrollToTop();
  };

  const visibleIndex = useRef(0);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isEndStories, setIsEndStories] = useState(false);

  const onStoryStart = (index: number) => {
    scrollToTop();
    visibleIndex.current = index;
    setSelectedIndex(index);
  };

  const onNext = () => {
    if (selectedIndex < (data?.data[0]?.group === 1 ? 4 : 1)) {
      const idx = visibleIndex.current + 1;
      visibleIndex.current = idx;
      setSelectedIndex(idx);
    }
  };

  const onPrevious = () => {
    if (selectedIndex > 0) {
      const idx = visibleIndex.current - 1;
      visibleIndex.current = idx;
      setSelectedIndex(idx);
      setIsEndStories(false);
    }
  };

  const onAllStoriesEnd = () => {
    setIsEndStories(true);
  };

  const handleCallbackShare = useDebounce(() => setSharing(false), 3000);

  const handleShareEvent = useDebounce((e) => {
    if (isMobile) {
      try {
        jsFunction.postMessage(WEB_IN_APP_EVENT.EVENT_SHARE, {
          text: 'Thật không thể tin nổi! Xem ngay cho nóng hành trình lăn bánh năm 2021 cùng tôi ở Ahamove tại đây https://ahadriver.onelink.me/ymGo/TetNhamDan',
        });
        handleCallbackShare(e);
      } catch (error) {
        console.log('postMessage error', error);
        handleCallbackShare(error);
      }
    }
  }, 200);

  const onShare = (e: MouseEvent<HTMLButtonElement>) => {
    setSharing(true);
    handleShareEvent(e);
  };

  return (
    <>
      {showStory ? (
        <div
          className={`h-full ${styles.stories} ${
            isEndStories ? styles.endStories : ''
          } ${!showHeader ? styles.mobileStories : ''} ${
            sharing ? styles.sharing : ''
          }`}
        >
          <Stories
            defaultInterval={750000}
            height='100%'
            preventDefault={false}
            keyboardNavigation={true}
            stories={stories({
              showHeader,
              navigate,
              onNext,
              onPrevious,
              onShare,
              data: data?.data[0],
              dataSummary: dataSummary?.data[0],
            })}
            width='100%'
            storyContainerStyles={{ with: '50%' }}
            loop={false}
            loader={<span>Loading...</span>}
            onStoryStart={onStoryStart}
            currentIndex={visibleIndex.current}
            onAllStoriesEnd={onAllStoriesEnd}
          />
        </div>
      ) : (
        <section className='bg-bg-22 bg-cover bg-no-repeat bg-center relative flex  w-full flex-col overflow-hidden h-full bg-primary'>
          {showHeader && (
            <header className='position: absolute z-50'>
              <button
                onClick={() => navigate(-1)}
                className='inline-flex items-center p-4 text-base font-semibold'
              >
                <ArrowLeftWhiteIcon
                  className='mr-3 -ml-1 h-4 w-4'
                  aria-hidden='true'
                />
                <div className='text-white'>Nhìn lại một năm</div>
              </button>
            </header>
          )}
          {/* <img
            src={Bg22}
            alt=''
            className='absolute left-0 right-0 top-0 bottom-0 h-[100%]'
          /> */}
          {/* <div className='bg-bg-22 w-[100%] h-screen bg-cover'></div> */}
          <div className='w-[100%] h-[100%] absolute'>
            <button
              type='button'
              className='w-[100%] h-[100%]'
              onClick={startStory}
              disabled={isFetching}
            >
              {/* {isFetching ? (
                <span>Loading...</span>
              ) : (
                <>
                  Khám phá ngay
                  <ArrowRightWhiteIcon
                    className='ml-3 -mr-1.5 h-4 w-4'
                    aria-hidden='true'
                  />
                </>
              )} */}
            </button>
          </div>
          {/* <button
              type='button'
              className='bg-secondary font-base focus:ring-secondary flex w-full flex-none animate-bounce items-center justify-center rounded-md border border-transparent px-4 py-2 text-center text-base font-semibold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none '
              onClick={startStory}
              disabled
            >
              Cùng đón chờ nhé
            </button> */}
        </section>
      )}
    </>
  );
}
