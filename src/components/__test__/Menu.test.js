import "@testing-library/jest-dom";
import { render, waitFor, act, fireEvent } from "@testing-library/react";
import ResturantMenu from "../ResturantMenu";
import { Provider } from "react-redux";
import Header from "../Header";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_MENU } from "../../mocks/data";

// so toBeInTheDocument is coming from "testing-library/jest-dom"

// fetch in React return promise
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_MENU);
    },
  });
});

test("Add items to cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <ResturantMenu />
      </Provider>
    </StaticRouter>
  );
  
  await waitFor(() => expect(body.getByTestId("menu")));

  const menu = body.getByTestId("menu");

  console.log(menu)
  // const addBtn = body.getByTestId("menu").querySelector('[data-testid="addBtn"]');

  // fireEvent.click(addBtn[0]);

  // console.log(addBtn)


  // const cart = body.getByTestId("cart");
  // expect(cart.innerHTML.length).toBe("Cart- 1 items");
});