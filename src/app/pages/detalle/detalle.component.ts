import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// Definición de interfaz para producto
interface Product {
  name: string;
  price: number;
  image: string;
  specs: string;
}

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class DetalleComponent implements OnInit {
  product: Product | undefined;
  cantidad: number = 1;
  cuotas: number = 1;

  auricularesProducts: Product[] = [
    {
      name: "Redmi Buds 6 Play",
      price: 230,
      image: "https://www.ectgadget.com/assets/images/products/890180_Redmi-Buds-6-Play.webp",
      specs: "Auriculares inalámbricos con buen sonido y batería."
    },
    {
      name: "Redmi Buds 4 Lite",
      price: 260,
      image: "https://tecnocomprasbolivia.com/cdn/shop/files/auriculares-bluetooth-xiaomi-redmi-buds-4-lite-con-estuche-de-carga-autonomia-5h-negros_1024x1024@2x.png?v=1688772016",
      specs: "Versión Lite con diseño compacto y bluetooth estable."
    },
    {
      name: "Redmi Buds 6 Active",
      price: 290,
      image: "https://www.ectgadget.com/assets/images/products/thumb/653353_xiaomi-active-6.webp",
      specs: "Diseñados para actividades deportivas, resistentes al sudor."
    },
    {
      name: "Redmi Buds 6 Lite",
      price: 320,
      image: "https://www.ectgadget.com/assets/images/products/339986_Redmi-Buds-6-Lite.webp",
      specs: "Calidad de sonido buena y conectividad mejorada."
    },
    {
      name: "Redmi Buds 5",
      price: 410,
      image: "https://www.ectgadget.com/assets/images/products/thumb/262727_XiaomiBuds5.webp",
      specs: "Cancelación de ruido activa y buena duración de batería."
    },
    {
      name: "Redmi Buds 6",
      price: 510,
      image: "https://www.ectgadget.com/assets/images/products/thumb/426849_redmi-buds-6.webp",
      specs: "Alta fidelidad de audio y diseño ergonómico."
    },
    {
      name: "Redmi Buds 5 Pro",
      price: 640,
      image: "https://www.ectgadget.com/assets/images/products/866056_Screenshot%202024-07-18%20121822.webp",
      specs: "Versión Pro con mejora en graves y batería de larga duración."
    },
    {
      name: "Redmi Buds 6 Pro",
      price: 730,
      image: "https://www.ectgadget.com/assets/images/products/158732_Redmi-Buds-6-Lite.webp",
      specs: "Sonido envolvente y micrófonos duales."
    },
    {
      name: "Galaxy Buds FE",
      price: 850,
      image: "https://images.samsung.com/is/image/samsung/p6pim/cl/feature/164862951/cl-feature--nbsp--538709511?$FB_TYPE_I_JPG$",
      specs: "Auriculares Samsung con sonido envolvente y modo ambiente."
    },
    {
      name: "Galaxy Buds 3 Pro",
      price: 2020,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRfa7kyBqmRuI2dhZbfFhyUWv1RaVsoLpPw&s",
      specs: "Top de gama de Samsung con ANC de alta calidad."
    },
    {
      name: "Buds T100",
      price: 270,
      image: "https://m.media-amazon.com/images/I/61C1yCk8tBL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
      specs: "Buena relación calidad/precio, con estuche compacto."
    },
    {
      name: "Buds T110",
      price: 290,
      image: "https://www.powerplanetonline.com/cdnassets/realme_buds_t110_azul_01_l.jpg",
      specs: "Auriculares ligeros, ideales para uso diario."
    },
    {
      name: "Buds Air 3s",
      price: 320,
      image: "https://i5.walmartimages.cl/asr/b3b20a09-5f85-4eb1-8f33-911d412e418a.b3c67e02b7964898a44f11c1bd1bffa9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      specs: "Diseño moderno y buena conexión Bluetooth."
    },
    {
      name: "Buds T300",
      price: 370,
      image: "https://nextlevel.com.bo/cdn/shop/files/realme-buds-t300-true-wireless-stylish-black-front-view.png?v=1716212729",
      specs: "Compatibles con asistentes de voz y controles táctiles."
    },
    {
      name: "Buds T310",
      price: 390,
      image: "https://www.powerplanetonline.com/cdnassets/Realme-Buds-T310-Negro-001_l.jpg",
      specs: "Estuche con carga rápida y calidad HD de sonido."
    },
    {
      name: "Buds Air 5",
      price: 490,
      image: "https://m.media-amazon.com/images/I/51yJuhJMmiL.jpg",
      specs: "Realme Buds con ANC y drivers dinámicos."
    },
    {
      name: "Buds Air 6",
      price: 570,
      image: "https://www.tecnogamer.com.bo/wp-content/uploads/2024/10/S1-22.webp",
      specs: "Cancelación de ruido adaptativa y diseño premium."
    },
    {
      name: "Buds Air 6 Pro",
      price: 730,
      image: "https://m.media-amazon.com/images/I/61p+c+Z5TqL.jpg",
      specs: "Versión avanzada con mejoras en batería y graves."
    },
    {
      name: "JBL Tune 520 BT",
      price: 510,
      image: "https://xcessorieshub.com/wp-content/uploads/2023/05/01.JBL_Tune-520BT_Product-Image_Hero_Black.webp",
      specs: "Auriculares JBL supraaurales con graves potentes."
    },
    {
      name: "JBL Tune 670 NC",
      price: 830,
      image: "https://m.media-amazon.com/images/I/31NNUWVxn+L._SS200_.jpg",
      specs: "Cancelación activa de ruido, diseño plegable."
    },
    {
      name: "Honor Choice Earbuds X5",
      price: 290,
      image: "https://cdn.akakce.com/z/honor/honor-choice-earbuds-x5-pro-anc-tws-gri-kulak-ici.jpg",
      specs: "Honor con conectividad dual y estuche elegante."
    },
    {
      name: "Honor Sport Bluetooth",
      price: 290,
      image: "https://img02.honorfile.com/eu/es/honor/pms/product/6973316851144/group/800_800_9392E20CBED3343BE28F189313B204120664033E82E31504.webp",
      specs: "Auriculares deportivos con gancho para orejas."
    },
    {
      name: "Honor Sport Pro",
      price: 390,
      image: "https://m.media-amazon.com/images/I/61CvSNZ1CPL.jpg",
      specs: "Resistentes al sudor, ideales para correr."
    },
    {
      name: "Infinix Air1 Pro",
      price: 180,
      image: "https://tecnocomprasbolivia.com/cdn/shop/files/Tecnocompras-2023-08-17T175353.434_1024x1024@2x.png?v=1692309264",
      specs: "Compactos y ligeros con buena batería."
    }
  ];
  products = [
    { 
    name: 'Redmi A3', 
    price: 920, 
    image: 'imagenes/redmi_a3.png', 
    specs: '64 Gb, 3 Gb RAM, 1 año de garantía',
    months: 1,
    calculatedPrice: null,
    monthlyPayment: null,
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Redmi A3x', 
    price: 1050, 
    image: 'imagenes/redmi_a3x.png', 
    specs: '128 Gb, 4 Gb RAM, 1 año de garantía',
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Redmi 14c', 
    price: 1220, 
    image: 'imagenes/redmi_14c.png', 
    specs: '128 Gb, 4 Gb RAM, 1 año de garantía',
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Redmi 12', 
    price: 1350, 
    image: 'imagenes/redmi_12.png', 
    specs: '128 Gb, 8 Gb RAM, 1 año de garantía',
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Redmi 12+', 
    price: 1450, 
    image: 'imagenes/redmi_12_256.png', 
    specs: '256 Gb, 8 Gb RAM, 1 año de garantía',
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Redmi 14c+', 
    price: 1520, 
    image: 'imagenes/redmi_14c_256.png', 
    specs: '256 Gb, 8 Gb RAM, 1 año de garantía',
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Redmi Note 13 4G', 
    price: 1520, 
    image: 'imagenes/redmi_note_13_4g_128.png', 
    specs: '128 Gb, 6 Gb RAM, 1 año de garantía',
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Redmi Note 13 4G+', 
    price: 1720, 
    image: 'imagenes/redmi_note_13_4g_256.png', 
    specs: '256 Gb, 8 Gb RAM, 1 año de garantía',
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Redmi Note 13 Pro 4G', 
    price: 2290, 
    image: 'imagenes/redmi_note_13_pro_4g.png', 
    specs: '256 Gb, 8 Gb RAM, 1 año de garantía',
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Redmi Note 13 Pro 5G', 
    price: 3070, 
    image: 'imagenes/redmi_note_13_pro_5g.png', 
    specs: '256 Gb, 8 Gb RAM, 1 año de garantía',
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Poco X6 Pro 5G', 
    price: 3450, 
    image: 'imagenes/poco_x6_pro.png', 
    specs: '512 Gb, 12 Gb RAM, 1 año de garantía',
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Redmi Note 13 Pro Plus 5G', 
    price: 4090, 
    image: 'imagenes/redmi_note_13_pro_plus.png', 
    specs: '512 Gb, 12 Gb RAM, 1 año de garantía',
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Xiaomi 12 Pro 5G', 
    price: 4120, 
    image: 'imagenes/xiaomi_12_pro.png', 
    specs: '256 Gb, 12 Gb RAM, 1 año de garantía',
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Xiaomi 14T 4G', 
    price: 5090, 
    image: 'imagenes/xiaomi_14t.png', 
    specs: '512 Gb, 12 Gb RAM, 1 año de garantía',
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Poco F6 Pro 4G', 
    price: 5270, 
    image: 'imagenes/poco_f6_pro.png', 
    specs: '512 Gb, 12 Gb RAM, 1 año de garantía',
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Xiaomi 14T Pro 4G', 
    price: 6670, 
    image: 'imagenes/xiaomi_14t_pro.png', 
    specs: '512 Gb, 12 Gb RAM, 1 año de garantía',
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  }
  ];
  samsungProducts = [
    { 
    name: 'Samsung A05 64GB', 
    price: 1020, 
    image: 'imagenes/samsung_a05_64.png', 
    specs: '64GB, 4GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Samsung A05 128GB', 
    price: 1120, 
    image: 'imagenes/samsung_a05_128.png', 
    specs: '128GB, 4GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Samsung A06 64GB', 
    price: 1170, 
    image: 'imagenes/samsung_a06_64.png', 
    specs: '64GB, 4GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Samsung A06 128GB', 
    price: 1320, 
    image: 'imagenes/samsung_a06_128.png', 
    specs: '128GB, 6GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Samsung A05s 4G 128GB', 
    price: 1350, 
    image: 'imagenes/samsung_a05s_4g.png', 
    specs: '128GB, 6GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Samsung A15 4G 128GB', 
    price: 1590, 
    image: 'imagenes/samsung_a15_128.png', 
    specs: '128GB, 6GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Samsung A15 4G 256GB', 
    price: 1920, 
    image: 'imagenes/samsung_a15_256.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Samsung A16 4G 128GB', 
    price: 1870, 
    image: 'imagenes/samsung_a16_128.png', 
    specs: '128GB, 6GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Samsung A16 4G 256GB', 
    price: 2220, 
    image: 'imagenes/samsung_a16_256.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Samsung A25 5G 128GB', 
    price: 2250, 
    image: 'imagenes/samsung_a25_128.png', 
    specs: '128GB, 6GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Samsung A25 5G 256GB', 
    price: 2570, 
    image: 'imagenes/samsung_a25_256.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Samsung A35 5G 256GB', 
    price: 3670, 
    image: 'imagenes/samsung_a35_256.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Samsung A55 5G 256GB', 
    price: 4370, 
    image: 'imagenes/samsung_a55_256.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Samsung S24 FE 5G 256GB', 
    price: 7020, 
    image: 'imagenes/samsung_s24_fe.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Samsung Z Flip 3 5G 256GB', 
    price: 5650, 
    image: 'imagenes/samsung_z_flip_3.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Samsung S24 Ultra 5G 512GB', 
    price: 13120, 
    image: 'imagenes/samsung_s24_ultra.png', 
    specs: '512GB, 12GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Samsung Z Fold 3 5G 256GB', 
    price: 13250, 
    image: 'imagenes/samsung_z_fold_3.png', 
    specs: '256GB, 12GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  }
  ];
  honorProducts = [
  { 
    name: 'Honor X5b 64GB', 
    price: 990, 
    image: 'imagenes/honor_x5b_64.png', 
    specs: '64GB, 4GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Honor X5 Plus 64GB', 
    price: 1020, 
    image: 'imagenes/honor_x5plus_64.png', 
    specs: '64GB, 4GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Honor X6b 128GB', 
    price: 1120, 
    image: 'imagenes/honor_x6b_128.png', 
    specs: '128GB, 4GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Honor X6b 256GB', 
    price: 1320, 
    image: 'imagenes/honor_x6b_256.png', 
    specs: '256GB, 6GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Honor X6b Plus 256GB', 
    price: 1470, 
    image: 'imagenes/honor_x6b_plus_256.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Honor X7b 256GB', 
    price: 1650, 
    image: 'imagenes/honor_x7b_256.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Honor X8b 256GB', 
    price: 1990, 
    image: 'imagenes/honor_x8b_256.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Honor 200 Lite 5G 256GB', 
    price: 2590, 
    image: 'imagenes/honor_200_lite_256.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Honor Magic 6 Lite 5G 256GB', 
    price: 3120, 
    image: 'imagenes/honor_magic_6_lite_256.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Honor 200 5G 256GB', 
    price: 4220, 
    image: 'imagenes/honor_200_5g_256.png', 
    specs: '256GB, 12GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Honor 200 5G 512GB', 
    price: 4520, 
    image: 'imagenes/honor_200_5g_512.png', 
    specs: '512GB, 12GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Honor 200 Pro 5G 512GB', 
    price: 6990, 
    image: 'imagenes/honor_200_pro_5g_512.png', 
    specs: '512GB, 12GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
];











 //tecno

 tecnoProducts = [
  { 
    name: 'Tecno Spark Go 1 2024 64GB', 
    price: 870, 
    image: 'imagenes/tecno_spark_go1_64.png', 
    specs: '64GB, 3GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Tecno Spark Go 1s 2025 64GB', 
    price: 870, 
    image: 'imagenes/tecno_spark_go1s_64.png', 
    specs: '64GB, 3GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Tecno Spark Go 1 2024 128GB', 
    price: 970, 
    image: 'imagenes/tecno_spark_go1_128.png', 
    specs: '128GB, 4GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Tecno Spark 30c 4G 256GB', 
    price: 1150, 
    image: 'imagenes/tecno_spark_30c_256.png', 
    specs: '256GB, 4GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Tecno Spark 30 4G 256GB', 
    price: 1570, 
    image: 'imagenes/tecno_spark_30_256.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Tecno Spark 30c 4G 256GB', 
    price: 1570, 
    image: 'imagenes/tecno_spark_30c_256_8gb.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Tecno Spark 30 Edición Especial Bumblebee 256GB', 
    price: 1690, 
    image: 'imagenes/tecno_spark_30_bumblebee_256.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Tecno Spark 30 Pro 4G 256GB', 
    price: 1820, 
    image: 'imagenes/tecno_spark_30_pro_256.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Tecno Spark 20 Pro Plus 4G 256GB', 
    price: 1970, 
    image: 'imagenes/tecno_spark_20_pro_plus_256.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Tecno spark 30 pro 4g de optimus prime', 
    price: 1890, 
    image: 'imagenes/tecno_spark_30_editlimit.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Tecno Camon 30 4G 256GB', 
    price: 2150, 
    image: 'imagenes/tecno_camon_30_256.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Tecno Pova 6 4G 256GB', 
    price: 2170, 
    image: 'imagenes/tecno_pova_6_256.png', 
    specs: '256GB, 12GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Tecno Camon 30s Pro 4G 256GB', 
    price: 2320, 
    image: 'imagenes/tecno_camon_30s_pro_256.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Tecno Camon 20 Premier 5G 512GB', 
    price: 2490, 
    image: 'imagenes/tecno_camon_20_premier_512.png', 
    specs: '512GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Camon 30 Pro 5G 512GB', 
    price: 3370, 
    image: 'imagenes/tecno_camon_30_pro_5g_512.png', 
    specs: '512GB, 12GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
];





otrosProducts = [
  { 
    name: 'Infinix Smart 8 128GB', 
    price: 940, 
    image: 'imagenes/infinix_smart_8_128.png', 
    specs: '128GB, 4GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Infinix Hot 40i 128GB', 
    price: 990, 
    image: 'imagenes/infinix_hot_40i_128.png', 
    specs: '128GB, 4GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Infinix Smart 9 128GB', 
    price: 1020, 
    image: 'imagenes/infinix_smart_9_128.png', 
    specs: '128GB, 4GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Infinix Hot 50i 256GB', 
    price: 1170, 
    image: 'imagenes/infinix_hot_50i_256.png', 
    specs: '256GB, 4GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Infinix Hot 50 Pro 256GB', 
    price: 1750, 
    image: 'imagenes/infinix_hot_50_pro_256.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Infinix Hot 50 Pro Plus 256GB', 
    price: 1970, 
    image: 'imagenes/infinix_hot_50_pro_plus_256.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Infinix Note 40 Pro 256GB', 
    price: 2620, 
    image: 'imagenes/infinix_note_40_pro_256.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Infinix Zero 40 512GB', 
    price: 2690, 
    image: 'imagenes/infinix_zero_40_512.png', 
    specs: '512GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Infinix GT 20 Pro 5G 256GB', 
    price: 3220, 
    image: 'imagenes/infinix_gt_20_pro_5g_256.png', 
    specs: '256GB, 12GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Infinix Zero 40 5G 512GB', 
    price: 3650, 
    image: 'imagenes/infinix_zero_40_5g_512.png', 
    specs: '512GB, 12GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Realme Note 50 128GB', 
    price: 990, 
    image: 'imagenes/realme_note_50_128.png', 
    specs: '128GB, 4GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Realme GT3 5G 1TB', 
    price: 5150, 
    image: 'imagenes/realme_gt3_1tb.png', 
    specs: '1TB, 16GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Realme GT6 512GB', 
    price: 5990, 
    image: 'imagenes/realme_gt6_512.png', 
    specs: '512GB, 16GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'ZTE A54 128GB', 
    price: 850, 
    image: 'imagenes/zte_a54_128.png', 
    specs: '128GB, 4GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  },
  { 
    name: 'Nubia Neo 2 5G 256GB', 
    price: 1850, 
    image: 'imagenes/nubia_neo_2_256.png', 
    specs: '256GB, 8GB RAM, Garantía de 1 año', 
    months: 1, 
    calculatedPrice: null, 
    monthlyPayment: null, 
    monthlyPayments: [],
    showSpecs: false,
    showCalculator: false,
    showDetails: false
  }
  ];

creditOptions = [1, 2, 3, 4, 5, 6];

  constructor(
    private route: ActivatedRoute,
    private carritoService: CarritoService,
    private router: Router
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('id') || '';

    // ✅ Buscar en TODAS las listas
    const allProducts = [
      ...this.products,
      ...this.samsungProducts,
      ...this.honorProducts,
      ...this.tecnoProducts,
      ...this.otrosProducts,
      ...this.auricularesProducts
    ];

    this.product = allProducts.find(
      p => p.name.replace(/\s+/g, '').toLowerCase() === name.replace(/\s+/g, '').toLowerCase()
    );

    if (!this.product) {
      alert('Producto no encontrado');
      this.router.navigate(['/']);
    } else {
      this.setCreditOptions(this.product.price); // ✅ Ajusta las cuotas
    }
  }

  // ✅ Ajusta las cuotas según el precio
  setCreditOptions(price: number) {
    if (price > 2000) {
      this.creditOptions = [1, 2, 3, 4, 5, 6];
    } else if (price > 1500) {
      this.creditOptions = [1, 2, 3, 4, 5];
    } else if (price > 1000) {
      this.creditOptions = [1, 2, 3, 4];
    } else if (price > 500) {
      this.creditOptions = [1, 2, 3];
    } else {
      this.creditOptions = [1, 2];
    }
    this.cuotas = this.creditOptions[0]; // ✅ Por defecto la menor
  }

  // ✅ Cálculo de precios
  calculateTotal(price: number, months: number): number {
    if (months === 1) {
      return price; // sin aumento
    } else if (months === 2) {
      return price * 1.10; // 10% de aumento total
    } else {
      return price * (1 + 0.10 * (months - 1));
    }
  }

  calculateMonthly(price: number, months: number): number {
    const total = this.calculateTotal(price, months);
    return total / months;
  }

  // ✅ Agregar producto al carrito
  agregarAlCarrito(product: any) {
    if (this.cantidad > 5) {
      alert('La cantidad máxima permitida es 5.');
      this.cantidad = 5;
      return;
    }

    const productoParaCarrito = {
      nombre: product.name,
      precio: product.price,
      cantidad: this.cantidad,
      cuotas: this.cuotas,
      totalPagar: this.calculateTotal(product.price, this.cuotas) * this.cantidad,
      cuotaMensual: (this.calculateTotal(product.price, this.cuotas) * this.cantidad) / this.cuotas
    };

    this.carritoService.agregarProducto(productoParaCarrito);

    alert(`${product.name} agregado al carrito - Cantidad: ${this.cantidad}, Cuotas: ${this.cuotas}`);
    this.router.navigate(['/']); // Regresa al inicio
  }
}