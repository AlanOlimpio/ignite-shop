export interface ProductInterfaceProps {
  id: string;
  name: string;
  imageUrl: string;
  price: number | null;
  amount?: number;
  description?: string | null;
  defaultPriceId?: string;
}
