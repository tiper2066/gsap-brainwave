'use client'; // 이미지를 컴포넌트로 가져와 적용할 경우 에러가 생기면 추가해 줌
import { collabApps, collabContent, collabText } from '@/constants'; // collabContent 아이템, collabApps 앱 아이콘 데이터, collabText 문구
import Section from './Section';
import Button from './Button'; // 커스텀 버튼
import { LeftCurve, RightCurve } from '@/components/design/Collaboration'; // public/assets/collaboration/curve-1.svg, curve-2 이미지
import Image from 'next/image';
// import { brainwaveSymbol, check } from '../../../public/assets'; // brainwave-symbol.svg, check.svg 이미지
const brainwaveSymbol = '/assets/brainwave-symbol.svg'; // brainwave-symbol.svg 이미지
const check = '/assets/check.svg'; // check.svg 이미지

const Collaboration = () => {
    // console.log('collabApps: ', collabApps);
    return (
        <Section crosses>
            <div className='container lg:flex'>
                <div className='max-w-[25rem]'>
                    <h2 className='h2 mb-4 md:mb-8'>
                        AI Chat App for seamless collaboration
                    </h2>

                    <ul className='max-w-[22rem] mb-10 md:mb-14'>
                        {collabContent.map((item) => (
                            <li className='mb-3 py-3' key={item.id}>
                                <div className='flex items-center'>
                                    <img
                                        src={check}
                                        width={24}
                                        height={24}
                                        alt='check'
                                    />
                                    <h6 className='body-2 ml-5'>
                                        {item.title}
                                    </h6>
                                </div>
                                {item.text && (
                                    <p className='body-2 mt-3 text-n-4'>
                                        {item.text}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>

                    <Button>Try it now</Button>
                </div>

                <div className='lg:ml-auto xl:w-[38rem] mt-4'>
                    <p className='body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto'>
                        {collabText}
                    </p>

                    <div className='relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100'>
                        <div className='flex w-60 aspect-square m-auto border border-n-6 rounded-full'>
                            <div className='w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full'>
                                {/* ------------ 원형 영역의 중심에 있는 아이콘  ------------ */}
                                <div className='flex items-center justify-center w-full h-full bg-n-8 rounded-full'>
                                    <img
                                        src={brainwaveSymbol}
                                        width={48}
                                        height={48}
                                        alt='brainwave'
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ------------ 콜라보하는 원형 영역의 아이콘  ------------ */}
                        <ul>
                            {collabApps.map((app, index) => {
                                // const IconComp = app.icon;
                                return (
                                    <li
                                        key={app.id}
                                        className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                                            index * 45
                                        }`}
                                    >
                                        <div
                                            className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                                                index * 45
                                            }`}
                                        >
                                            <img
                                                className='m-auto'
                                                width={app.width}
                                                height={app.height}
                                                alt={app.title}
                                                src={app.icon} // ****** 이미지를 컴포넌트로 가져올 경우 src 속성 사용
                                            />
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                        <LeftCurve />
                        <RightCurve />
                    </div>
                </div>
            </div>
        </Section>
    );
};
export default Collaboration;
