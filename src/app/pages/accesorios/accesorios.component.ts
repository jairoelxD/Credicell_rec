import { Component } from '@angular/core';

@Component({
  selector: 'app-accesorios',
  standalone: false,
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent {

  auricularesProducts = [
    {
      name: "Redmi Buds 6 Play",
      price: 230,
      image: "https://www.ectgadget.com/assets/images/products/890180_Redmi-Buds-6-Play.webp",
      specs: "Auriculares inalámbricos con buen sonido y batería.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "Redmi Buds 4 Lite",
      price: 260,
      image: "https://tecnocomprasbolivia.com/cdn/shop/files/auriculares-bluetooth-xiaomi-redmi-buds-4-lite-con-estuche-de-carga-autonomia-5h-negros_1024x1024@2x.png?v=1688772016",
      specs: "Versión Lite con diseño compacto y bluetooth estable.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "Redmi Buds 6 Active",
      price: 290,
      image: "https://www.ectgadget.com/assets/images/products/thumb/653353_xiaomi-active-6.webp",
      specs: "Diseñados para actividades deportivas, resistentes al sudor.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "Redmi Buds 6 Lite",
      price: 320,
      image: "https://www.ectgadget.com/assets/images/products/339986_Redmi-Buds-6-Lite.webp",
      specs: "Calidad de sonido buena y conectividad mejorada.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "Redmi Buds 5",
      price: 410,
      image: "https://www.ectgadget.com/assets/images/products/thumb/262727_XiaomiBuds5.webp",
      specs: "Cancelación de ruido activa y buena duración de batería.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "Redmi Buds 6",
      price: 510,
      image: "https://www.ectgadget.com/assets/images/products/thumb/426849_redmi-buds-6.webp",
      specs: "Alta fidelidad de audio y diseño ergonómico.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "Redmi Buds 5 Pro",
      price: 640,
      image: "https://www.ectgadget.com/assets/images/products/866056_Screenshot%202024-07-18%20121822.webp",
      specs: "Versión Pro con mejora en graves y batería de larga duración.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "Redmi Buds 6 Pro",
      price: 730,
      image: "https://www.ectgadget.com/assets/images/products/158732_Redmi-Buds-6-Lite.webp",
      specs: "Sonido envolvente y micrófonos duales.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "Galaxy Buds FE",
      price: 850,
      image: "https://images.samsung.com/is/image/samsung/p6pim/cl/feature/164862951/cl-feature--nbsp--538709511?$FB_TYPE_I_JPG$",
      specs: "Auriculares Samsung con sonido envolvente y modo ambiente.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "Galaxy Buds 3 Pro",
      price: 2020,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRfa7kyBqmRuI2dhZbfFhyUWv1RaVsoLpPw&s",
      specs: "Top de gama de Samsung con ANC de alta calidad.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "Buds T100",
      price: 270,
      image: "https://m.media-amazon.com/images/I/61C1yCk8tBL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
      specs: "Buena relación calidad/precio, con estuche compacto.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "Buds T110",
      price: 290,
      image: "https://www.powerplanetonline.com/cdnassets/realme_buds_t110_azul_01_l.jpg",
      specs: "Auriculares ligeros, ideales para uso diario.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "Buds Air 3s",
      price: 320,
      image: "https://i5.walmartimages.cl/asr/b3b20a09-5f85-4eb1-8f33-911d412e418a.b3c67e02b7964898a44f11c1bd1bffa9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      specs: "Diseño moderno y buena conexión Bluetooth.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "Buds T300",
      price: 370,
      image: "https://nextlevel.com.bo/cdn/shop/files/realme-buds-t300-true-wireless-stylish-black-front-view.png?v=1716212729",
      specs: "Compatibles con asistentes de voz y controles táctiles.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "Buds T310",
      price: 390,
      image: "https://www.powerplanetonline.com/cdnassets/Realme-Buds-T310-Negro-001_l.jpg",
      specs: "Estuche con carga rápida y calidad HD de sonido.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "Buds Air 5",
      price: 490,
      image: "https://m.media-amazon.com/images/I/51yJuhJMmiL.jpg",
      specs: "Realme Buds con ANC y drivers dinámicos.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "Buds Air 6",
      price: 570,
      image: "https://www.tecnogamer.com.bo/wp-content/uploads/2024/10/S1-22.webp",
      specs: "Cancelación de ruido adaptativa y diseño premium.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "Buds Air 6 Pro",
      price: 730,
      image: "https://m.media-amazon.com/images/I/61p+c+Z5TqL.jpg",
      specs: "Versión avanzada con mejoras en batería y graves.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "JBL Tune 520 BT",
      price: 510,
      image: "https://xcessorieshub.com/wp-content/uploads/2023/05/01.JBL_Tune-520BT_Product-Image_Hero_Black.webp",
      specs: "Auriculares JBL supraaurales con graves potentes.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "JBL Tune 670 NC",
      price: 830,
      image: "https://m.media-amazon.com/images/I/31NNUWVxn+L._SS200_.jpg",
      specs: "Cancelación activa de ruido, diseño plegable.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "Honor Choice Earbuds X5",
      price: 290,
      image: "https://cdn.akakce.com/z/honor/honor-choice-earbuds-x5-pro-anc-tws-gri-kulak-ici.jpg",
      specs: "Honor con conectividad dual y estuche elegante.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "Honor Sport Bluetooth",
      price: 290,
      image: "https://img02.honorfile.com/eu/es/honor/pms/product/6973316851144/group/800_800_9392E20CBED3343BE28F189313B204120664033E82E31504.webp",
      specs: "Auriculares deportivos con gancho para orejas.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "Honor Sport Pro",
      price: 390,
      image: "https://m.media-amazon.com/images/I/61CvSNZ1CPL.jpg",
      specs: "Resistentes al sudor, ideales para correr.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    },
    {
      name: "Infinix Air1 Pro",
      price: 180,
      image: "https://tecnocomprasbolivia.com/cdn/shop/files/Tecnocompras-2023-08-17T175353.434_1024x1024@2x.png?v=1692309264",
      specs: "Compactos y ligeros con buena batería.",
      months: 1,
      calculatedPrice: null,
      monthlyPayment: null,
      monthlyPayments: [],
      showSpecs: false,
      showCalculator: false
    }
  ];

 // Opciones fijas de meses para mostrar
creditOptions = [1, 2, 3, 4, 5, 6];

  toggleDetails(product: any) {
    product.showDetails = !product.showDetails;
  }

  // Calcula total con incremento (10% por mes)
  calculateTotal(price: number, months: number): number {
    return price * (1 + months * 0.10);
  }

  // Calcula pago mensual (total dividido en meses + 1 pago extra)
  calculateMonthly(price: number, months: number): number {
    const total = this.calculateTotal(price, months);
    return total / (months + 1);
  }
}
