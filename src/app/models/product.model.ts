import { Associationp } from "./associationp.model";
import { Description } from "./description.model";
import { Name } from "./name.model";

export class Product {
        public id?: number;
        public id_manufacturer?: String;
        public id_supplier?: String;
        public id_category_default?: String;
        public id_default_image?: String;
        public manufacturer_name?: String;
        public quantity?: String;
        public price?: String;
        public name?: Name[];
        public description?: Description[];
        public description_short?: Description[];
        public associations?:Associationp 

}