import { LeftLine, RightLine } from '../design/Pricing';
import PricingList from '@/components/common/PricingList';
import Heading from './Heading';
import Section from './Section';
const smallSphere = '/assets/4-small.png';
const stars = '/assets/pricing/stars.svg';

const Pricing = () => {
    return (
        <Section className='overflow-hidden' id='pricing'>
            <div className='container relative z-2'>
                <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
                    {/* ---- 그라데이션 라인 스타일 행성 ----- */}
                    <img
                        src={smallSphere}
                        className='relative z-1'
                        width={255}
                        height={255}
                        alt='Sphere'
                    />
                    {/* ---- 배경에 있는 작은 별들 ----- */}
                    <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
                        <img
                            src={stars}
                            className='w-full'
                            width={950}
                            height={400}
                            alt='Stars'
                        />
                    </div>
                </div>

                <Heading
                    tag='Get started with Brainwave'
                    title='Pay once, use forever'
                />

                <div className='relative'>
                    <PricingList />
                    <LeftLine />
                    <RightLine />
                </div>

                <div className='flex justify-center mt-10'>
                    <a
                        className='text-xs font-code font-bold tracking-wider uppercase border-b'
                        href='/pricing'
                    >
                        See the full details
                    </a>
                </div>
            </div>
        </Section>
    );
};
export default Pricing;
