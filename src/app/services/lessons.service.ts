import { Injectable } from "@angular/core";
import { Lesson } from "../models/lesson.model";

@Injectable({
  providedIn: "root",
})
export class LessonsService {
  private lessons: Lesson[] = [
    {
      id: 1,
      name: "Math",
      degree: 1,
      teacher: {
        name: "James",
        surname: "Smith",
      },
    },
  ];

  getLessons(): Lesson[] {
    return this.lessons;
  }

  removeLessons(id: number): void {
    this.lessons = this.lessons.filter((lesson) => lesson.id !== id);
  }
}
