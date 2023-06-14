import "@testing-library/jest-dom";
import { render, waitFor, act, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server";
import { RESTURANT_DATA } from "../../mocks/data";

// so toBeInTheDocument is coming from "testing-library/jest-dom"

// fetch in React return promise
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTURANT_DATA);
    },
  });
}); //we are creating a dummy function given by jest for mocking fetch, test is not understand fetch

// test("search results on render homepage", () => {
//   const body = render(<StaticRouter><Provider store={store}><Body /></Provider></StaticRouter>);
//   // console.log(body);
//   const search = body.getByTestId('search-btn')
//   console.log(search);
// });

test("Shimmer should on render homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  // console.log(body);
  const shimmer = body.getByTestId("shimmer");
  // console.log(shimmer);
  // expect(shimmer).toBeInTheDocument(); // it say that shimmer is loaded in document or not
  expect(shimmer.children.length).toBe(10);
});

test("Resturant should load on homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  // console.log(body);
  // const shimmer = body.getByTestId('shimmer');
  // console.log(shimmer);
  // expect(shimmer).toBeInTheDocument(); // it say that shimmer is loaded in document or not

  await waitFor(() => expect(body.getByTestId("search-btn")));
  const resturants = body.getByTestId("resturant-list");
  expect(resturants.children.length).toBe(15);
});


test("on search event search Resturant", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const input = body.getByTestId("search-input")

  fireEvent.change(input, {
    target: {
      value: 'food',
    },
  })

  const searchBtn = body.getByTestId("search-btn");

  fireEvent.click(searchBtn);

  const resturants = body.getByTestId("resturant-list");
  expect(resturants.children.length).toBe(2);
});


//fetch in React return readable stream and convert it to json

// Here we do two things Promise.resolve and Promise.fail so two senarion failing and passing promise

// fetch and json is a function that retun promise
