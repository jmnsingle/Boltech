const compare = ({
  oldHash,
  newHash,
}: {
  oldHash: string;
  newHash: string;
}) => {
  return oldHash === newHash;
};

export default compare;
