'use client'; //   client 컴포넌트
import { useRef } from 'react'; //  useRef
import Button from './Button';
import Section from './Section'; // 레이아웃 용 섹션 컴포넌트
import { heroIcons } from '@/constants/index'; //  icon 이미지 배열 정보(homeSmile, file02, searchMd, plusSquare)
import { MouseParallax, ScrollParallax } from 'react-just-parallax'; //  parallax 라이브러리 메소드

const curve = '/assets/hero/curve.png'; // 커스 라인
const robot = '/assets/hero/robot.jpg'; // 로봇 이미지
const heroBackground = '/assets/hero/hero-background.jpg'; // 로봇 얼굴외부 배경 이미지
//  parallax 에 필요한 이미지 가져오기
import {
    BackgroundCircles,
    BottomLine,
    Gradient,
} from '@/components/design/Hero'; // Hero.tsx 에 정의되어 있음
import Generating from './Generating'; //  생성중 ui 컴포넌트
import Notification from './Notification'; //  정보 ui 컴포넌트
import CompanyLogos from './CompanyLogos'; // ******************************** CompanyLogos 컴포넌트 추가

const Hero = () => {
    const parallaxRef = useRef(null); //  parallax 효과 대상 요소

    return (
        <Section
            className='pt-[12rem] -mt-[5.25rem]'
            crosses
            crossesOffset='lg:translate-y-[5.25rem]'
            customPaddings
            id='hero'
        >
            {/*  parallax 참조 추가  */}
            <div className='container relative' ref={parallaxRef}>
                <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]'>
                    {/* ----- 헤드 카피  ----- */}
                    <h1 className='h1 mb-6'>
                        Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{' '}
                        {` `}
                        <span className='inline-block relative'>
                            Brainwave{' '}
                            <img
                                src={curve}
                                className='absolute top-full left-0 w-full xl:-mt-2'
                                width={624}
                                height={28}
                                alt='Curve'
                            />
                        </span>
                    </h1>
                    {/* ----- 설명문 ----- */}
                    <p className='body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8'>
                        Unleash the power of AI within Brainwave. Upgrade your
                        productivity with Brainwave, the open AI chat app.
                    </p>
                    {/* ----- Get Started 버튼 ----- */}
                    <Button href='/pricing' white>
                        Get started
                    </Button>
                </div>
                {/* ----- 카드 요소 ----- */}
                <div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24'>
                    <div className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient'>
                        <div className='relative bg-n-8 rounded-[1rem]'>
                            {/* ----- 카드 상단 영역 (모서리) ----- */}
                            <div className='h-[1.4rem] bg-n-10 rounded-t-[0.9rem]' />
                            {/* ----- 아이언맨 슈트 이미지 ----- */}
                            <div className='aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]'>
                                <img
                                    src={robot}
                                    className='w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]'
                                    width={1024}
                                    height={490}
                                    alt='AI'
                                />

                                {/*  Parallax 영역(생성 중 UI) : 1280 이상에서 보임  */}
                                <ScrollParallax isAbsolutelyPositioned>
                                    {/* ----- 생성 중 UI ----- */}
                                    <Generating className='absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2' />
                                </ScrollParallax>

                                {/*  Parallax 영역(행성 아이콘들) : 1280 이상에서 보임  */}
                                <ScrollParallax isAbsolutelyPositioned>
                                    <ul className='hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex'>
                                        {heroIcons.map((Icon, index) => (
                                            <li className='p-5' key={index}>
                                                {/* <img
                                                    src={icon}
                                                    width={24}
                                                    height={25}
                                                    alt={icon}
                                                /> */}
                                                {/*  heroIcons 가 string 타입이 아니라, 객체로 전달되기에 SVG 를 컴포넌트형식으로 적용한다  */}
                                                <Icon width={24} height={25} />
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollParallax>

                                {/*  Parallax 영역(알림 UI) : 1280 이상에서 보임  */}
                                <ScrollParallax isAbsolutelyPositioned>
                                    <Notification
                                        className='hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex'
                                        title='Code generation'
                                    />
                                </ScrollParallax>
                            </div>
                        </div>
                        {/* 카드 하단 겹쳐보이게 하는 바 */}
                        <Gradient />
                    </div>
                    {/* -----  로봇 얼굴외부 카드 배경 이미지 ----- */}
                    <div className='absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]'>
                        <img
                            src={heroBackground}
                            className='w-full'
                            width={1440}
                            height={1800}
                            alt='hero'
                        />
                    </div>
                    {/* 외부 배경 이미지를 컴포넌트화 했음 */}
                    <BackgroundCircles />
                </div>
                {/* ******************************** CompanyLogos 컴포넌트 추가 */}
                <CompanyLogos className='hidden relative z-10 mt-20 lg:block' />
            </div>

            <BottomLine />
        </Section>
    );
};
export default Hero;
