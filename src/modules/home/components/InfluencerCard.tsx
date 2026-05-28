type Props = {
  name: string;
  category: string;
  followers: number | string;
  instagram: string;
  image: string;
};

export default function InfluencerCard({
  name,
  category,
  followers,
  instagram,
  image,
}: Props) {

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition">

      <img
        src={image}
        alt={name}
        className="w-full h-72 object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold mb-4">
          {name}
        </h2>

        <p>
          <span className="font-semibold">Category:</span> {category}
        </p>

        <p>
          <span className="font-semibold">Followers:</span> {followers}
        </p>

        <p>
          <span className="font-semibold">Instagram:</span> {instagram}
        </p>

      </div>

    </div>
  );
}