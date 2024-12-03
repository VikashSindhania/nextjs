import Image from "next/image";

const ImageSection = () => {
  return (
    <div>
      <Image
        src="/banner-min.jpg"
        alt="heroimage"
        width={1200}
        height={800}
        layout="responsive"
      />
    </div>
  );
};

export default ImageSection;
