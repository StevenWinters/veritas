import Sunrise from "../assets/menu/menu-sunrise.jpg";
import OrangeJuice from "../assets/menu/menu-orange-juice.jpg";
import PinkDrink from "../assets/menu/menu-pink-drink.jpg";
import StrawberryYogurtDrink from "../assets/menu/menu-strawberry-yogurt-drink.jpg";
import Margarita from "../assets/menu/menu-margarita.jpg";
import LimeGinCocktail from "../assets/menu/menu-lime-and-gin-cocktail.jpg";
import NakedLady from "../assets/menu/menu-naked-lady.jpg";
import PopcornChicken from "../assets/menu/menu-popcorn-chicken.jpg";
import BiteSizedChicken from "../assets/menu/menu-bite-size-chicken.jpg";
import TunaCanape from "../assets/menu/menu-tuna-canape.jpg";
import CrackerMixture from "../assets/menu/menu-cracker-mixture.jpg";

export const selectionData = [
  {
    id: 1,
    image: Sunrise,
    path: "/menu#mocktails",
    name: "Mocktails",
  },
  {
    id: 2,
    image: Margarita,
    path: "/menu#cocktails",
    name: "Cocktails",
  },
  {
    id: 3,
    image: CrackerMixture,
    path: "/menu#food",
    name: "Food",
  },
];

export const storeData = [
  {
    id: 1,
    sectionId: "mocktails",
    section: "Mocktails",
    items: [
      {
        id: 1,
        image: Sunrise,
        price: 20,
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, aut!",
        name: "Sunrise",
      },
      {
        id: 2,
        image: OrangeJuice,
        price: 20,
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, aut!",
        name: "Orange Juice Topped with Grenadine and Sprite",
      },
      {
        id: 3,
        image: PinkDrink,
        price: 20,
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, aut!",
        name: "Pink Drink",
      },
      {
        id: 4,
        image: StrawberryYogurtDrink,
        price: 20,
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, aut!",
        name: "Strawberry Yogurt Drink",
      },
    ],
  },
  {
    id: 2,
    sectionId: "cocktails",
    section: "Cocktails",
    items: [
      {
        id: 1,
        image: Margarita,
        price: 20,
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, aut!",
        name: "Margarita",
      },
      {
        id: 2,
        image: LimeGinCocktail,
        price: 20,
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, aut!",
        name: "Lime and Gin Cocktail",
      },
      {
        id: 3,
        image: NakedLady,
        price: 20,
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, aut!",
        name: "Naked Lady",
      },
    ],
  },
  {
    id: 3,
    sectionId: "food",
    section: "Food",
    items: [
      {
        id: 1,
        image: PopcornChicken,
        price: 20,
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, aut!",
        name: "Popcorn Chicken",
      },
      {
        id: 2,
        image: BiteSizedChicken,
        price: 20,
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, aut!",
        name: "Bite-sized Chicken Pieces with Gravy or Honey Lemon Glaze",
      },
      {
        id: 3,
        image: TunaCanape,
        price: 20,
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, aut!",
        name: "Tuna Canape",
      },
      {
        id: 4,
        image: CrackerMixture,
        price: 20,
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, aut!",
        name: "Cracker Topped with Tuna Mixture",
      },
    ],
  },
];
