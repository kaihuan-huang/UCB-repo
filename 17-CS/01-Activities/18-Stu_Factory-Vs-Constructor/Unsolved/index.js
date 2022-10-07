// TODO: Refactor the class to a factory function.
// class Lesson {
//   constructor() {
//     this.title = 'Module 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }

// const csForJS = new Lesson();
// csForJS.information();

//factory function.
const information = (state) => ({
  information: () => console.log(state.title, state.description)
})

const Lesson = () => {
  const state = {
    title: 'Module 17 - Computer Science',
    description: 'CS for JS'
  }
  return { ...information(state) }
}

const csForJS = Lesson();
csForJS.information()
