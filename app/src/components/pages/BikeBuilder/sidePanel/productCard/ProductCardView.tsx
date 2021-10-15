import { Product } from '../../../../../types';
import QualityIndication from './QualityIndication/QualityIndicationPresenter';

interface Props {
	productInfo: Product;
	onCardClick: Function;
	inCurrentBuild: boolean;
}

const ProductCardView = ({
	productInfo,
	onCardClick,
	inCurrentBuild,
}: Props) => {
	const basicStyling =
		'flex w-full h-36 mb-3 last:mb-0 cursor-pointer select-none ';

	let conditionalStyling;

	if (inCurrentBuild) {
		conditionalStyling = 'bg-green-200 font-white';
	} else {
		conditionalStyling = 'bg-white';
	}

	return (
		<div
			className={basicStyling + conditionalStyling}
			onClick={(productInfo) => onCardClick(productInfo)}
		>
			<div className="m-2 w-full">
				<h3 className="text-lg font-light">{productInfo.name}</h3>
				<h4 className="text-sm mb-2 font-light">{productInfo.brand}</h4>
				<QualityIndication
					grade={productInfo.grade}
					reviews={productInfo.numReviews}
				/>
				<h4 className="text-base">{productInfo.price} kr</h4>
			</div>
			<div className="w-full flex justify-center">
				<img
					src={productInfo.imgLink}
					className="p-2 h-full max-h-full object-scale-down"
				/>
			</div>
		</div>
	);
};

export default ProductCardView;
