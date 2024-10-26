import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { ExamsComponent } from "./components/exams/exams.component";
import { HeaderComponent } from "./components/header/header.component";
import { LessonsComponent } from "./components/lessons/lessons.component";
import { StudentsComponent } from "./components/students/students.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, StudentsComponent, LessonsComponent, ExamsComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {}
