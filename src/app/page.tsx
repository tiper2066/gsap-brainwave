// import ButtonGradient from '@/components/svg/ButtonGradient';
import Header from '@/components/common/Header';
import Hero from '@/components/common/Hero';

export default function Home() {
    return (
        <>
            <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
                {/* <ButtonGradient /> */}
                <Header />
                <Hero />
            </div>
        </>
    );
}
