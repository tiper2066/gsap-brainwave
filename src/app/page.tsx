import ButtonGradient from '@/components/svg/ButtonGradient';
import Button from '@/components/common/Button';

export default function Home() {
    return (
        <>
            <h1 className='text-3xl font-bold underline'>Hello world!</h1>
            <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
                <Button className='mt-20'>Something</Button>
                <ButtonGradient />
            </div>
        </>
    );
}
