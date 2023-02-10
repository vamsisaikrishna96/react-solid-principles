interface IThumbnailProps {
  // product: IProduct;
  imageUrl: string;
}

export function Thumbnail(props: IThumbnailProps) {
  const { imageUrl } = props;

  return (
    <img
      className="p-8 rounded-t-lg h-48"
      src={imageUrl}
      // src={product.image}
      alt="product image"
    />
  );
}
