import { render } from "@testing-library/react";

import Footer from '../Footer';

test("footer should have some data show on rendering footer", () => {
  const footer = render(<Footer />);

  const footerData = footer.getByTestId('footer');
  // console.log(footerData);

  expect(footerData.innerHTML).toBe("This site is developed by Vinita Kumari - vinitaksoni0502@gmail.com")
})