import { Component, OnInit } from "@angular/core";

@Component({
  selector: "chores",
  templateUrl: "./chores.component.html",
  styleUrls: ["./chores.component.css"],
})
export class ChoresComponent implements OnInit {
  chores = [
    {
      title: "Yesterday's Chores",
      tasks: [
        "Empty dishwasher",
        "Start LaunchCode prep work",
        "Buy groceries",
      ],
    },
    {
      title: "Today's Chores",
      tasks: [
        "Load dishwasher",
        "Finish LaunchCode prep work",
        "Buy the groceries you forgot",
      ],
    },
    {
      title: "Tomorrow's Chores",
      tasks: [
        "Empty dishwasher AGAIN",
        "Play with LaunchCode practice code",
        "Groceries AGAIN",
      ],
    },
    {
      title: "The Dark Empire's Chores",
      tasks: [
        "Attune to new lightsaber",
        "Fist bump Palpetine",
        "Reclaim Old Empire territory",
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
