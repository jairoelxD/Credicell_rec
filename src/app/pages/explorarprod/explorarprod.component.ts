import { Component } from '@angular/core';

@Component({
  selector: 'app-explorarprod',
  standalone: false,
  templateUrl: './explorarprod.component.html',
  styleUrls: ['./explorarprod.component.css']
})
export class ExplorarprodComponent {
  // Array de productos (6 celulares), cada producto tiene propiedades específicas para mostrar el calculador y especificaciones
  
  //xiaomi
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

// Samsung con showDetails agregado
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

// Honor Products
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
