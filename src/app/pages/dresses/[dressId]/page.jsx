import { products } from "../../../../Data/data.js";
import DressDetails from "../DressDetails.jsx";
import PagesLayout from "@/app/pagesLayout.js";

export async function generateStaticParams() {
  return products.map((item) => ({
    dressId: item.id.toString(),
  }));
}

export default function DressId({ params }) {
  const { dressId } = params;

  const item = products.find((item) => item.id === dressId);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <PagesLayout>
      <DressDetails item={item} />
    </PagesLayout>
  );
}
