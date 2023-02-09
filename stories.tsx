import { ReactComponent as ALogoIcon } from 'assets/icons/ALogo.svg';
import CatS6PNG from 'assets/images/meo-01.png';
import { MouseEvent } from 'react';
// import BgS5 from 'assets/images/bgs5.png';
// import BgS6 from 'assets/images/bgs6.png';
import { ReactComponent as ArrowLeftWhiteIcon } from 'assets/icons/ArrowLeftWhite.svg';
import { formatCurrency, formatNumber } from 'lib/utils';
import { Story } from 'react-insta-stories/dist/interfaces';
import { NavigateFunction } from 'react-router-dom';
import { SupplierMetabase, TetSummary } from 'services/supplier';
import StoryNavigation from './StoryNavigation';
import { isMobile } from 'lib/constant';
import CatPNG from 'assets/images/mro-03.png';
import BgS4 from 'assets/images/bg-01.png';
import CatS4PNG from 'assets/images/mro-01.png';
import CatS2PNG from 'assets/images/m4-01.png';

type Stories = {
  showHeader: boolean;
  navigate: NavigateFunction;
  data?: SupplierMetabase;
  onNext: () => void;
  onPrevious: () => void;
  onShare: (event: MouseEvent<HTMLButtonElement>) => void;
  dataSummary?: TetSummary;
};

