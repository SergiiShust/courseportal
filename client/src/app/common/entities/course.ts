export class Course {
  constructor(public id: string,
              public title: string,
              public date: string,
              public duration: Number,
              public description: string,
              public topRated: boolean) {
  }
}