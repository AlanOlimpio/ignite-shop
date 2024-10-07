export interface ProductInterfaceProps {
  id: string;
  name: string;
  imageUrl: string;
  price: number | string | null;
  amount?: number;
  description?: string | null;
  defaultPriceId?: string;
}
