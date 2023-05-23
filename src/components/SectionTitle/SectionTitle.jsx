
const SectionTitle = ({subTitle, title}) => {
    return (
		<div className='text-center w-1/2 mx-auto'>
			<p className='text-[20px] text-[#D99904]'>--- {subTitle} ---</p>
			<p className='text-[40px] py-[10px] my-[10px] border-y-[4px] border-[#E8E8E8] leading-[48px]'>
				{title}
			</p>
		</div>
	);
};

export default SectionTitle;