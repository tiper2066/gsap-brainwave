'use client';
import { benefits } from '@/constants'; // 섹션에 필요한 데이터 가져오기
import Heading from './Heading';
import Section from './Section';
import Arrow from '@/components/svg/Arrow'; // 화살표 컴포넌트
import { GradientLight } from '@/components/design/Benefits'; // 박스형 그라디언트 배경 컴포넌트
import ClipPath from '@/components/svg/ClipPath'; // 클리핑 마스크 컴포넌트

const Benefits = () => {
    return (
        <Section id='features'>
            <div className='container relative z-2'>
                <Heading
                    className='md:max-w-md lg:max-w-2xl'
                    title='Chat Smarter, Not Harder with Brainwave'
                />

                <div className='flex flex-wrap justify-center gap-10 mb-10'>
                    {benefits.map((item, index) => {
                        const IconComponent = item.iconUrl; // 컴포넌트로 변환함
                        return (
                            <div
                                className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'
                                style={{
                                    backgroundImage: `url(${item.backgroundUrl})`, // 그라디언트 테두리 카드 배경 이미지
                                }}
                                key={item.id}
                            >
                                <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
                                    <h5 className='h5 mb-5'>{item.title}</h5>
                                    <p className='body-2 mb-6 text-n-3'>
                                        {item.text}
                                    </p>
                                    <div className='flex items-center mt-auto'>
                                        {/* 박스 아이콘 4 종 - /benefits/icon-1.svg ~ 4개의 아이콘 */}
                                        <IconComponent width={48} height={48} />
                                        <p className='ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider'>
                                            Explore more
                                        </p>
                                        <Arrow />
                                    </div>
                                </div>
                                {/* 인덱스 1, 3번 카드에만 light 속성이 있으며, 아래와 같은 코드로 적용되어 있다. */}
                                {item.light && <GradientLight />}
                                {/* -[at_50%_50%]: 중심에서 시작, 색상 투명도는 rgba 로 설정, from-0% 중심으로 부터 0거리에서 외곽 70%까지 색상 적용
                                    <div className='absolute top-0 left-1/4 w-full aspect-square 
                                        bg-radial-[at_50%_50%] from-[#28206C] from-0% to-[#28206c00] to-70% pointer-events-none' /> */}
                                <div
                                    className='absolute inset-0.5 bg-n-8'
                                    style={{ clipPath: 'url(#benefits)' }}
                                >
                                    <div className='absolute inset-0 opacity-0 transition-opacity hover:opacity-10'>
                                        {item.imageUrl && ( // imageUrl 에는 /benefits/image-2.png 로봇 헤드 옆모습 이미지, 마우스 오버시 배경 보임
                                            <img
                                                src={item.imageUrl.src} // 객체로 가져오면 반드시 src 를 추가해 줘야 함!!!!!!!!!!!!!
                                                width={380}
                                                height={362}
                                                alt={item.title}
                                                className='w-full h-full object-cover'
                                            />
                                        )}
                                    </div>
                                </div>
                                <ClipPath />
                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};
export default Benefits;
