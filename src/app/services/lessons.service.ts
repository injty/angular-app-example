import { Injectable } from "@angular/core";
import { Lesson } from "../models/lesson.model";

@Injectable({
  providedIn: "root",
})
export class LessonsService {
  private Lessons: Lesson[] = [
    {
      id: 1,
      name: "Math",
      degree: 1,
      teacher: {
        name: "John",
        surname: "Doe",
      },
    },
  ];

  getLessons(): Lesson[] {
    return this.Lessons;
  }
}
