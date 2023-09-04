import emptyPlaceHolder from "../assets/no-image-placeholder-6f3882e0.webp";

function getCropedImageUrl(url: string) {
  if (!url) return emptyPlaceHolder;

  const target: string = "media/";
  const index: number = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}

export default getCropedImageUrl;
