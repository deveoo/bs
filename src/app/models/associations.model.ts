import { Categorie } from "./categorie.model";
import { Produit } from "./produit.model";
import { Stock_available } from "./stock_available.model";
import { Image } from "./image.model";

export class Association { 
   public categories?: Categorie[];
   public products?: Produit[];
}

