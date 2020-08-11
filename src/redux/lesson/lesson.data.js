const LESSONS_DATA = [
  {
    id: 1,
    title: 'Jazz Trumpet',
    instructor: {
      name: 'Scott Daniels',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates assumenda omnis temporibus iste rem fugiat, debitis qui, doloremque nihil, alias molestiae pariatur quaerat harum ullam perferendis hic fuga quia quisquam?',
      imgUrl: 'https://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/201902/692276633.jpeg',
      availabilities: [
        {
          id: 1,
          day: 'Tuesday',
          times: [
            {
              id: 1,
              time: '8am - 9am'
            },
            {
              id: 2,
              time: '9am - 10am'
            },
            {
              id: 3,
              time: '11am - 12pm'
            }
          ]
        },
        {
          id: 2,
          day: 'Wednesday',
          times: [
            {
              id: 4,
              time: '2:30pm - 3:30pm'
            },
            {
              id: 5,
              time: '4pm - 5pm'
            },
            {
              id: 6,
              time: '5pm - 6pm'
            }
          ]
        },
        {
          id: 3,
          day: 'Friday',
          times: [
            {
              id: 7,
              time: '11am - 12am'
            },
            {
              id: 8,
              time: '12pm - 1pm'
            },
            {
              id: 9,
              time: '1pm - 2pm'
            }
          ]
        }
      ]
    }
  },
  {
    id: 2,
    title: 'Singing',
    instructor: {
      name: 'Melinda McKinnis',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates assumenda omnis temporibus iste rem fugiat, debitis qui, doloremque nihil, alias molestiae pariatur quaerat harum ullam perferendis hic fuga quia quisquam?',
      imgUrl: 'https://i.ytimg.com/vi/6RGxuL64XYQ/maxresdefault.jpg',
      availabilities: []
    }
  },
  {
    id: 3,
    title: 'Classical Guitar',
    instructor: {
      name: 'Randy Ronaldson',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates assumenda omnis temporibus iste rem fugiat, debitis qui, doloremque nihil, alias molestiae pariatur quaerat harum ullam perferendis hic fuga quia quisquam?',
      imgUrl: 'https://fromthetop.org/wp-content/uploads/parsasabet_guitar_351.jpg',
      availabilities: []
    }
  }
];

export default LESSONS_DATA;