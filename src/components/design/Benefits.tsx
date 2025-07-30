export const GradientLight = () => {
    return (
        // -[at_50%_50%]: 중심에서 시작, 색상 투명도는 rgba 로 설정, from-0% 중심으로 부터 0거리에서 외곽 70%까지 색상 적용
        <div className='absolute top-0 left-1/4 w-full aspect-square bg-radial-[at_50%_50%] from-[#28206C] from-0% to-[#28206c00] to-70% pointer-events-none' />
    );
};