const stories = ({
  showHeader,
  navigate,
  data,
  onNext,
  onPrevious,
  onShare,
  dataSummary,
}: Stories) => {
  return data && dataSummary && data.group === 1
    ? ([
        // Dù nắng hay mưa, ta vẫn luôn cố gắng
        {
          content: () => (
            <div className='bg-bgs1 bg-cover bg-no-repeat bg-center flex h-full max-h-[100vh] w-full flex-col bg-primary-40'>
              <div>
                {showHeader && (
                  <header className='absolute z-50'>
                    <button
                      onClick={() => navigate(-1)}
                      className='inline-flex items-center p-4 text-base font-semibold text-white'
                    >
                      <ArrowLeftWhiteIcon
                        className='mr-3 -ml-1 h-4 w-4'
                        aria-hidden='true'
                      />
                      <div className='text-white'>Nhìn lại một năm</div>
                    </button>
                  </header>
                )}
                <div className=''>
                  <div className='max-w-10 text-sm absolute px-4 pt-20 pb-5 font-normal text-white z-20'>
                    <p>Bác tài thân mến,</p>
                    <p className='pt-3 pb-2'>
                      Năm 2022 đã kết thúc với vô vàn kỷ niệm đáng nhớ. Cùng
                      nhau, chúng ta đã "xông pha phủ cam" đến 18 tỉnh thành
                      trên đất Việt, trải nghiệm vô vàn dịch vụ mới như 2H, dịch
                      vụ xe điện,...
                    </p>
                    <p className='pb-3'>
                      Hãy cùng khám phá hành trình đáng nhớ của chúng ta trong
                      năm qua nhé!
                    </p>
                  </div>
                  {/* <img
                            src={BgS1}
                            alt=''
                            className='m-auto object-cover absolute left-0 right-0 top-0 bottom-0 h-[100%]'
                          /> */}
                </div>
              </div>
            </div>
          ),
        },
        //  Đón chào năm mới rực rỡ
        {
          content: () => (
            <div className='bg-bgs2 bg-cover bg-no-repeat bg-center flex max-h-[100vh] h-full w-full flex-col bg-primary-40'>
              <div>
                {showHeader && (
                  <header className='absolute z-50'>
                    <button
                      onClick={() => navigate(-1)}
                      className='inline-flex items-center p-4 text-base font-semibold text-white'
                    >
                      <ArrowLeftWhiteIcon
                        className='mr-3 -ml-1 h-4 w-4'
                        aria-hidden='true'
                      />
                      <div className='text-white'>Nhìn lại một năm</div>
                    </button>
                  </header>
                )}
                <div className='absolute w-full h-full flex flex-col px-4 pb-4 pt-[30%] gap-4'>
                  <div className='max-h-[84%] h-full font-normal text-white flex flex-col justify-between'>
                    <div className='max-h-[30%] w-full h-full flex flex-col'>
                      <p className='text-left sm text-2xl xs:text-xl'>
                        Từng chặng đường dài mà ta qua...
                      </p>
                      <p className='py-2 text-right text-2xl xs:text-xl'>
                        Đều để lại <br /> kỷ niệm quý giá
                      </p>
                    </div>

                    <div className='max-h-[70%] h-full w-full pr-7 flex flex-col justify-end'>
                      <div className='max-h-[75%] relative max-w-full  h-auto w-full flex flex-col bg-[#0e4174] rounded-[32px]'>
                        <div className='w-full h-full flex flex-col p-5 3xs:p-3'>
                          <div className='bg-gradient-to-b from-white to-primary-20 max-h-[50px] h-full mb-6 rounded-2xl max-w-[70%] w-full xs:text-2xl text-4xl text-[#FF7F32] font-bold flex justify-center items-center relative'>
                            {dataSummary
                              ? !dataSummary.work_day
                                ? formatNumber(0)
                                : formatNumber(parseFloat(dataSummary.work_day))
                              : formatNumber(0)}
                            <div className='absolute bg-primary-40 right-[-50px] px-4 flex justify-center items-center uppercase bottom-[-10px] rounded-lg font-bold text-center xs:text-[16px] text-2xl text-white'>
                              Ngày
                            </div>
                          </div>
                          <div className='text-white flex flex-col gap-2 xs:gap-1'>
                            <p className='text-lg xs:text-[16px] xs:leading-[1.25rem]'>
                              Chúng ta đi với nhau trên khắp các con đường trong
                              năm 2022
                            </p>
                            <p className='text-lg xs:text-[16px] xs:leading-[1.25rem]'>
                              Hy vọng Mèo thần tài sẽ cùng Bác tài đồng hành
                              trong thật nhiều nhiều năm nữa nha!
                            </p>
                          </div>
                        </div>
                        <img
                          alt='cat-s2'
                          src={CatS2PNG}
                          className='max-w-[180px] w-full absolute right-[-38px] top-[-75px]'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='max-h-[10%] h-full'>
                    <div className='relative text-white'>
                      <p className='text-sm'>
                        #Nhậtký2022 <br /> #Hànhtrìnhkỳdiệu <br /> #Ahamove
                      </p>
                    </div>
                  </div>
                  {/* <img
                            src={BgS2}
                            alt=''
                            className='m-auto object-cover absolute left-0 right-0 top-0 bottom-0 h-[100%]'
                          /> */}
                </div>
              </div>
            </div>
          ),
        },
        {
          content: () => (
            <div className='bg-primary-40 h-full mmax-h-[100vh] w-full'>
              <div className='max-w-full w-full max-h-full h-full'>
                {showHeader && (
                  <header className='absolute z-50'>
                    <button
                      onClick={() => navigate(-1)}
                      className='inline-flex items-center p-4 text-base font-semibold text-white'
                    >
                      <ArrowLeftWhiteIcon
                        className='mr-3 -ml-1 h-4 w-4'
                        aria-hidden='true'
                      />
                      <div className='text-white'>Nhìn lại một năm</div>
                    </button>
                  </header>
                )}
                <div className='flex flex-col px-4 pb-4 pt-[30%] w-full h-full gap-4'>
                  <div className='font-normal text-white'>
                    <p className='text-left xxs:text-2xl xs:text-3xl'>
                      Bác tài có nhớ đã gặp bao nhiêu khách hàng rồi không?
                    </p>
                    {/* <div className='py-5'></div> */}
                  </div>
                  <div className='max-w-full max-h-[70%] w-full h-auto bg-[#0c4a7f] rounded-[32px] p-3 relative'>
                    <img
                      alt='cat'
                      src={CatPNG}
                      className='3xs:max-w-[70px] max-w-[130px] w-full h-auto object-fill absolute 3xs:bottom-[-40px] bottom-[-50px] left-0'
                    />
                    <div className='text-white w-full h-full'>
                      <div className='content-center items-center justify-center py-2'>
                        <div className=''>
                          <p className='text- pb-2'>
                            Năm qua Bác tài đã gặp gỡ
                          </p>
                          <div className='font-weight-bold flex items-center pl-6 text-4xl '>
                            <p className='bg-gradient-to-b from-white to-primary-20 h-[40px] leading-[40px] flex justify-center items-center pt-1 w-36 rounded-l-lg font-bold text-center text-[#FF7F32] '>
                              {dataSummary
                                ? !dataSummary.customer
                                  ? formatNumber(0)
                                  : formatNumber(
                                      parseFloat(dataSummary.customer)
                                    )
                                : formatNumber(0)}
                            </p>
                            <div className='bg-primary-40 w-24 h-[40px] font-semibold pt-0.5 rounded-r-lg text-center text-white text-sm'>
                              KHÁCH <br /> HÀNG
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className='text-base py-2'>
                            và giao thành công hơn
                          </p>
                          <div className='font-weight-bold flex items-center pl-6 text-4xl '>
                            <p className='bg-gradient-to-b from-white to-primary-20 h-[40px] leading-[40px] flex justify-center items-center pt-1 w-36 rounded-l-lg text-center font-bold text-[#FF7F32] '>
                              {dataSummary
                                ? !dataSummary._order
                                  ? formatNumber(0)
                                  : formatNumber(parseFloat(dataSummary._order))
                                : formatNumber(0)}
                            </p>
                            <div className='bg-primary-40 w-24 h-[40px] font-semibold pt-0.5 rounded-r-lg text-center text-white text-sm'>
                              ĐƠN <br /> HÀNG
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className='text-base'>
                          Chắc hẳn Bác tài đều có những kỷ niệm đẹp trong những
                          chuyến giao hàng. Đừng quên chia sẻ các câu chuyện “dở
                          khóc dở cười” cho Mèo hóng với!
                        </p>
                      </div>
                      <div className='flex flex-row-reverse py-5'>
                        <div className='w-50 py-10'></div>
                        <p className='text-l py-4 pl-24'>
                          #Nhậtký2022 <br /> #Hànhtrìnhkỳdiệu <br /> #Ahamove
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <img
                            src={BgS3}
                            alt=''
                            className='m-auto object-cover absolute left-0 right-0 top-0 bottom-0 h-[100%]'
                          /> */}
                </div>
              </div>
            </div>
          ),
        },
        {
          content: () => (
            <div
              style={{
                backgroundImage: `url(${BgS4})`,
              }}
              className='bg-cover bg-no-repeat bg-center flex h-full max-h-[100vh] w-full flex-col'
            >
              <div className='w-full h-full'>
                {showHeader && (
                  <header className='absolute z-50'>
                    <button
                      onClick={() => navigate(-1)}
                      className='inline-flex items-center p-4 text-base font-semibold text-white'
                    >
                      <ArrowLeftWhiteIcon
                        className='mr-3 -ml-1 h-4 w-4'
                        aria-hidden='true'
                      />
                      <div className='text-white'>Nhìn lại một năm</div>
                    </button>
                  </header>
                )}
                <div className='w-full h-full flex flex-col px-4 pb-4 pt-[30%] justify-between'>
                  <div className='max-h-[45%] h-full font-normal text-white flex flex-col gap-4'>
                    <p className='text-left xs:text-3xl xxs:text-2xl'>
                      Đỉnh quá Bác tài ơi Năm 2022 bạn đã đút túi
                    </p>
                    <div className='bg-secondary-50 w-full min-h-[40px] max-h-[80px] h-full xs:leading-20 rounded-[40px] flex items-center text-center xs:text-[24px] text-[40px] font-bold justify-center'>
                      {dataSummary
                        ? !dataSummary.income
                          ? formatCurrency(0)
                          : formatCurrency(parseFloat(dataSummary.income))
                        : formatCurrency(0)}
                    </div>
                    <p className='xs:text-[18px] xs:leading-[1.75rem] 3xs:text-[14px] 3xs:leading-[1.25rem]'>
                      Bác tài quả xứng danh là đại gia trong làng giao hàng.
                      Chia sẻ cho Mèo bí kíp luyện đơn của Xế được hông nè?
                    </p>
                  </div>
                  <div className='flex justify-center items-center max-w-[100%] w-full max-h-[35%] h-full'>
                    <img
                      alt='cat'
                      src={CatS4PNG}
                      className='max-w-full max-h-full w-auto object-contain'
                    />
                  </div>
                  <div className=''>
                    <div className='relative text-white'>
                      <p className='text-sm'>
                        #Nhậtký2022 <br /> #Hànhtrìnhkỳdiệu <br /> #Ahamove
                      </p>
                    </div>
                  </div>
                  {/* <img
                            src={BgS4}
                            alt=''
                            className='m-auto object-cover absolute left-0 right-0 top-0 bottom-0 h-[100%]'
                          /> */}
                </div>
              </div>
            </div>
          ),
        },
        {
          content: () => (
            <div className='bg-bgs5 bg-cover bg-no-repeat bg-center flex h-full max-h-[100vh] w-full flex-col bg-primary-40'>
              <div className='h-full w-full'>
                {showHeader && (
                  <header className='absolute z-50'>
                    <button
                      onClick={() => navigate(-1)}
                      className='inline-flex items-center p-4 text-base font-semibold text-white'
                    >
                      <ArrowLeftWhiteIcon
                        className='mr-3 -ml-1 h-4 w-4'
                        aria-hidden='true'
                      />
                      <div className='text-white'>Nhìn lại một năm</div>
                    </button>
                  </header>
                )}
                <div className='flex-col flex content-center w-full h-full px-4 pb-4 pt-[30%]'>
                  <div className='w-full font-normal text-white h-full flex flex-col gap-4'>
                    <p className='text-left text-3xl xs:text-2xl'>
                      Lời cảm ơn chân thành nhất
                    </p>
                    <div
                      // style={{ backgroundSize: '100% 80%' }}
                      className='max-w-[325px] w-full max-h-[450px] pt-[5%] px-[17%] 3xs:px-[19%] h-full bg-S5 bg-center bg-contain bg-no-repeat flex justify-center content-center text-[#FF7F32] aspect-[996/1410] mx-auto'
                    >
                      <p className='text-left text-sm xs:text-[12px] xs:leading-[1.25rem] 3xs:leading-[1rem] 3xs:text-[10px]'>
                        Năm 2022 đã kết thúc nhưng tình yêu của Mèo dành cho Xế
                        vẫn còn mãi. Đại diện đội ngũ Ahamove và tất cả khách
                        hàng, xin gửi lời cảm ơn chân thành nhất, tình yêu to bự
                        nhất dành cho bác tài - Những anh hùng tuyệt vời của nhà
                        Cam.
                      </p>
                      {/* <img src={S5} alt="" className='absolute h-[62%]'/> */}
                    </div>
                  </div>
                  {/* <div className='px-5 pb-[65px] flex-[1]'>
                    <div className='relative text-white'>
                      <p className='text-sm'>
                        #Nhậtký2022 <br /> #Hànhtrìnhkỳdiệu <br /> #Ahamove
                      </p>
                    </div>
                  </div> */}
                  {/* <img
                            src={BgS5}
                            alt=''
                            className='m-auto object-cover absolute left-0 right-0 top-0 bottom-0 h-[100%]'
                          /> */}
                </div>
              </div>
            </div>
          ),
        },
        {
          content: (props) => (
            <div className='bg-bgs6 bg-cover bg-no-repeat bg-center relative flex h-full max-h-[100vh] w-full flex-col bg-primary-40'>
              <StoryNavigation
                onNext={onNext}
                onPrevious={onPrevious}
                {...props}
              />
              {showHeader && (
                <header className='absolute z-50'>
                  <button
                    onClick={() => navigate(-1)}
                    className='inline-flex items-center p-4 text-base font-semibold text-white'
                  >
                    <ArrowLeftWhiteIcon
                      className='mr-3 -ml-1 h-4 w-4'
                      aria-hidden='true'
                    />
                    <div className='text-white'>Nhìn lại một năm</div>
                  </button>
                </header>
              )}
              <div className='relative flex flex-col items-center mx-auto w-full h-full px-4 pb-4 pt-[30%]'>
                <div className='bg-S6 bg-contain bg-no-repeat bg-center aspect-[390/844] max-w-[320px] w-full max-h-[530px] h-full pt-[41%] px-[3%]'>
                  <div className='max-w-full w-full font-normalte xt-white'>
                    <div className='h-[100%]'>
                      <div className='px-5 w-full flex flex-col gap-3'>
                        <p
                          className='text-l text-center text-[#FF7F32]'
                          // style={{ paddingBottom: '8px' }}
                        >
                          Woa!
                          <br />
                          <strong className='text-2xl xs:text-xl'>
                            Hành trình kỳ diệu 2022
                          </strong>
                          <br />
                          của Bác tài thật đáng ngưỡng mộ
                        </p>
                        <div className='w-full' style={{ bottom: '22px' }}>
                          <div className='pb-5 text-[#FF7F32] flex flex-col gap-2'>
                            <div className='flex w-full items-center justify-between gap-3'>
                              <div className='flex items-center justify-center max-w-[35%] w-full'>
                                <p className='text-center text-sm xs:text-[14px] 3xs:text-[10px]'>
                                  Tổng số ngày <br /> bên nhau
                                </p>
                              </div>
                              <div className='bg-primary-40 px-3 max-w-[65%] w-full text-center flex-none h-full text-white rounded-full xs:text-[14px] 3xs:text-[10px]'>
                                {/* <p className='px-6 text-l text-white z-20'> */}
                                {dataSummary
                                  ? !dataSummary.work_day
                                    ? formatNumber(0)
                                    : formatNumber(
                                        parseFloat(dataSummary.work_day)
                                      )
                                  : formatNumber(0)}{' '}
                                ngày
                                {/* </p> */}
                                {/* <img src={Rec} alt='' className='absolute w-40' /> */}
                              </div>
                            </div>
                            <div className='flex w-full items-center justify-between gap-3'>
                              <div className='flex items-center justify-center max-w-[35%] w-full'>
                                <p className='text-center text-sm xs:text-[14px] 3xs:text-[10px]'>
                                  Số khách đã <br />
                                  đồng hành
                                </p>
                              </div>
                              <div className='bg-primary-40 px-3 max-w-[65%] w-full text-center flex-none h-full text-white rounded-full xs:text-[14px] 3xs:text-[10px]'>
                                {dataSummary
                                  ? !dataSummary.customer
                                    ? formatNumber(0)
                                    : formatNumber(
                                        parseInt(dataSummary.customer)
                                      )
                                  : formatNumber(0)}{' '}
                                khách
                              </div>
                            </div>
                            <div className='flex w-full items-center content-center justify-between gap-3'>
                              <div className='flex items-center justify-center max-w-[35%] w-full'>
                                <p className='text-center text-sm xs:text-[14px] 3xs:text-[10px]'>
                                  Số đơn hàng <br /> có nhau
                                </p>
                              </div>
                              <div className='bg-primary-40 px-3 max-w-[65%] w-full text-center flex-none h-full text-white rounded-full xs:text-[14px] 3xs:text-[10px]'>
                                {dataSummary
                                  ? !dataSummary._order
                                    ? formatNumber(0)
                                    : formatNumber(
                                        parseFloat(dataSummary._order)
                                      )
                                  : formatNumber(0)}{' '}
                                đơn hàng
                              </div>
                            </div>
                            <div className='flex w-full items-center justify-between'>
                              <div className='flex items-center justify-center max-w-[35%] w-full'>
                                <p className='text-center text-sm xs:text-[14px] 3xs:text-[10px]'>
                                  Đạt <br /> doanh thu
                                </p>
                              </div>
                              <div className='bg-primary-40 px-3 max-w-[65%] w-full text-center flex-none h-full text-white rounded-full xs:text-[14px] 3xs:text-[10px]'>
                                {dataSummary
                                  ? !dataSummary.income
                                    ? formatCurrency(0)
                                    : formatCurrency(
                                        parseFloat(dataSummary.income)
                                      )
                                  : formatCurrency(0)}
                                {/* {formatCurrency(900000000000)} */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ] as Story[])
    : ([
        // Dù nắng hay mưa, ta vẫn luôn cố gắng
        {
          content: () => (
            <div className='bg-bgs1 bg-cover bg-no-repeat bg-center flex h-full max-h-[100vh] w-full flex-col bg-primary-40'>
              <div>
                {showHeader && (
                  <header className='absolute z-50'>
                    <button
                      onClick={() => navigate(-1)}
                      className='inline-flex items-center p-4 text-base font-semibold text-white'
                    >
                      <ArrowLeftWhiteIcon
                        className='mr-3 -ml-1 h-4 w-4'
                        aria-hidden='true'
                      />
                      <div className='text-white'>Nhìn lại một năm</div>
                    </button>
                  </header>
                )}
                <div className=''>
                  <div className='max-w-10 text-sm absolute px-4 pt-20 pb-5 font-normal text-white z-20'>
                    <p>Bác tài thân mến,</p>
                    <p className='pt-3 pb-2'>
                      Năm 2022 đã kết thúc với vô vàn kỷ niệm đáng nhớ. Cùng
                      nhau, chúng ta đã "xông pha phủ cam" đến 18 tỉnh thành
                      trên đất Việt, trải nghiệm vô vàn dịch vụ mới như 2H, dịch
                      vụ xe điện,...
                    </p>
                    <p className='pb-3'>
                      Hãy cùng khám phá hành trình đáng nhớ của chúng ta trong
                      năm qua nhé!
                    </p>
                  </div>
                  {/* <img
                            src={BgS1}
                            alt=''
                            className='m-auto object-cover absolute left-0 right-0 top-0 bottom-0 h-[100%]'
                          /> */}
                </div>
              </div>
            </div>
          ),
        },
        //  Đón chào năm mới rực rỡ
        {
          content: () => (
            <div className='bg-bgs2 bg-cover bg-no-repeat bg-center flex max-h-[100vh] h-full w-full flex-col bg-primary-40'>
              <div>
                {showHeader && (
                  <header className='absolute z-50'>
                    <button
                      onClick={() => navigate(-1)}
                      className='inline-flex items-center p-4 text-base font-semibold text-white'
                    >
                      <ArrowLeftWhiteIcon
                        className='mr-3 -ml-1 h-4 w-4'
                        aria-hidden='true'
                      />
                      <div className='text-white'>Nhìn lại một năm</div>
                    </button>
                  </header>
                )}
                <div className='absolute w-full h-full flex flex-col px-4 pb-4 pt-[30%] gap-4'>
                  <div className='max-h-[84%] h-full font-normal text-white flex flex-col justify-between'>
                    <div className='max-h-[30%] w-full h-full flex flex-col'>
                      <p className='text-left sm text-2xl xs:text-xl'>
                        Từng chặng đường dài mà ta qua...
                      </p>
                      <p className='py-2 text-right text-2xl xs:text-xl'>
                        Đều để lại <br /> kỷ niệm quý giá
                      </p>
                    </div>

                    <div className='max-h-[70%] h-full w-full pr-7 flex flex-col justify-end'>
                      <div className='max-h-[75%] relative max-w-full  h-auto w-full flex flex-col bg-[#0e4174] rounded-[32px]'>
                        <div className='w-full h-full flex flex-col p-5 3xs:p-3'>
                          <div className='bg-gradient-to-b from-white to-primary-20 max-h-[50px] h-full mb-6 rounded-2xl max-w-[70%] w-full xs:text-2xl text-4xl text-[#FF7F32] font-bold flex justify-center items-center relative'>
                            {dataSummary
                              ? !dataSummary.work_day
                                ? formatNumber(0)
                                : formatNumber(parseFloat(dataSummary.work_day))
                              : formatNumber(0)}
                            <div className='absolute bg-primary-40 right-[-50px] px-4 flex justify-center items-center uppercase bottom-[-10px] rounded-lg font-bold text-center xs:text-[16px] text-2xl text-white'>
                              Ngày
                            </div>
                          </div>
                          <div className='text-white flex flex-col gap-2 xs:gap-1'>
                            <p className='text-lg xs:text-[16px] xs:leading-[1.25rem]'>
                              Chúng ta đi với nhau trên khắp các con đường trong
                              năm 2022
                            </p>
                            <p className='text-lg xs:text-[16px] xs:leading-[1.25rem]'>
                              Hy vọng Mèo thần tài sẽ cùng Bác tài đồng hành
                              trong thật nhiều nhiều năm nữa nha!
                            </p>
                          </div>
                        </div>
                        <img
                          alt='cat-s2'
                          src={CatS2PNG}
                          className='max-w-[180px] w-full absolute right-[-38px] top-[-75px]'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='max-h-[10%] h-full'>
                    <div className='relative text-white'>
                      <p className='text-sm'>
                        #Nhậtký2022 <br /> #Hànhtrìnhkỳdiệu <br /> #Ahamove
                      </p>
                    </div>
                  </div>
                  {/* <img
                            src={BgS2}
                            alt=''
                            className='m-auto object-cover absolute left-0 right-0 top-0 bottom-0 h-[100%]'
                          /> */}
                </div>
              </div>
            </div>
          ),
        },
        {
          content: () => (
            <div className='bg-primary-40 h-full mmax-h-[100vh] w-full'>
              <div className='max-w-full w-full max-h-full h-full'>
                {showHeader && (
                  <header className='absolute z-50'>
                    <button
                      onClick={() => navigate(-1)}
                      className='inline-flex items-center p-4 text-base font-semibold text-white'
                    >
                      <ArrowLeftWhiteIcon
                        className='mr-3 -ml-1 h-4 w-4'
                        aria-hidden='true'
                      />
                      <div className='text-white'>Nhìn lại một năm</div>
                    </button>
                  </header>
                )}
                <div className='flex flex-col px-4 pb-4 pt-[30%] w-full h-full gap-4'>
                  <div className='font-normal text-white'>
                    <p className='text-left xxs:text-2xl xs:text-3xl'>
                      Bác tài có nhớ đã gặp bao nhiêu khách hàng rồi không?
                    </p>
                    {/* <div className='py-5'></div> */}
                  </div>
                  <div className='max-w-full max-h-[70%] w-full h-auto bg-[#0c4a7f] rounded-[32px] p-3 relative'>
                    <img
                      alt='cat'
                      src={CatPNG}
                      className='3xs:max-w-[70px] max-w-[130px] w-full h-auto object-fill absolute 3xs:bottom-[-40px] bottom-[-50px] left-0'
                    />
                    <div className='text-white w-full h-full'>
                      <div className='content-center items-center justify-center py-2'>
                        <div className=''>
                          <p className='text- pb-2'>
                            Năm qua Bác tài đã gặp gỡ
                          </p>
                          <div className='font-weight-bold flex items-center pl-6 text-4xl '>
                            <p className='bg-gradient-to-b from-white to-primary-20 h-[40px] leading-[40px] flex justify-center items-center pt-1 w-36 rounded-l-lg font-bold text-center text-[#FF7F32] '>
                              {dataSummary
                                ? !dataSummary.customer
                                  ? formatNumber(0)
                                  : formatNumber(
                                      parseFloat(dataSummary.customer)
                                    )
                                : formatNumber(0)}
                            </p>
                            <div className='bg-primary-40 w-24 h-[40px] font-semibold pt-0.5 rounded-r-lg text-center text-white text-sm'>
                              KHÁCH <br /> HÀNG
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className='text-base py-2'>
                            và giao thành công hơn
                          </p>
                          <div className='font-weight-bold flex items-center pl-6 text-4xl '>
                            <p className='bg-gradient-to-b from-white to-primary-20 h-[40px] leading-[40px] flex justify-center items-center pt-1 w-36 rounded-l-lg text-center font-bold text-[#FF7F32] '>
                              {dataSummary
                                ? !dataSummary._order
                                  ? formatNumber(0)
                                  : formatNumber(parseFloat(dataSummary._order))
                                : formatNumber(0)}
                            </p>
                            <div className='bg-primary-40 w-24 h-[40px] font-semibold pt-0.5 rounded-r-lg text-center text-white text-sm'>
                              ĐƠN <br /> HÀNG
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className='text-base'>
                          Chắc hẳn Bác tài đều có những kỷ niệm đẹp trong những
                          chuyến giao hàng. Đừng quên chia sẻ các câu chuyện “dở
                          khóc dở cười” cho Mèo hóng với!
                        </p>
                      </div>
                      <div className='flex flex-row-reverse py-5'>
                        <div className='w-50 py-10'></div>
                        <p className='text-l py-4 pl-24'>
                          #Nhậtký2022 <br /> #Hànhtrìnhkỳdiệu <br /> #Ahamove
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <img
                            src={BgS3}
                            alt=''
                            className='m-auto object-cover absolute left-0 right-0 top-0 bottom-0 h-[100%]'
                          /> */}
                </div>
              </div>
            </div>
          ),
        },
        {
          content: () => (
            <div
              style={{
                backgroundImage: `url(${BgS4})`,
              }}
              className='bg-cover bg-no-repeat bg-center flex h-full max-h-[100vh] w-full flex-col'
            >
              <div className='w-full h-full'>
                {showHeader && (
                  <header className='absolute z-50'>
                    <button
                      onClick={() => navigate(-1)}
                      className='inline-flex items-center p-4 text-base font-semibold text-white'
                    >
                      <ArrowLeftWhiteIcon
                        className='mr-3 -ml-1 h-4 w-4'
                        aria-hidden='true'
                      />
                      <div className='text-white'>Nhìn lại một năm</div>
                    </button>
                  </header>
                )}
                <div className='w-full h-full flex flex-col px-4 pb-4 pt-[30%] justify-between'>
                  <div className='max-h-[45%] h-full font-normal text-white flex flex-col gap-4'>
                    <p className='text-left xs:text-3xl xxs:text-2xl'>
                      Đỉnh quá Bác tài ơi Năm 2022 bạn đã đút túi
                    </p>
                    <div className='bg-secondary-50 w-full min-h-[40px] max-h-[80px] h-full xs:leading-20 rounded-[40px] flex items-center text-center xs:text-[24px] text-[40px] font-bold justify-center'>
                      {dataSummary
                        ? !dataSummary.income
                          ? formatCurrency(0)
                          : formatCurrency(parseFloat(dataSummary.income))
                        : formatCurrency(0)}
                    </div>
                    <p className='xs:text-[18px] xs:leading-[1.75rem] 3xs:text-[14px] 3xs:leading-[1.25rem]'>
                      Bác tài quả xứng danh là đại gia trong làng giao hàng.
                      Chia sẻ cho Mèo bí kíp luyện đơn của Xế được hông nè?
                    </p>
                  </div>
                  <div className='flex justify-center items-center max-w-[100%] w-full max-h-[35%] h-full'>
                    <img
                      alt='cat'
                      src={CatS4PNG}
                      className='max-w-full max-h-full w-auto object-contain'
                    />
                  </div>
                  <div className=''>
                    <div className='relative text-white'>
                      <p className='text-sm'>
                        #Nhậtký2022 <br /> #Hànhtrìnhkỳdiệu <br /> #Ahamove
                      </p>
                    </div>
                  </div>
                  {/* <img
                            src={BgS4}
                            alt=''
                            className='m-auto object-cover absolute left-0 right-0 top-0 bottom-0 h-[100%]'
                          /> */}
                </div>
              </div>
            </div>
          ),
        },
        {
          content: () => (
            <div className='bg-bgs5 bg-cover bg-no-repeat bg-center flex h-full max-h-[100vh] w-full flex-col bg-primary-40'>
              <div className='h-full w-full'>
                {showHeader && (
                  <header className='absolute z-50'>
                    <button
                      onClick={() => navigate(-1)}
                      className='inline-flex items-center p-4 text-base font-semibold text-white'
                    >
                      <ArrowLeftWhiteIcon
                        className='mr-3 -ml-1 h-4 w-4'
                        aria-hidden='true'
                      />
                      <div className='text-white'>Nhìn lại một năm</div>
                    </button>
                  </header>
                )}
                <div className='flex-col flex content-center w-full h-full px-4 pb-4 pt-[30%]'>
                  <div className='w-full font-normal text-white h-full flex flex-col gap-4'>
                    <p className='text-left text-3xl xs:text-2xl'>
                      Lời cảm ơn chân thành nhất
                    </p>
                    <div
                      // style={{ backgroundSize: '100% 80%' }}
                      className='max-w-[325px] w-full max-h-[450px] pt-[5%] px-[17%] 3xs:px-[19%] h-full bg-S5 bg-center bg-contain bg-no-repeat flex justify-center content-center text-[#FF7F32] aspect-[996/1410] mx-auto'
                    >
                      <p className='text-left text-sm xs:text-[12px] xs:leading-[1.25rem] 3xs:leading-[1rem] 3xs:text-[10px]'>
                        Năm 2022 đã kết thúc nhưng tình yêu của Mèo dành cho Xế
                        vẫn còn mãi. Đại diện đội ngũ Ahamove và tất cả khách
                        hàng, xin gửi lời cảm ơn chân thành nhất, tình yêu to bự
                        nhất dành cho bác tài - Những anh hùng tuyệt vời của nhà
                        Cam.
                      </p>
                      {/* <img src={S5} alt="" className='absolute h-[62%]'/> */}
                    </div>
                  </div>
                  {/* <div className='px-5 pb-[65px] flex-[1]'>
                    <div className='relative text-white'>
                      <p className='text-sm'>
                        #Nhậtký2022 <br /> #Hànhtrìnhkỳdiệu <br /> #Ahamove
                      </p>
                    </div>
                  </div> */}
                  {/* <img
                            src={BgS5}
                            alt=''
                            className='m-auto object-cover absolute left-0 right-0 top-0 bottom-0 h-[100%]'
                          /> */}
                </div>
              </div>
            </div>
          ),
        },
        {
          content: (props) => (
            <div className='bg-bgs6 bg-cover bg-no-repeat bg-center relative flex h-full max-h-[100vh] w-full flex-col bg-primary-40'>
              <StoryNavigation
                onNext={onNext}
                onPrevious={onPrevious}
                {...props}
              />
              {showHeader && (
                <header className='absolute z-50'>
                  <button
                    onClick={() => navigate(-1)}
                    className='inline-flex items-center p-4 text-base font-semibold text-white'
                  >
                    <ArrowLeftWhiteIcon
                      className='mr-3 -ml-1 h-4 w-4'
                      aria-hidden='true'
                    />
                    <div className='text-white'>Nhìn lại một năm</div>
                  </button>
                </header>
              )}
              <div className='relative mx-auto flex h-full w-full flex-col items-center px-4 pb-4 pt-[88px]'>
                <div className='h-full w-full max-w-[320px] mt-[30%] relative'>
                  <img
                    style={{ left: 'calc(50% - 55px)' }}
                    className='w-[110px] absolute top-[-76px] z-1'
                    src={CatS6PNG}
                    alt='cat'
                  />
                  <div className='h-auto w-full max-w-full bg-white rounded-[32px] py-4 absolute z-2'>
                    <div className='flex h-full w-full flex-col gap-3 px-5'>
                      <p
                        className='text-l text-center text-[#FF7F32]'
                        // style={{ paddingBottom: '8px' }}
                      >
                        <ALogoIcon className='mx-auto mb-2.5 h-auto w-32' />
                        <strong className='xs:text-xl text-2xl'>
                          Hành trình kỳ diệu 2022
                        </strong>
                        <br />
                        của Bác tài thật đáng ngưỡng mộ
                      </p>
                      <div className='flex grow flex-col justify-center gap-4 pb-5 text-[#FF7F32]'>
                        <div className='flex w-full items-center justify-between gap-3'>
                          <div className='flex w-full max-w-[35%] items-center justify-center'>
                            <p className='xs:text-[14px] 3xs:text-[10px] text-center text-sm'>
                              Tổng số ngày <br /> bên nhau
                            </p>
                          </div>
                          <div className='bg-primary-40 xs:text-[14px] 3xs:text-[10px] w-full max-w-[60%] flex-none rounded-full px-3 py-1.5 text-center font-medium text-white'>
                            {/* <p className='px-6 text-l text-white z-20'> */}
                            {dataSummary
                              ? !dataSummary.work_day
                                ? formatNumber(0)
                                : formatNumber(parseFloat(dataSummary.work_day))
                              : formatNumber(0)}{' '}
                            ngày
                            {/* </p> */}
                            {/* <img src={Rec} alt='' className='absolute w-40' /> */}
                          </div>
                        </div>
                        <div className='flex w-full items-center justify-between gap-3'>
                          <div className='flex w-full max-w-[35%] items-center justify-center'>
                            <p className='xs:text-[14px] 3xs:text-[10px] text-center text-sm'>
                              Số khách đã <br />
                              đồng hành
                            </p>
                          </div>
                          <div className='bg-primary-40 xs:text-[14px] 3xs:text-[10px] w-full max-w-[60%] flex-none rounded-full px-3 py-1.5 text-center font-medium text-white'>
                            {dataSummary
                              ? !dataSummary.customer
                                ? formatNumber(0)
                                : formatNumber(parseInt(dataSummary.customer))
                              : formatNumber(0)}{' '}
                            khách
                          </div>
                        </div>
                        <div className='flex w-full content-center items-center justify-between gap-3'>
                          <div className='flex w-full max-w-[35%] items-center justify-center'>
                            <p className='xs:text-[14px] 3xs:text-[10px] text-center text-sm'>
                              Số đơn hàng <br /> có nhau
                            </p>
                          </div>
                          <div className='bg-primary-40 xs:text-[14px] 3xs:text-[10px] w-full max-w-[60%] flex-none rounded-full px-3 py-1.5 text-center font-medium text-white'>
                            {dataSummary
                              ? !dataSummary._order
                                ? formatNumber(0)
                                : formatNumber(parseFloat(dataSummary._order))
                              : formatNumber(0)}{' '}
                            đơn hàng
                          </div>
                        </div>
                        <div className='flex w-full items-center justify-between'>
                          <div className='flex w-full max-w-[35%] items-center justify-center'>
                            <p className='xs:text-[14px] 3xs:text-[10px] text-center text-sm'>
                              Đạt <br /> doanh thu
                            </p>
                          </div>
                          <div className='bg-primary-40 xs:text-[14px] 3xs:text-[10px] w-full max-w-[60%] flex-none rounded-full px-3 py-1.5 text-center font-medium text-white'>
                            {dataSummary
                              ? !dataSummary.income
                                ? formatCurrency(0)
                                : formatCurrency(parseFloat(dataSummary.income))
                              : formatCurrency(0)}
                            {/* {formatCurrency(900000000000)} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ] as Story[]);
};

export default stories;
