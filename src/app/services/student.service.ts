import { Injectable } from "@angular/core";
import { Student } from "../models/student.model";

@Injectable({
  providedIn: "root",
})
export class StudentService {
  private students: Student[] = [
    // NOTE: Example data
    {
      id: 1,
      name: "John",
      surname: "Doe",
      degree: 1,
    },
  ];

  getStudents(): Student[] {
    return this.students;
  }
}
