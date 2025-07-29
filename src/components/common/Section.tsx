import { ReactNode } from 'react'; // children 타입 선언을 위해
import SectionSvg from '@/components/svg/SectionSvg';

// Props 타입 정의
interface SectionProps {
    className?: string;
    id?: string;
    crosses?: boolean;
    crossesOffset?: string;
    customPaddings?: boolean;
    children: ReactNode;
}

const Section: React.FC<SectionProps> = ({
    className,
    id,
    crosses,
    crossesOffset,
    customPaddings,
    children,
}) => {
    return (
        <div
            id={id}
            className={`relative ${
                customPaddings || // customPaddings 속성이 있을 경우 그걸로, 없으면 기본패딩 설정
                `py-10 la:py-16 xl:py-20 ${
                    crosses ? 'lg:py-32 xl:py-40' : '' // crosses 속성이 있는 경우 더 큰 패딩 적용
                } ${className || ''} `
            } `}
        >
            {children}

            {/* ----- 768 이상에서 : 섹션 하단 좌우측에 작운 라인 표시 ----- */}
            <div className='hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10' />
            <div className='hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10' />

            {/* ----- 768 이상에서 : 섹션 하단 라인 표시 ----- */}
            {crosses && (
                <>
                    <div
                        className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
                            crossesOffset && crossesOffset
                        } pointer-events-none lg:block xl:left-10 right-10`}
                    />
                    <SectionSvg crossesOffset={crossesOffset} />
                </>
            )}
        </div>
    );
};
export default Section;
