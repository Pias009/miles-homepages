import { DetailListType } from "@/types";
import { myListings } from "@/services/general.api";
import MyListingItem from "./MyListingItem";

export async function generateStaticParams() {
  try {
    const listings = await myListings();
    return (
      listings?.data?.map((item: DetailListType) => ({
        itemId: item?.listing_id.toString(),
      })) || []
    );
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default function Item({ params }: { params: { itemId: string } }) {
  const { itemId } = params;
  return <MyListingItem itemId={itemId} />;
}
