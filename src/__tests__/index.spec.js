import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CartStoreContextProvider } from "@/contexts/CartStore";

const listResponse = [
  {
    id: "prod_QpxUn9TjsnnIct",
    object: "product",
    active: true,
    attributes: [],
    created: 1726165002,
    default_price: {
      id: "price_1PyHZPP3375MJN80ekZb2UjN",
      object: "price",
      active: true,
      billing_scheme: "per_unit",
      created: 1726165003,
      currency: "brl",
      custom_unit_amount: null,
      livemode: false,
      lookup_key: null,
      metadata: {},
      nickname: null,
      product: "prod_QpxUn9TjsnnIct",
      recurring: null,
      tax_behavior: "unspecified",
      tiers_mode: null,
      transform_quantity: null,
      type: "one_time",
      unit_amount: 7990,
      unit_amount_decimal: "7990",
    },
    description:
      "Nossas camisetas são de excelência em algodão brasileiro, ideais para todos os climas. Todas as cores são 100% algodão; exceto cinzas: 88% algodão e 12% poliéster",
    images: ["https://files.stripe.com/"],
    livemode: false,
    marketing_features: [],
    metadata: {},
    name: "Camiseta Ignite Aboard",
    package_dimensions: null,
    shippable: null,
    statement_descriptor: null,
    tax_code: null,
    type: "service",
    unit_label: null,
    updated: 1726165004,
    url: null,
  },
];

jest.mock("stripe", () => {
  return jest.fn().mockImplementation(function () {
    return {
      products: {
        list: () => Promise.resolve({ data: listResponse }),
      },
    };
  });
});

describe("Page home", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  it("should display the slide with a product", async () => {
    render(<CartStoreContextProvider>{await Home()}</CartStoreContextProvider>);
    expect(screen.getByTestId("image-keen-slider")).toHaveAttribute(
      "src",
      "/_next/image?url=https%3A%2F%2Ffiles.stripe.com%2F&w=1080&q=75"
    );
    expect(screen.getByText("Camiseta Ignite Aboard")).toBeInTheDocument();
    expect(screen.getByText("R$ 79,90")).toBeInTheDocument();
  });
});
