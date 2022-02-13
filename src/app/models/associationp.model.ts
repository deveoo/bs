import { Categorie } from "./categorie.model";
import { Produit } from "./produit.model";
import { Stock_available } from "./stock_available.model";
import { Image } from "./image.model";

export class Associationp { 
   public categories?: Categorie[];
   public images?: Image[];
   public stock_availables?: Stock_available[]
}
