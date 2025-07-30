import ButtonGradient from '@/components/svg/ButtonGradient';
import Header from '@/components/common/Header';
import Hero from '@/components/common/Hero';
import Benefits from '@/components/common/Benefits';
import Collaboration from '@/components/common/Collaboration';
import Services from '@/components/common/Services';
import Pricing from '@/components/common/Pricing';
import Roadmap from '@/components/common/Roadmap';

export default function Home() {
    return (
        <>
            <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
                <Header />
                <Hero />
                <Benefits />
                <Collaboration />
                <Services />
                <Pricing />
                <Roadmap />
            </div>
            <ButtonGradient />
        </>
    );
}
