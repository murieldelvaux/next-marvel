import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Favorite } from "@/app/(features)/components/Favorite/Favorite";
import { generateHeroPaginatedResponseMock } from "@tests/mocks/generateHeroPaginatedMock";

describe("Favorite Component", () => {
  const hero = generateHeroPaginatedResponseMock();

  test("renders the favorite component with variant equals favorite", () => {
    render(<Favorite variant="favorite" />);

    const favorite = screen.getByTestId("favorite");

    expect(favorite).toBeInTheDocument();
  });

  test("renders the favorite component and test click actions", () => {
    render(<Favorite variant="favorite" hero={hero.data.results[0]} />);

    const favorite = screen.getByTestId("favorite");
    expect(favorite).toBeInTheDocument();

    waitFor(() => {
      fireEvent.click(favorite);
    });

    fireEvent.click(favorite);
  });

  test("renders the favorite component with variant equals filterFavoriteOnly", () => {
    render(
      <Favorite variant="filterFavoriteOnly" hero={hero.data.results[0]} />
    );

    const favorite = screen.getByTestId("filterFavoriteOnly");
    expect(favorite).toBeInTheDocument();

    fireEvent.click(favorite);
  });
});
