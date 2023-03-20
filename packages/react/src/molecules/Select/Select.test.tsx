import React from "react";
import Select, { RenderOptionProps } from "./Select";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const options = [
  {
    label: "Strict Black",
    value: "strict-black",
  },
  {
    label: "Heavenly Green",
    value: "heavenly-green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
];

test("renders all options passed to it", () => {
  render(<Select options={options} />);

  expect(screen.getAllByRole("menuitemradio")).toHaveLength(options.length);
});

test("renders options using custom renderOption method if passed as prop", () => {
  const renderOption = ({
    option,
    getOptionRecommendedProps,
  }: RenderOptionProps) => {
    return (
      <li {...getOptionRecommendedProps()}>
        Custom render option {option.label}
      </li>
    );
  };
  render(<Select options={options} renderOption={renderOption} />);

  expect(screen.getAllByRole("menuitemradio")[0]).toHaveTextContent(
    /Custom render option/
  );
});

test("calls the onOptionSelected prop with the selected option and its index if passed", async () => {
  const user = userEvent.setup();

  const handler = jest.fn();
  render(<Select options={options} onOptionSelected={handler} />);

  const button = screen.getByRole("button");
  await user.click(button);
  const option = screen.getByRole("menuitemradio", { name: "Heavenly Green" });
  await user.click(option);

  expect(handler).toHaveBeenCalledWith(options[1], 1);
});

test("the button label changes to the selected option label", async () => {
  const user = userEvent.setup();

  render(<Select options={options} />);

  const button = screen.getByRole("button");
  await user.click(button);
  const option = screen.getByRole("menuitemradio", { name: "Heavenly Green" });
  await user.click(option);

  expect(button).toHaveTextContent(/Heavenly Green/);
});

test("snapshot of the selected option state", async () => {
  const user = userEvent.setup();

  const { asFragment } = render(<Select options={options} />);

  const button = screen.getByRole("button");
  await user.click(button);
  const option = screen.getByRole("menuitemradio", { name: "Heavenly Green" });
  await user.click(option);

  expect(asFragment()).toMatchSnapshot();
});

test("can customize select label", () => {
  render(<Select label="custom label" />);

  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("custom label");
});
