import Image from 'next/image';

const ImageSection = ({ src, alt, priority = false }) => {
  return (
    <section className="w-screen py-8">
      <div className="container mx-auto px-4">
        <figure className="relative aspect-[16/9] w-full max-w-4xl mx-auto">
          <Image
            src={'https://res.cloudinary.com/dsnrp2dlj/image/upload/v1745494836/bwjgpkhalfkdb1at2clt.jpg'}
            alt={''}
            fill
         //   sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover rounded-lg shadow-lg w-[95%]"
            placeholder="blur"
            blurDataURL="https://tse2.mm.bing.net/th?id=OIP.v3_2lDKLaxi3QIOKETrd0wHaEK&pid=Api&P=0&h=180" // Replace with a low-res placeholder image
          />
          <figcaption className="sr-only">{alt}</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default ImageSection;

