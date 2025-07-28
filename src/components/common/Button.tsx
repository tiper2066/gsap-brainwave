import ButtonSvg from '../svg/ButtonSvg';

type buttonProps = {
    className?: string;
    href?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    px?: string;
    white?: boolean;
};

const Button = ({
    className,
    href,
    onClick,
    children,
    px,
    white = false,
}: buttonProps) => {
    // 기본 클래스 선언
    const classes = `button relative inline-flex items-center justify-center h-11 transition-colors 
    hover:text-color-1 hover:cursor-pointer ${px || 'px-7'} ${
        white && white ? 'text-n-8' : 'text-n-1'
    } ${className || ''}`;
    const spanClasses = 'relative z-10';

    // 버튼일 경우
    const renderButton = () => {
        return (
            <button className={classes}>
                {/* 버튼 레이블이 됨 */}
                <span className={spanClasses}>{children}</span>
                {/* fill 값을 전달받아 배경을 설정하는 svg 형태의 배경 버튼 원본*/}
                {ButtonSvg(white)}
            </button>
        );
    };

    // 링크일 경우
    const renderLink = () => {
        return (
            <a href={href} className={classes}>
                <span className={spanClasses}>{children}</span>
                {ButtonSvg(white)}
            </a>
        );
    };

    return href ? renderLink() : renderButton(); // href 존재에 따라 버튼 또는 링크로 반환함
};
export default Button;
