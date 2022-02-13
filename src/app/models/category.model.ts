import { Link_rewrite } from "./link_rewrite.model";
import { Meta_title } from "./meta_title.model";
import { Meta_description } from "./meta_description.model";
import { Meta_keyword} from "./meta_keyword.model";
import { Name } from "./name.model";
import { Description } from "./description.model";
import { Association } from "./associations.model";

export class Category {
    public id?: number;
    public id_parent?: String;
    public level_depth?: String;
    public nb_products_recursive?: String;
    public active?:String;
    public  id_shop_default?: String;
    public is_root_category?: String;
    public position?: String;
    public date_add?: String;
    public date_upd?: String;       
    public name?: Name[];        
    public link_rewrite?:Link_rewrite[];
    public description?: Description[];
    public meta_title?: Meta_title[];
    public meta_description?: Meta_description[];
    public meta_keywords?: Meta_keyword[];
    public associations?: Association;  

}