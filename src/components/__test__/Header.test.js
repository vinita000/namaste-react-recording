import { render } from '@testing-library/react'
// here render create small container for you where u loaded header component inside it.
import Header from '../Header';
// this code is running in js dom not browser
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { StaticRouter } from 'react-router-dom/server'
test("logo should load on rendering header", () => {
  // load header
  const header = render(<StaticRouter><Provider store={store}><Header /></Provider></StaticRouter>)
  // console.log(header);
  // check if logo is loaded
  
  // const logo = header.getAllByTestId('logo'); // it means any where i m using get all of them
  const logo = header.getByTestId('logo');
  // console.log(logo);
  // expect(logo.src).toBe('dummyLogo.png')
  expect(logo.src).toBe('http://localhost/dummyLogo.png')
})

test("online status should be show on rendering header", () => {
  // load header
  const header = render(<StaticRouter><Provider store={store}><Header /></Provider></StaticRouter>)
  // console.log(header);
  // check if logo is loaded
  
  // const logo = header.getAllByTestId('logo'); // it means any where i m using get all of them
  const onlineStatus = header.getByTestId('online-test');
  // const offlineTestStatus = header.getByTestId('offline-test');

  // console.log(onlineStatus);
  // expect(logo.src).toBe('dummyLogo.png')
  expect(onlineStatus.innerHTML).toBe("Welocme, you r online Vinita Kumari")
  // expect(offlineTestStatus.innerHTML).toBe("oops!!! you r offline")
})

test("cart should have zero items on rendering header", () => {
  // load header
  const header = render(<StaticRouter><Provider store={store}><Header /></Provider></StaticRouter>)
  // console.log(header);
  // check if logo is loaded
  
  // const logo = header.getAllByTestId('logo'); // it means any where i m using get all of them
  const cart = header.getByTestId('cart');
  // const offlineTestStatus = header.getByTestId('offline-test');

  // console.log(cart);
  // expect(logo.src).toBe('dummyLogo.png')
  // expect(onlineStatus.innerHTML).toBe("Welocme, you r online Vinita Kumari")
  expect(cart.innerHTML).toBe(" Cart- 0 Items ")
})