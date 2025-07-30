import { companyLogos } from '@/constants'; // 파트너사 로고 이미지 배열 가져오기

type companyLogosProps = {
    className?: string;
};

const CompanyLogos = ({ className }: companyLogosProps) => {
    return (
        <div className={className}>
            <h5 className='tagline mb-6 text-center text-n-1/50'>
                Helping people create beautiful content at
            </h5>
            <ul className='flex'>
                {companyLogos.map((Logo, index) => (
                    <li
                        className='flex items-center justify-center flex-1 h-[8.5rem]'
                        key={index}
                    >
                        {/* <img src={logo} width={134} height={28} alt={logo} /> 
                            companyLogos 배열에 있는 요소 타입이 Object 라 강제로 컴포넌트화해서 이미지를 추가함 */}
                        <Logo width={134} height={28} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default CompanyLogos;
