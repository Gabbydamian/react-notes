/* eslint-disable react/prop-types */
const Note = ({ data }) => {
  return (
    <a key={data.id} href="#">
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </a>
  );
};

export default Note;
