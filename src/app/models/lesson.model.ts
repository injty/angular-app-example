export interface Teacher {
  name: string;
  surname: string;
}

export interface Lesson {
  id: number;
  name: string;
  degree: number;
  teacher: Teacher;
}
