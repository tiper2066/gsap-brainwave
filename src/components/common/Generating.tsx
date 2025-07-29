const loading = '/assets/loading.png'; // 로딩 중.. 이미지

const Generating = ({ className }: { className?: string }) => {
    console.log(typeof loading);
    return (
        <div
            className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
                className || ''
            } text-base`}
        >
            <img className='w-5 h-5 mr-4' src={loading} alt='Loading' />
            AI is generating
            {/* <loading /> */}
        </div>
    );
};
export default Generating;
