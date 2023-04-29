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
  ];

  return (
    <div>
        <ul>
          {data.map((data) => (
            <li style={{ 'margin-top': '30px' }} key={data.id}>
              {data.body}
            </li>
          ))}
        </ul>
        <ul>
          {data.map((data) => (
            <li style={{ 'margin-top': '30px' }} key={data.id}>
              {data.body}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Notes;
