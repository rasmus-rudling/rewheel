import React from 'react';
import NavBarPresenter from './NavBar/NavBarPresenter';

interface Props {
	children: JSX.Element;
}

const PageWrapper = ({ children }: Props) => {
	return (
		<div className="bg-gray-100 min-h-screen w-full">
			<NavBarPresenter />
			{children}
		</div>
	);
};

export default PageWrapper;