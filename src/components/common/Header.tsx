'use client';
import { navigation } from '@/constants'; // 헤더 네비게이션 메뉴 데이터
import { usePathname } from 'next/navigation';
import Button from './Button';
import MenuSvg from '../svg/MenuSvg'; // 메뉴 배경의 우주 행성 이미지 컴포넌트
import { HambugerMenu } from '../design/Header'; // 햄버거 메뉴
import { useState } from 'react';
import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll'; // ******************* 배경 스크롤 방지 라이브러리
const brainwave = '/assets/brainwave.svg';

const Header = () => {
    const pathname: string | null = usePathname(); // 주소창에서 경로 가져오기
    const [openNavigation, setOpenNavigation] = useState(false); // 1024 보다 작을 겨우 햄버거 메뉴 보이기

    // 햄버거 메뉴 열고/닫기
    const toggleNavigation = () => {
        // ************************ 모바일 메뉴 상태가 열림이면...
        if (openNavigation) {
            setOpenNavigation(false); // 상태를 닫기로 갱신하고
            enablePageScroll(); // 스크를 활성화함
        } else {
            // ************************ 모바일 메뉴 상태가 닫힘이면...
            setOpenNavigation(true); // 상태를 열기로 갱신하고
            disablePageScroll(); // 스크롤 비활성화
        }
    };
    // 메뉴 클릭 시 핸들러 함수
    const handleClick = () => {
        if (!openNavigation) return; // 모바일 메뉴가 닫혔을 경우 아래 함수 작동안함
        // 모바일 메뉴가 열려있고, 메뉴를 클릭하면...
        enablePageScroll(); // 스크롤 활성화 (이동할 위치로 스크롤해야 하기에)
        setOpenNavigation(false); // 모바일 메뉴 상태를 닫기로 갱신
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
                openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'
            }`}
        >
            <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
                {/* ----- 사이트 로고 ----- */}
                <a className='block w-[12rem] xl:mr-8' href='#hero'>
                    <img
                        src={brainwave}
                        width={190}
                        height={40}
                        alt='Brainwave'
                    />
                </a>
                {/* ------ 네비게이션 메뉴:  모바일에선 숨김  */}
                <nav
                    className={`${
                        openNavigation ? 'flex' : 'hidden'
                    } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
                >
                    <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                                    item.onlyMobile ? 'lg:hidden' : ''
                                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                                    item.url === pathname // 현재 경로가 설정된 경로와 일치하면...
                                        ? 'z-2 lg:text-n-1' // 경로를 밝은색으로 활성화함
                                        : 'lg:text-n-1/50'
                                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                    {/* ----- 햄버거 메뉴 컴포넌트 : 우주행성 이미지 배경 포함  ----- */}
                    <HambugerMenu />
                </nav>
                {/* ----- New account : 회원가입 링크 ----- */}
                <a
                    href='#signup'
                    className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'
                >
                    New account
                </a>
                {/* ----- 로그인 버튼(링크타입) ----- */}
                <Button className='!hidden lg:!flex' href='#login'>
                    Sign in
                </Button>
                {/* ----- 햄버거 메뉴 버튼 ----- */}
                <Button
                    className='ml-auto lg:hidden'
                    px='px-3'
                    onClick={toggleNavigation}
                >
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    );
};
export default Header;
