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
            '8am - 9am',
            '9am - 10am',
            '11am - 12pm'
          ]
        },
        {
          id: 2,
          day: 'Wednesday',
          times: [
            '2:30pm - 3:30pm',
            '4pm - 5pm',
            '5pm - 6pm'
          ]
        },
        {
          id: 3,
          day: 'Friday',
          times: [
            '11am - 12am',
            '12pm - 1pm',
            '1pm - 2pm'
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
  // {
  //   id: 3,
  //   name: 'Randy Ronaldoson',
  //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates assumenda omnis temporibus iste rem fugiat, debitis qui, doloremque nihil, alias molestiae pariatur quaerat harum ullam perferendis hic fuga quia quisquam?',
  //   title: 'Classical Guitar',
  //   imgUrl: 'https://fromthetop.org/wp-content/uploads/parsasabet_guitar_351.jpg'
  // }

export default LESSONS_DATA;