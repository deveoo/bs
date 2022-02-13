import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Association } from '../models/associations.model';
import { Produit } from '../models/produit.model';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[];
  product: Product;

  constructor(private http: HttpClient) { }

  getProductsById(id: string){ 
    console.log(`${environment.apiUrl}products?ws_key=${environment.ws_key}&output_format=JSON`);
    return this.http.get(`${environment.apiUrl}products?ws_key=${environment.ws_key}&filter[id]=[${id}]&output_format=JSON&display=[name,id,id_default_image,price,description_short,description]`,{
      observe:'response'});
    
  }
  getProductById(id: string){ 
    console.log(`${environment.apiUrl}products?ws_key=${environment.ws_key}&output_format=JSON`);
    return this.http.get(`${environment.apiUrl}products?ws_key=${environment.ws_key}&filter[id]=[${id}]&output_format=JSON&display=full`,{
      observe:'response'});
    
  }
  getAllProduct(){ 
    console.log(`${environment.apiUrl}products?ws_key=${environment.ws_key}&output_format=JSON`);
    return this.http.get(`${environment.apiUrl}products?ws_key=${environment.ws_key}&output_format=JSON&display=[name,id,id_default_image,price,description_short,description]`,{
      observe:'response'});
    
  }
  searchProduct(text: string){ 
    console.log(`${environment.apiUrl}products?ws_key=${environment.ws_key}&output_format=JSON`);
    return this.http.get(`${environment.apiUrl}products?ws_key=${environment.ws_key}&filter[name]=%[${text}]%&output_format=JSON&display=[name,id,id_default_image,price,description_short,description]`,{
      observe:'response'});
    
  }
  setProduct(product: Product){ 
    this.product = product;  
  }
  getProduct(){ 
    return this.product;  
  }

  productList() {
    this.products = [
      {
            "id": 20,
            "id_manufacturer":"1",
            "id_supplier": "1",
            "id_category_default": "1",
            "manufacturer_name": "1",
            "quantity": "1",
            "id_default_image": "https://buqsha.linkeys.net/api/images/products/20/24?ws_key=HL6S599display=fullLPTE2KSZTW4XJQSYA1HSZL8GT&output_format=JSON",
            "price": "350.000000",
            "name": [
                {
                    "id": "1",
                    "value": "Supreme Skin Gel"
                },
                {
                    "id": "2",
                    "value": "جل سوبريم"
                }
            ],
            "description": [
                {
                    "id": "1",
                    "value": "<p>Less wrinkles and a visibly younger look within 60 minutes! Developed and produced in Germany, this extract is comparable to needle injections containing Botulinum Toxin. The results are similar, but it’s much simpler to use.Biotulin is applied to the face as a soothing lotion. It is quickly absorbed, smoothing the skin to make it soft and supple. Your features will still be reanimated and beautiful.</p>"
                },
                {
                    "id": "2",
                    "value": "<p style=\"text-align:right;\">علكة SugarBearHair هي فيتامينات شعر ناعمة ولذيذة مصنوعة من مكونات نباتية وسهلة المضغ بنكهة التوت الطبيعي للحصول على طعم حلو يمكنك االستمتاع به تم صنع هذه العلكة من الفيتامينات األساسية الصديقة للشعر مثل البيوتين وحمض الفوليك وفيتامين د. ما عليك سوى مضغ عدد ( 2) حبة يوميا للحصول على جميع العناصر الغذائية الالزمة لتلبية أهداف شعرك ! على عكس الفيتامينات الكبيرة التقليدية، فإن علكة SugarBearHair سهلة التناول ولطيفة على المعدة.</p>"
                }
            ],
            "description_short": [
                {
                    "id": "1",
                    "value": "<p>Only a small amount is needed. Apply a small drop of Biotulin gel evenly on the face and neck area and massage gently into the skin. Skin is visibly firmer after just one hour, and this will last for up to 24 hours. Use Biotulin gel before applying your daily skincare products.</p>"
                },
                {
                    "id": "2",
                    "value": ""
                }
            ],
            "associations": {
              "categories": [
                  {
                      "id": "2"
                  },
                  {
                      "id": "10"
                  },
                  {
                      "id": "14"
                  },
                  {
                      "id": "20"
                  },
                  {
                      "id": "28"
                  }
              ],
              "images": [
                  {
                      "id": "24"
                  },
                  {
                      "id": "29"
                  },
                  {
                      "id": "30"
                  },
                  {
                      "id": "31"
                  }
              ],
              "stock_availables": [
                  {
                      "id": "59",
                      "id_product_attribute": "0"
                  }
              ]
          }
      },
        {
            "id": 21,
            "id_manufacturer":"1",
            "id_supplier": "1",
            "id_category_default": "1",
            "manufacturer_name": "1",
            "quantity": "1",
            "id_default_image": "https://buqsha.linkeys.net/api/images/products/21/25?ws_key=HL6S599display=fullLPTE2KSZTW4XJQSYA1HSZL8GT&output_format=JSON",
            "price": "400.000000",
            "name": [
                {
                    "id": "1",
                    "value": "Daynite 24+ Anti-Wrinkle Cream"
                },
                {
                    "id": "2",
                    "value": "كريم مكافح التجاعيد داي نايت + 24"
                }
            ],
            "description": [
                {
                    "id": "1",
                    "value": "<p><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">Day and night anti-wrinkle creme providing perfectly coordinated basic care for every skin type and age. Dermatological studies have shown that the Biotulin active ingredient combination reduces wrinkle depth by up to 25% within just one hour.</span><br style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\" /><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">Daynite24+ provides the skin with moisture and vitamins during the day. The light consistency does not create any ugly shine, your usual make-up can be easily applied after morning use of Daynite 24+.</span><br style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\" /><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">At night, Daynite24+ regenerates the skin due to natural grape seed oil. During development, particular emphasis was placed on the nourishing properties of individual active ingredients. The skin is optimally supplied by hyaluronic acid, ideally stimulating the skin’s own collagen formation.</span></p>"
                },
                {
                    "id": "2",
                    "value": ""
                }
            ],
            "description_short": [
                {
                    "id": "1",
                    "value": ""
                },
                {
                    "id": "2",
                    "value": "<p style=\"text-align:right;\"><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">كريم مضاد للتجاعيد ليلاً ونهارًا يوفر عناية أساسية منسقة تمامًا لكل أنواع البشرة والأعمار. أظهرت الدراسات الجلدية أن تركيبة المكون الفعال Biotulin تقلل من عمق التجاعيد بنسبة تصل إلى 25٪ خلال ساعة واحدة فقط.</span><br style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\" /><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">يوفر الكريم للبشرة الرطوبة والفيتامينات خلال النهار ويمكن وضع مكياجك المعتاد بسهولة بعد الاستخدام الصباحي.</span><br style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\" /><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">كما يعمل على تجديد خلايا الجلد بفضل زيت بذور العنب الطبيعي جيث تم التركيز بشكل خاص على الخصائص المغذية للمكونات النشطة الفردية ليتم تزويد البشرة بحمض الهيالورونيك على النحو الأمثل، مما يحفز بشكل مثالي تكوين الكولاجين في الجلد.</span></p>"
                }
            ],
            "associations": {
              "categories": [
                  {
                      "id": "2"
                  },
                  {
                      "id": "10"
                  },
                  {
                      "id": "14"
                  },
                  {
                      "id": "20"
                  },
                  {
                      "id": "28"
                  }
              ],
              "images": [
                  {
                      "id": "24"
                  },
                  {
                      "id": "29"
                  },
                  {
                      "id": "30"
                  },
                  {
                      "id": "31"
                  }
              ],
              "stock_availables": [
                  {
                      "id": "59",
                      "id_product_attribute": "0"
                  }
              ]
          }
      
        },
        {
            "id": 22,
            "id_manufacturer":"1",
            "id_supplier": "1",
            "id_category_default": "1",
            "manufacturer_name": "1",
            "quantity": "1",
            "id_default_image": "https://buqsha.linkeys.net/api/images/products/22/386?ws_key=HL6S599display=fullLPTE2KSZTW4XJQSYA1HSZL8GT&output_format=JSON",
            "price": "180.000000",
            "name": [
                {
                    "id": "1",
                    "value": "SUGARBEARHAIR VITAMINS"
                },
                {
                    "id": "2",
                    "value": "SUGARBEARHAIR VITAMINS"
                }
            ],
            "description": [
                {
                    "id": "1",
                    "value": "<p><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">SugarBearHair vitamins are soft and delicious chewy hair vitamins! They are vegetarian and cruelty-</span><br style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\" /><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">free. They're flavored with natural berries for a sweet taste you can enjoy!</span><br style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\" /><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">Sugar Bear Hair was formulated with essential hair-friendly vitamins like biotin, folic acid, and</span><br style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\" /><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">Vitamin D.</span><br style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\" /><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">Just chew and swallow 2 gummy bears a day to get all the nutrients needed to meet your hair goals!</span><br style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\" /><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">Unlike the conventional large, gross vitamins, our gummies are easy to take and are gentle on your</span><br style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\" /><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">stomach.</span><br style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\" /><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">Our vitamins do not contain hormones so it will not affect your facial or body hair.</span><br style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\" /><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">No gelatin. No dairy. No gluten. No side effects.</span><br style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\" /><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">Results will vary from person to person.</span><br style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\" /><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">Recommended for ages 13 and older.</span></p>"
                },
                {
                    "id": "2",
                    "value": "<p><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">علكة SugarBearHair هي فيتامينات شعر ناعمة ولذيذة مصنوعة من مكونات نباتية وسهلة المضغ بنكهة</span><br style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\" /><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">التوت الطبيعي للحصول على طعم حلو يمكنك االستمتاع به</span><br style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\" /><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">تم صنع هذه العلكة من الفيتامينات األساسية الصديقة للشعر مثل البيوتين وحمض الفوليك وفيتامين د.</span><br style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\" /><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">ما عليك سوى مضغ عدد ( 2) حبة يوميا للحصول على جميع العناصر الغذائية الالزمة لتلبية أهداف شعرك !</span><br style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\" /><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">على عكس الفيتامينات الكبيرة التقليدية، فإن علكة SugarBearHair سهلة التناول ولطيفة على المعدة.</span><br style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\" /><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">ال تحتوي على هرمونات لذا لن تؤثر على شعر الوجه او الجسم وليس لها أي آثار جانبية.</span><br style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\" /><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">النتائج ستختلف من شخص آلخر.</span><br style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\" /><span style=\"color:#262626;font-family:'-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size:14px;background-color:#ffffff;\">يفضل استخدامه للبالغين من العمر 13 عا ًما أو أكثر.</span></p>"
                }
            ],
            "description_short": [
                {
                    "id": "1",
                    "value": ""
                },
                {
                    "id": "2",
                    "value": ""
                }
            ],
            "associations": {
              "categories": [
                  {
                      "id": "2"
                  },
                  {
                      "id": "10"
                  },
                  {
                      "id": "14"
                  },
                  {
                      "id": "20"
                  },
                  {
                      "id": "28"
                  }
              ],
              "images": [
                  {
                      "id": "24"
                  },
                  {
                      "id": "29"
                  },
                  {
                      "id": "30"
                  },
                  {
                      "id": "31"
                  }
              ],
              "stock_availables": [
                  {
                      "id": "59",
                      "id_product_attribute": "0"
                  }
              ]
          }
      
        }
    ];

    return this.products;
  }
}
