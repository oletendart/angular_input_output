import { Component, OnInit } from "@angular/core";
import { filter } from "rxjs/operators";

interface Card {
  id: number;
  title: string;
  about: string;
}

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.css"]
})
export class CardListComponent implements OnInit {
  cards: Card[] = [
    {
      title: "Ceci est une carte",
      about: "Ceci est une description",
      id: 1
    },
    {
      title: "Ceci est une carte 2",
      about: "Ceci est une description 2",
      id: 2
    },
    {
      title: "Ceci est une carte 3",
      about: "Ceci est une description 3",
      id: 3
    },
    {
      title: "Ceci est une carte 4",
      about: "Ceci est une description 4",
      id: 4
    }
  ];

  constructor() {}

  ngOnInit() {}

  trackCard(index: number, item: Card): string {
    return item.id.toString();
  }

  onRemove(item: Card) {
    this.cards = this.cards.filter(c => c.id !== item.id);
  }

  onClone(item: Card) {
    this.cards = [...this.cards, item];
  }
}
