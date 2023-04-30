import '../styles/notes.css';
import Note from './Note';
const Notes = () => {
  const data = [
    {
      id: 1,
      title: 'Sample Note 1',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ipsum voluptatibus officia nobis necessitatibus maxime modi saepe perferendis tenetur libero.',
    },
    {
      id: 2,
      title: 'Sample Note 2',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ipsum voluptatibus officia nobis necessitatibus maxime modi saepe perferendis tenetur libero.',
    },
    {
      id: 3,
      title: 'Sample Note 3',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ipsum voluptatibus officia nobis necessitatibus maxime modi saepe perferendis tenetur libero.',
    },
    {
      id: 4,
      title: 'Sample Note 4',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ipsum voluptatibus officia nobis necessitatibus maxime modi saepe perferendis tenetur libero.',
    },
    {
      id: 5,
      title: 'Sample Note 5',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ipsum voluptatibus officia nobis necessitatibus maxime modi saepe perferendis tenetur libero.',
    },
    {
      id: 6,
      title: 'Sample Note 6',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ipsum voluptatibus officia nobis necessitatibus maxime modi saepe perferendis tenetur libero.',
    },
  ];

  return (
    <main id="main">
      {data.map((data) => (
        <Note key={data.id} data={data} />
      ))}
    </main>
  );
};

export default Notes;
