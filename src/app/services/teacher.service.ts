import { Injectable } from "@angular/core";
import { Teacher } from "../models/lesson.model";

@Injectable({
  providedIn: "root",
})
export class TeacherService {
  private teachers: Teacher[] = [
    { name: "James", surname: "Smith" },
    { name: "Emily", surname: "Johnson" },
    { name: "Michael", surname: "Brown" },
    { name: "Sophia", surname: "Davis" },
    { name: "Daniel", surname: "Wilson" },
  ];

  getTeachers(): Teacher[] {
    return this.teachers;
  }
}
