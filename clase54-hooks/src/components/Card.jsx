// eslint-disable-next-line react/prop-types
export const Card = ({ fullName, imageUrl, family }) => {
  return (
    <div>
      <h3>Game of Thrones</h3>
      <p>{fullName}</p>
      <img style={{ width: "100px" }} src={imageUrl} alt="image-character" />
      <p>{family}</p>
    </div>
  );
};
