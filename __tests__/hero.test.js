import { render } from '@testing-library/react';
import Hero from '../components/dashboard/main/Hero';
import '@testing-library/jest-dom';

test('should render hero title and image', () => {
	const { getByText, getByAltText } = render(<Hero />);
	const heroTitle = getByText('Cycling Dashboard');
	const heroImage = getByAltText('Image of a bikes handlebars');
	expect(heroTitle).toBeVisible();
	expect(heroImage).toBeVisible();
});
