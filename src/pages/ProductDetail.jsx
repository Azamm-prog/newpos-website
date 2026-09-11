import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import new9810 from "../assets/images/products/new9810.png";
import new9800 from "../assets/images/products/new9800.png";
import new9830 from "../assets/images/products/new9830.png";
import new9310 from "../assets/images/products/new9310.png";
import new9010 from "../assets/images/products/new9010.png";
import new9220 from "../assets/images/products/new9220.png";
import new9810pro from "../assets/images/products/new9810pro.png";

/* =========================================================
   NEW9800 IMAGES
========================================================= */

import new9800Hero
  from "../assets/images/products/new9800-hero.jpg";

import new9800Overview
  from "../assets/images/products/new9800-overview.jpg";

import new9800Performance
  from "../assets/images/products/new9800-feature-performance.jpg";

import new9800Rotation
  from "../assets/images/products/new9800-screen-rotation.jpg";

import new9800Connectivity
  from "../assets/images/products/new9800-connectivity.jpg";

import new9800Pocket
  from "../assets/images/products/new9800-pocket.jpg";

import new9800Payment1
  from "../assets/images/products/new9800-payment-1.jpg";

import new9800Payment2
  from "../assets/images/products/new9800-payment-2.jpg";

import new9800Payment3
  from "../assets/images/products/new9800-payment-3.jpg";

import new9800Retail
  from "../assets/images/products/new9800-retail.jpg";

import new9800Restaurant
  from "../assets/images/products/new9800-restaurant.jpg";

import new9800Hospital
  from "../assets/images/products/new9800-hospital.jpg";

import new9800Bank
  from "../assets/images/products/new9800-bank.jpg";

import new9800Hotel
  from "../assets/images/products/new9800-hotel.jpg";

import "./ProductDetail.css";

import New9830 from "./Products/New9830";

/* =========================================================
   PRODUCT DATA
========================================================= */

const products = [
  {
    slug: "new9810",
    name: "NEW9810",
    type: "Smart POS Terminal",
    category: "Smart POS",
    officialTagline:
      "Versatile smart POS for various scenarios",
    description:
      "NEW9810 combines high-performance processing, flexible display configurations, fast thermal printing and reliable wireless connectivity for modern payment environments.",
    image: new9810,

    highlights: [
      ["Processor", "Cortex-A53 Quad Core, 2.0GHz"],
      ["Display", '4" Keyboard / 5" Full Screen'],
      ["Printer", "80mm/s Thermal Printer"],
      ["Battery", "7.2V / 2600mAh"],
      ["Connectivity", "4G / Wi-Fi / Bluetooth 5.0"],
    ],

    featureStories: [
      {
        eyebrow: "HIGH PERFORMANCE",
        title: "Power That Keeps Payment Moving.",
        text:
          "NEW9810 is equipped with a Quad-Core 2.0GHz CPU and is designed to smoothly run the Android 13 system for demanding payment applications.",
        image: new9810,
        side: "image-right",
        contain: true,
      },
      {
        eyebrow: "FLEXIBLE DISPLAY",
        title: "Two Display Sizes. One Solution.",
        text:
          "The NEW9810 platform offers both a 4-inch keypad configuration and a 5-inch full-screen configuration, providing flexibility for different application scenarios.",
        image: new9810,
        side: "image-left",
        contain: true,
      },
      {
        eyebrow: "ADVANCED COMMUNICATIONS",
        title: "Connected Wherever Business Happens.",
        text:
          "Multiple wireless communication bands enable secure payment and connected applications across different operating environments.",
        image: new9810,
        side: "image-right",
        contain: true,
      },
      {
        eyebrow: "LONG-LASTING BATTERY",
        title: "Ready For The Working Day.",
        text:
          "A high-voltage dual-cell lithium battery provides extended usage, with an optional higher-capacity 7.2V/3350mAh configuration.",
        image: new9810,
        side: "image-left",
        contain: true,
      },
    ],

    options: [
      "Magnetic stripe card function",
      "Magnetic charging interface",
      "Charging cradle",
      "Customized color",
    ],

    payments: [
      "QR Codes",
      "NFC",
      "IC Card",
      "Magnetic Card",
      "Mobile Payment",
    ],

    applications: [
      "Retail",
      "Restaurants",
      "Hospitals",
      "Banks",
      "Hotels",
    ],

    specifications: [
      ["OS", "Asmart, Powered by Android 13"],
      [
        "Processor",
        "Cortex A53 Quad-Core, 2.0GHz + Secure Processor",
      ],
      [
        "Memory",
        "1GB RAM + 8GB Flash / 2GB RAM + 16GB Flash optional / microSD up to 128GB",
      ],
      [
        "Card Readers",
        "Magnetic Stripe / Chip & PIN / Contactless",
      ],
      [
        "Cameras",
        "Front optional 2MP / Rear optional 5MP AF with flashlight",
      ],
      [
        "Wireless",
        "4G/3G/2G / Wi-Fi 2.4GHz & 5GHz / Bluetooth 5.0",
      ],
      [
        "Battery",
        "7.2V/2600mAh / 7.2V/3350mAh optional",
      ],
      [
        "Printer",
        "80mm/s / 40mm outer diameter / 58mm paper width",
      ],
      [
        "Card Slots",
        "2 Nano SIM + 2 Micro SAM + 1 SD / optional eSIM",
      ],
      [
        "Positioning",
        "GPS / GLONASS / BEIDOU / GALILEO",
      ],
      [
        "Audio",
        "1 Speaker / optional Microphone",
      ],
      [
        "Ports",
        "1 USB Type-C OTG / 4 PIN POGO PIN",
      ],
      [
        "Physical",
        "178 × 76.8 × 66.1mm / 380–390g including battery",
      ],
      [
        "Operating Environment",
        "0°C–50°C / 5%–95% RH non-condensing",
      ],
      [
        "Certifications",
        "PCI PTS 6.x / EMV L1 & L2 / EMV CL1 / PayWave / PayPass / UnionPay QuickPass / CE / RoHS and others",
      ],
    ],
  },


  /* =========================================================
     NEW9800
========================================================= */

  {
    slug: "new9800",
    name: "NEW9800",
    type: "Smart Mini POS",
    category: "Smart POS",

    officialTagline:
      "Slim and stylish style, leading the smart POS trend",

    description:
      "NEW9800 brings a compact smart payment form factor together with Android, wireless connectivity and flexible payment capabilities for modern business environments.",

    image: new9800,

    heroImage: new9800Hero,

    overviewImage: new9800Overview,

    highlights: [
      ["Processor", "Quad-Core Cortex-A53, 2.0GHz"],
      ["Display", '4" IPS, 480 × 480'],
      ["Camera", "0.3MP / 2MP optional"],
      ["Battery", "3.8V / 1700mAh"],
      ["Weight", "165g including battery"],
    ],

    featureStories: [
      {
        eyebrow: "HIGH PERFORMANCE",
        title:
          "Small Form. Serious Performance.",
        text:
          "",
        image:
          new9800Performance,
        side:
          "image-right",
        fullImage:
          true,
      },

      {
        eyebrow: "AUTOMATIC ROTATION",
        title:
          "Designed Around The Way You Use It.",
        text:
          "Automatic screen rotation helps the terminal adapt to different operating orientations and merchant scenarios.",
        image:
          new9800Rotation,
        side:
          "image-left",
        contain:
          true,
      },

      {
        eyebrow: "ADVANCED COMMUNICATIONS",
        title:
          "Connected Wherever Business Happens.",
        text:
          "Multiple communication options help the NEW9800 maintain reliable connectivity across modern payment environments.",
        image:
          new9800Connectivity,
        side:
          "image-right",
        contain:
          true,
      },

      {
        eyebrow: "SLIM DESIGN",
        title:
          "Slim and stylish style, leading the smart POS trend",
        text:
          "The compact terminal form factor is designed to integrate cleanly into modern merchant environments while remaining highly portable.",
        image:
          new9800Pocket,
        side:
          "image-left",
        fullImage:
          true,
      },
    ],

    paymentImages: [
      new9800Payment1,
      new9800Payment2,
      new9800Payment3,
    ],

    options: [
      "eSIM configuration",
      "Optional memory configurations",
      "Optional front camera",
      "Flexible card configuration",
    ],

    payments: [
      "QR",
      "IC Card",
      "NFC",
      "Contactless",
      "Mobile Payment",
    ],

    applications: [
      {
        name: "Retail",
        image: new9800Retail,
      },
      {
        name: "Restaurant",
        image: new9800Restaurant,
      },
      {
        name: "Hospital",
        image: new9800Hospital,
      },
      {
        name: "Bank",
        image: new9800Bank,
      },
      {
        name: "Hotel",
        image: new9800Hotel,
      },
    ],

    specifications: [
      [
        "Processor",
        "Quad-Core Cortex-A53, 2.0GHz",
      ],
      [
        "Memory",
        "1GB RAM + 8GB Flash / 2GB RAM + 32GB Flash optional",
      ],
      [
        "Card Readers",
        "Chip & PIN / Contactless",
      ],
      [
        "Camera",
        "0.3MP FF / 2MP FF optional",
      ],
      [
        "Display",
        '4" IPS, 480 × 480',
      ],
      [
        "Wireless",
        "4G/3G/2G / Wi-Fi 2.4GHz & 5GHz / Bluetooth 5.0",
      ],
      [
        "Battery",
        "3.8V / 1700mAh",
      ],
      [
        "Ports",
        "Type-C OTG / POGO PIN",
      ],
      [
        "Physical",
        "93.34 × 83.86 × 16.73mm / 165g",
      ],
      [
        "Certifications",
        "PCI PTS 6.x / EMV / CE / RoHS and others",
      ],
    ],
  },


  /* =========================================================
     NEW9830
========================================================= */

  {
    slug: "new9830",
    name: "NEW9830",
    type: "Smart POS Terminal",
    category: "Smart POS",

    officialTagline:
      "One device to solve all your payment needs",

    description:
      "NEW9830 combines a large 6.745-inch HD+ display, high-performance processing, Android 13 with optional Android 15, large battery configurations and multiple deployment options.",

    image: new9830,

    highlights: [
      ["CPU", "Cortex-A53 Octa-Core, 2.0GHz"],
      ["OS", "Android 13 / Optional Android 15"],
      ["Display", '6.745" HD+'],
      ["Memory", "Up to 4GB RAM / 64GB Flash"],
      ["Battery", "7.7V / 3420mAh"],
    ],

    featureStories: [
      {
        eyebrow:
          "LATEST GENERATION PERFORMANCE",
        title:
          "Performance For The Next Generation.",
        text:
          "NEW9830 uses a 2.0GHz ARM Cortex-A53 processing platform and supports Android 13 with support for Android 15.",
        image: new9830,
        side: "image-right",
        contain: true,
      },
      {
        eyebrow:
          "MAXIMUM SCREEN SIZE",
        title:
          "A Bigger Screen. A Better Experience.",
        text:
          "The 6.745-inch HD+ screen provides an expansive display and interaction area while keeping the terminal portable.",
        image: new9830,
        side: "image-left",
        contain: true,
      },
      {
        eyebrow:
          "LARGE-CAPACITY BATTERY",
        title:
          "More Power. More Possibilities.",
        text:
          "The polymer battery platform supports a maximum 7.7V/3420mAh configuration for longer operation.",
        image: new9830,
        side: "image-right",
        contain: true,
      },
      {
        eyebrow:
          "BUILT TOUGH",
        title:
          "Ready For Demanding Environments.",
        text:
          "The high-reliability design has successfully passed a 1.2m drop test on marble according to NEWPOS.",
        image: new9830,
        side: "image-left",
        contain: true,
      },
    ],

    options: [
      "Customer display",
      "Scanning",
      "Fiscal module",
      "Magnetic charging",
    ],

    payments: [
      "1D & 2D QR",
      "IC Card",
      "Magnetic Card",
      "Mobile Payment",
      "NFC",
    ],

    applications: [
      "Restaurants",
      "Retail",
      "Banks",
      "Government",
      "Hospitals",
    ],

    specifications: [
      [
        "OS",
        "Asmart, Powered by Android 13 / Optional Android 15",
      ],
      [
        "Processor",
        "Cortex A53 Octa-Core, 2.0GHz + Secure Processor",
      ],
      [
        "Memory",
        "2GB RAM + 8GB Flash / 2GB RAM + 16GB Flash / microSD up to 256GB",
      ],
      [
        "Card Readers",
        "Magnetic Stripe / ISO7816 EMV / Contactless NFC",
      ],
      [
        "Cameras",
        "Front 2MP / Top optional 2MP or 13MP AF with flashlight",
      ],
      [
        "Scanner",
        "Top 1D/2D professional scanner",
      ],
      [
        "Display",
        '6.745" IPS HD+ 720 × 1600',
      ],
      [
        "Wireless",
        "2G/3G/4G / Wi-Fi 2.4GHz & 5GHz / Bluetooth 5.0",
      ],
      [
        "Battery",
        "7.6V/2500mAh or 7.7V/3420mAh polymer battery",
      ],
      [
        "Printer",
        "90mm/sec / 40mm outer diameter / 58mm paper width",
      ],
      [
        "Card Slots",
        "2 Micro SIM + 2 Mini SAM + 1 Micro SD / optional eSIM",
      ],
      [
        "Positioning",
        "GPS / GLONASS / BEIDOU / GALILEO",
      ],
      [
        "Ports",
        "USB Type-C OTG / POGO PIN",
      ],
      [
        "Physical",
        "192.5 × 81 × 57mm / 430g including 2500mAh battery",
      ],
      [
        "Operating Environment",
        "0°C–50°C / 5%–95% RH non-condensing",
      ],
      [
        "Certifications",
        "PCI PTS 6.x / EMV L1 & L2 / EMV CL1 / PayWave / PayPass / UnionPay QuickPass / CE / RoHS and others",
      ],
    ],
  },


  /* =========================================================
     NEW9310 PRO
========================================================= */

  {
    slug: "new9310pro",
    name: "NEW9310Pro",
    type: "Smart POS Terminal",
    category: "Smart POS",

    officialTagline:
      "Leading the new fashion of payment",

    description:
      "NEW9310Pro combines a large HD touch display, professional processing, camera capabilities and high-capacity battery support for modern payment deployments.",

    image: new9310,

    highlights: [
      ["Processor", "Cortex-A53 Quad-Core, 2.0GHz"],
      ["Display", '6.5" IPS HD+'],
      ["Camera", "2MP Front / 5MP or 13MP Rear"],
      ["Battery", "3.85V / 4000mAh"],
      ["Wireless", "4G / Wi-Fi / Bluetooth 5.0"],
    ],

    featureStories: [
      {
        eyebrow: "PERFORMANCE",
        title: "Made For Modern Payment.",
        text:
          "A 2.0GHz Cortex-A53 quad-core platform provides the processing foundation for a fast and responsive payment experience.",
        image: new9310,
        side: "image-right",
        contain: true,
      },
      {
        eyebrow: "LARGE DISPLAY",
        title: "A Better Way To Interact.",
        text:
          "The 6.5-inch IPS HD+ display provides a large interactive surface for merchant and payment applications.",
        image: new9310,
        side: "image-left",
        contain: true,
      },
      {
        eyebrow: "EXTRA-LARGE BATTERY",
        title: "Built For Longer Operation.",
        text:
          "The 3.85V/4000mAh battery platform supports extended day-to-day payment operation.",
        image: new9310,
        side: "image-right",
        contain: true,
      },
      {
        eyebrow: "DUAL CAMERA",
        title: "Capture. Scan. Pay.",
        text:
          "Front and rear camera options support QR and code-based payment workflows.",
        image: new9310,
        side: "image-left",
        contain: true,
      },
    ],

    options: [
      "Higher memory configuration",
      "Optional camera configurations",
      "Optional eSIM",
      "Flexible card configurations",
    ],

    payments: [
      "Magnetic Card",
      "IC Card",
      "Contactless",
      "QR Code",
      "NFC",
    ],

    applications: [
      "Restaurants",
      "Retail",
      "Banks",
      "Government",
      "Hospitals",
    ],

    specifications: [
      ["OS", "Asmart, Powered by Android 13"],
      [
        "Processor",
        "Cortex A53 Quad-Core, 2.0GHz + Secure Processor",
      ],
      [
        "Memory",
        "2GB + 8GB Flash / 2GB + 16GB optional / microSD up to 512GB",
      ],
      [
        "Card Readers",
        "Magnetic Stripe / Chip & PIN / Contactless",
      ],
      [
        "Camera",
        "Front 2MP FF / Rear 5MP AF or 13MP AF optional",
      ],
      [
        "Display",
        '6.5" IPS HD+ 720 × 1600',
      ],
      [
        "Wireless",
        "4G/3G/2G / Wi-Fi 2.4GHz & 5GHz / Bluetooth 5.0",
      ],
      [
        "Battery",
        "3.85V/4000mAh",
      ],
      [
        "Ports",
        "USB Type-C OTG / POGO PIN",
      ],
      [
        "Physical",
        "173.4 × 77.5 × 16.3mm / 280g including battery",
      ],
      [
        "Certifications",
        "PCI PTS 6.x / EMV L1 & L2 / CE / RoHS and others",
      ],
    ],
  },


  /* =========================================================
     NEW9010
========================================================= */

  {
    slug: "new9010",
    name: "NEW9010",
    type: "Smart POS Terminal",
    category: "Smart POS",

    officialTagline:
      "Advanced leadership, a combination of the most modern and classic.",

    description:
      "NEW9010 combines a 5-inch HD touch display, physical keypad, fast thermal printing, cameras and broad connectivity in a practical payment terminal.",

    image: new9010,

    highlights: [
      ["Processor", "Cortex-A53 Quad-Core, 2.0GHz"],
      ["Display", '5" HD IPS'],
      ["Printer", "90mm/s Thermal Printer"],
      ["Keypad", "10 Numeric + 5 Function Keys"],
      ["Battery", "7.2V / 2600mAh"],
    ],

    featureStories: [
      {
        eyebrow: "HIGH PERFORMANCE",
        title:
          "Modern Processing. Proven Hardware.",
        text:
          "NEW9010 combines a 2.0GHz processor with a secure processing platform for reliable transaction handling.",
        image: new9010,
        side: "image-right",
        contain: true,
      },
      {
        eyebrow: "LARGE SCREEN",
        title:
          "A Bigger Interface For Business.",
        text:
          "The 5-inch HD IPS display and capacitive touch interface provide a clear and practical merchant experience.",
        image: new9010,
        side: "image-left",
        contain: true,
      },
      {
        eyebrow:
          "PHYSICAL PIN KEYPAD",
        title:
          "Familiar. Practical. Reliable.",
        text:
          "A physical keypad provides a dependable interaction method for payment amounts and PIN entry.",
        image: new9010,
        side: "image-right",
        contain: true,
      },
      {
        eyebrow:
          "HIGH-SPEED PRINTING",
        title:
          "Receipts, Fast.",
        text:
          "The built-in thermal printer reaches 90mm/s and uses a metal cutter designed for long service life.",
        image: new9010,
        side: "image-left",
        contain: true,
      },
    ],

    options: [
      "Higher-capacity battery",
      "Camera configurations",
      "eSIM option",
      "Flexible memory",
    ],

    payments: [
      "Magnetic Stripe",
      "IC Card",
      "Contactless",
      "NFC",
      "1D & 2D Codes",
    ],

    applications: [
      "Restaurant",
      "Hotels",
      "Banks",
      "Retail",
    ],

    specifications: [
      [
        "Processor",
        "Cortex Quad-Core A53, 2.0GHz",
      ],
      [
        "Memory",
        "2GB RAM + 8GB ROM / 2GB + 16GB ROM optional",
      ],
      ["OS", "Asmart"],
      [
        "Display",
        '5" HD IPS 1280 × 720 / capacitive multi-touch',
      ],
      [
        "Physical Keys",
        "10 numeric / 5 function / 1 power",
      ],
      [
        "Card Readers",
        "Chip & PIN / Contactless / Magnetic Stripe",
      ],
      [
        "Printer",
        "90mm/s thermal printer / 58 × 40mm paper / metal cutter",
      ],
      [
        "Camera",
        "Front 2MP FF / rear 5MP AF",
      ],
      [
        "Wireless",
        "4G/3G/2G / Wi-Fi 2.4GHz & 5GHz / Bluetooth 5.0",
      ],
      [
        "Battery",
        "7.2V/2600mAh / 7.2V/3200mAh optional",
      ],
      [
        "Ports",
        "USB Type-C OTG",
      ],
      [
        "Physical",
        "190 × 80 × 57.4mm / 450g including battery",
      ],
      [
        "Certifications",
        "PCI PTS 6.x / EMV L1 & L2 / CE and others",
      ],
    ],
  },


  /* =========================================================
     NEW9220
========================================================= */

  {
    slug: "new9220",
    name: "NEW9220",
    type: "Smart POS Terminal",
    category: "Smart POS",

    officialTagline:
      "Inheriting the classic, Looking towards the future",

    description:
      "NEW9220 combines an advanced processor, 5.5-inch HD touchscreen, high-speed thermal printer, dual cameras and full wireless connectivity in a portable payment terminal.",

    image: new9220,

    highlights: [
      ["CPU", "Quad-Core / 1.6GHz"],
      ["Display", '5.5" HD Touchscreen'],
      ["Printer", "58mm Thermal Printer"],
      ["Camera", "0.3MP Front / 5MP Rear"],
      ["Battery", "7.2V / 2600mAh"],
    ],

    featureStories: [
      {
        eyebrow:
          "POWERFUL PERFORMANCE",
        title:
          "Performance For A Faster Experience.",
        text:
          "The advanced processor platform is designed to provide the hardware assurance required for fast and convenient payment operation.",
        image: new9220,
        side: "image-right",
        contain: true,
      },
      {
        eyebrow:
          "SCREEN DISPLAY",
        title:
          "Clearer Interaction.",
        text:
          "The 5.5-inch touch screen provides vivid display and convenient interaction, with automatic brightness adjustment.",
        image: new9220,
        side: "image-left",
        contain: true,
      },
      {
        eyebrow:
          "LONG BATTERY LIFE",
        title:
          "Designed For A Full Day.",
        text:
          "The 7.2V/2600mAh battery supports a full day's use on a single charge according to NEWPOS.",
        image: new9220,
        side: "image-right",
        contain: true,
      },
      {
        eyebrow:
          "DUAL CAMERA",
        title:
          "Faster Code-Based Payment.",
        text:
          "Front and rear cameras support code capture and help make code-based payment workflows faster and safer.",
        image: new9220,
        side: "image-left",
        contain: true,
      },
    ],

    options: [
      "Optional 2MP front camera",
      "Optional fingerprint reader",
      "Optional higher battery",
      "Flexible memory configurations",
    ],

    payments: [
      "QR Code",
      "Contactless Card",
      "NFC",
      "Magnetic Card",
      "IC Card",
    ],

    applications: [
      "Retail",
      "Restaurants",
      "Banks",
      "Hotels",
    ],

    specifications: [
      [
        "OS",
        "Asmart, Powered by Android 12",
      ],
      [
        "Processor",
        "Octa-Core / 2× Cortex A75 1.6GHz + 6× Cortex A55 1.6GHz + Secure Processor",
      ],
      [
        "Memory",
        "2GB RAM + 8GB Flash / 2GB + 32GB Flash / microSD up to 256GB",
      ],
      [
        "Card Readers",
        "Magnetic Stripe / Chip & PIN / Contactless",
      ],
      [
        "Cameras",
        "Front 0.3MP FF or optional 2MP / rear 5MP AF with flashlight",
      ],
      [
        "Display",
        '5.5" IPS HD 720 × 1280',
      ],
      [
        "Wireless",
        "2G/3G/4G / Wi-Fi 2.4GHz & 5GHz / Bluetooth 5.0",
      ],
      [
        "Battery",
        "7.2V/2600mAh / 7.2V/3350mAh optional",
      ],
      [
        "Printer",
        "High-speed thermal printer / 58mm paper width",
      ],
      [
        "Card Slots",
        "Mini SIM / Mini SAM / microSD / eSIM configurations",
      ],
      [
        "Positioning",
        "GPS / GLONASS / BEIDOU / GALILEO",
      ],
      [
        "Ports",
        "USB Type-C OTG / POGO PIN",
      ],
      [
        "Physical",
        "192 × 84 × 63.5mm / 486g including battery",
      ],
      [
        "Certifications",
        "PCI PTS 6.x / EMV L1 & L2 / EMV CL1 / PayWave / PayPass / UnionPay QuickPass / CE and others",
      ],
    ],
  },


  /* =========================================================
     NEW9810 PRO
========================================================= */

  {
    slug: "new9810pro",
    name: "NEW9810Pro",
    type: "Smart POS Terminal",
    category: "Smart POS",

    officialTagline:
      "Professional payment for modern business",

    description:
      "NEW9810Pro is presented as part of the NEWPOS Smart POS portfolio for professional payment deployments.",

    image: new9810pro,

    highlights: [
      ["Category", "Smart POS"],
      ["Platform", "Professional Payment"],
      ["Design", "Smart POS"],
      ["Deployment", "Business Payment"],
      ["Portfolio", "NEWPOS Technology"],
    ],

    featureStories: [
      {
        eyebrow:
          "SMART PAYMENT",
        title:
          "Professional Payment Technology.",
        text:
          "NEW9810Pro is positioned within the NEWPOS smart POS portfolio for modern professional payment environments.",
        image: new9810pro,
        side: "image-right",
        contain: true,
      },
      {
        eyebrow:
          "BUSINESS READY",
        title:
          "Designed Around Deployment.",
        text:
          "The product is intended for business environments where dependable payment hardware is required.",
        image: new9810pro,
        side: "image-left",
        contain: true,
      },
    ],

    options: [
      "Professional deployment",
      "Smart POS platform",
      "Connected payment",
      "Business applications",
    ],

    payments: [
      "Electronic Payment",
      "Card Payment",
      "Contactless",
      "Connected Payment",
    ],

    applications: [
      "Retail",
      "Restaurants",
      "Business",
      "Payment Services",
    ],

    specifications: [],
  },
];


/* =========================================================
   REVEAL
========================================================= */

function useProductReveal() {
  useEffect(() => {

    const elements =
      document.querySelectorAll(
        ".product-detail-reveal"
      );

    if (!elements.length) {
      return undefined;
    }

    elements.forEach(
      (element, index) => {
        element.style.setProperty(
          "--detail-delay",
          `${(index % 6) * 55}ms`
        );
      }
    );

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "is-visible"
                );

                observer.unobserve(
                  entry.target
                );
              }

            }
          );
        },
        {
          threshold:
            0.08,

          rootMargin:
            "0px 0px -45px 0px",
        }
      );

    elements.forEach(
      (element) => {
        observer.observe(
          element
        );
      }
    );

    return () => {
      observer.disconnect();
    };

  }, []);
}


/* =========================================================
   ICON
========================================================= */

function FeatureIcon({
  label,
}) {

  const common = {
    viewBox:
      "0 0 24 24",

    fill:
      "none",

    stroke:
      "currentColor",

    strokeWidth:
      "1.55",

    strokeLinecap:
      "round",

    strokeLinejoin:
      "round",

    "aria-hidden":
      "true",
  };

  const value =
    label.toLowerCase();

  if (
    value.includes(
      "processor"
    ) ||
    value.includes(
      "cpu"
    )
  ) {
    return (
      <svg {...common}>

        <rect
          x="6"
          y="6"
          width="12"
          height="12"
          rx="2"
        />

        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />

      </svg>
    );
  }

  if (
    value.includes(
      "display"
    )
  ) {
    return (
      <svg {...common}>

        <rect
          x="3"
          y="4"
          width="18"
          height="15"
          rx="2"
        />

        <path d="M8 22h8M12 19v3" />

      </svg>
    );
  }

  if (
    value.includes(
      "battery"
    )
  ) {
    return (
      <svg {...common}>

        <rect
          x="3"
          y="7"
          width="17"
          height="10"
          rx="2"
        />

        <path d="M21 10v4M8 12h7M11 9v6" />

      </svg>
    );
  }

  if (
    value.includes(
      "printer"
    )
  ) {
    return (
      <svg {...common}>

        <path d="M6 9V3h12v6" />

        <path d="M5 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />

        <rect
          x="6"
          y="14"
          width="12"
          height="7"
          rx="1"
        />

      </svg>
    );
  }

  if (
    value.includes(
      "camera"
    )
  ) {
    return (
      <svg {...common}>

        <rect
          x="3"
          y="6"
          width="18"
          height="13"
          rx="2"
        />

        <circle
          cx="12"
          cy="12.5"
          r="3"
        />

        <path d="M8 6l1-2h6l1 2" />

      </svg>
    );
  }

  if (
    value.includes(
      "wireless"
    ) ||
    value.includes(
      "connect"
    )
  ) {
    return (
      <svg {...common}>

        <path d="M5 9.5a10 10 0 0 1 14 0" />

        <path d="M8 12.5a6 6 0 0 1 8 0" />

        <path d="M11 15.5a2 2 0 0 1 2 0" />

        <circle
          cx="12"
          cy="18"
          r="1"
          fill="currentColor"
          stroke="none"
        />

      </svg>
    );
  }

  return (
    <svg {...common}>

      <circle
        cx="12"
        cy="12"
        r="8"
      />

      <path d="M12 8v8M8 12h8" />

    </svg>
  );
}


/* =========================================================
   NEW9800 APPLICATION SHOWCASE
========================================================= */

function New9800ApplicationShowcase({
  applications,
}) {

  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  const activeApplication =
    applications[activeIndex];

  return (
    <div className="new9800-application-showcase">

      {/* IMAGE */}

      <div className="new9800-application-visual product-detail-reveal">

        <div className="new9800-application-image-wrap">

          {applications.map(
            (
              application,
              index
            ) => (

              <img
                key={
                  application.name
                }

                src={
                  application.image
                }

                alt={
                  `NEW9800 - ${application.name}`
                }

                className={
                  `new9800-application-slide ${
                    index === activeIndex
                      ? "active"
                      : ""
                  }`
                }

                loading={
                  index === 0
                    ? "lazy"
                    : "eager"
                }
              />

            )
          )}

        </div>


        <div className="new9800-application-image-overlay" />


        <div className="new9800-application-image-label">

          <span>
            NEW9800
          </span>

          <strong>
            {
              activeApplication.name
            }
          </strong>

        </div>


        <div className="new9800-application-index">

          <span>
            {
              String(
                activeIndex + 1
              ).padStart(
                2,
                "0"
              )
            }
          </span>

          <i />

          <span>
            {
              String(
                applications.length
              ).padStart(
                2,
                "0"
              )
            }
          </span>

        </div>

      </div>


      {/* NAVIGATION */}

      <div className="new9800-application-navigation product-detail-reveal">

        <div className="new9800-application-nav-top">

          <span>
            APPLICATIONS
          </span>

          <small>
            HOVER TO EXPLORE
          </small>

        </div>


        <div className="new9800-application-buttons">

          {applications.map(
            (
              application,
              index
            ) => {

              const isActive =
                index ===
                activeIndex;

              return (
                <button
                  type="button"
                  key={
                    application.name
                  }
                  className={
                    `new9800-application-button ${
                      isActive
                        ? "active"
                        : ""
                    }`
                  }
                  onMouseEnter={() =>
                    setActiveIndex(
                      index
                    )
                  }
                  onFocus={() =>
                    setActiveIndex(
                      index
                    )
                  }
                  onClick={() =>
                    setActiveIndex(
                      index
                    )
                  }
                  aria-pressed={
                    isActive
                  }
                >

                  <span className="application-button-number">

                    {
                      String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )
                    }

                  </span>


                  <span className="application-button-content">

                    <strong>
                      {
                        application.name
                      }
                    </strong>

                    <small>
                      NEW9800
                    </small>

                  </span>


                  <span className="application-button-arrow">
                    →
                  </span>

                </button>
              );

            }
          )}

        </div>


        <div className="new9800-application-nav-footer">

          <span>
            NEWPOS SMART PAYMENT
          </span>

          <span>
            {
              activeApplication.name.toUpperCase()
            }
          </span>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   NEW9800 PAGE
========================================================= */

function New9800Page({
  product,
}) {

  return (
    <main
      className="
        product-detail-page
        new9800-page
      "
    >

      {/* ===================================================
          HERO
      =================================================== */}

      <section className="new9800-hero">

        <img
          src={product.heroImage}
          alt="NEW9800"
          className="new9800-hero-image"
        />

        <div className="new9800-hero-overlay" />


        <div className="new9800-hero-content product-detail-reveal">

          <span className="new9800-kicker">
            SMART MINI POS
          </span>


          <h1>
            NEW9800
          </h1>


          <p>
            Slim and stylish style,
            leading the smart POS trend
          </p>


          <div className="new9800-hero-actions">

            <Link
              to="/contact"
              className="showcase-primary"
            >
              Request Information
              <b>
                →
              </b>
            </Link>


            <a
              href="#new9800-overview"
              className="new9800-hero-scroll"
            >
              Explore Product
              <span>
                ↓
              </span>
            </a>

          </div>

        </div>

      </section>


      {/* ===================================================
          OVERVIEW
      =================================================== */}

      <section
        className="new9800-overview"
        id="new9800-overview"
      >

        <div className="new9800-overview-copy product-detail-reveal">

          <span className="new9800-section-label">
            NEW9800
          </span>


          <h2>
            Smart payment

            <strong>
              in a smaller form.
            </strong>
          </h2>


          <p>
            NEW9800 combines a compact smart payment
            form factor with a stylish design, wireless
            connectivity and flexible payment capabilities.
          </p>


          <div className="new9800-highlight-grid">

            {product.highlights.map(
              (
                [label, value],
                index
              ) => (

                <div
                  className="new9800-highlight"
                  key={
                    `${label}-${index}`
                  }
                >

                  <span>
                    {label}
                  </span>

                  <strong>
                    {value}
                  </strong>

                </div>

              )
            )}

          </div>

        </div>


        <div className="new9800-overview-stage product-detail-reveal">

          <div className="new9800-overview-glow" />


          <div className="new9800-overview-frame">

            <img
              src={product.overviewImage}
              alt="NEW9800 product overview"
              loading="lazy"
            />

          </div>


          <div className="new9800-overview-label">

            <span>
              NEWPOS
            </span>

            <strong>
              NEW9800
            </strong>

          </div>

        </div>

      </section>


      {/* ===================================================
          HIGH PERFORMANCE
      =================================================== */}

      <section className="new9800-performance-section">

        <img
          src={new9800Performance}
          alt="NEW9800 high performance"
          className="new9800-performance-image"
          loading="lazy"
        />

        <div className="new9800-performance-shade" />


        <div className="new9800-performance-content product-detail-reveal">

          <span>
            HIGH PERFORMANCE
          </span>


          <h2>
            Small Form.

            <strong>
              Serious Performance.
            </strong>
          </h2>


          <div className="new9800-performance-index">
            01
          </div>

        </div>

      </section>


      {/* ===================================================
          AUTOMATIC ROTATION
      =================================================== */}

      <section className="new9800-editorial new9800-rotation">

        <div className="new9800-editorial-image rotation-image product-detail-reveal">

          <div className="editorial-image-glow" />


          <img
            src={new9800Rotation}
            alt="NEW9800 automatic screen rotation"
            loading="lazy"
          />


          <span className="editorial-image-number">
            02
          </span>

        </div>


        <div className="new9800-editorial-copy product-detail-reveal">

          <span>
            AUTOMATIC ROTATION
          </span>


          <h2>
            Designed around

            <strong>
              the way you use it.
            </strong>
          </h2>


          <p>
            Automatic screen rotation helps the terminal
            adapt to different operating orientations and
            merchant scenarios.
          </p>


          <div className="new9800-editorial-number">
            02
          </div>

        </div>

      </section>


      {/* ===================================================
          CONNECTIVITY
      =================================================== */}

      <section className="new9800-editorial reversed">

        <div className="new9800-editorial-copy product-detail-reveal">

          <span>
            ADVANCED COMMUNICATIONS
          </span>


          <h2>
            Connected wherever

            <strong>
              business happens.
            </strong>
          </h2>


          <p>
            Multiple communication options help the
            NEW9800 maintain reliable connectivity across
            modern payment environments.
          </p>


          <div className="new9800-editorial-number">
            03
          </div>

        </div>


        <div className="new9800-editorial-image connectivity-image product-detail-reveal">

          <div className="editorial-image-glow" />


          <img
            src={new9800Connectivity}
            alt="NEW9800 advanced communications"
            loading="lazy"
          />

        </div>

      </section>


      {/* ===================================================
          SLIM DESIGN
      =================================================== */}

      <section className="new9800-wide-design">

        <img
          src={new9800Pocket}
          alt="NEW9800 slim and stylish design"
          loading="lazy"
        />


        <div className="new9800-wide-design-overlay" />


        <div className="new9800-wide-design-copy product-detail-reveal">

          <span>
            SLIM &amp; STYLISH
          </span>


          <h2>
            Slim and stylish style,

            <strong>
              leading the smart POS trend.
            </strong>
          </h2>


          <p>
            A refined compact profile designed for
            portability while keeping the look of a
            modern professional payment terminal.
          </p>

        </div>

      </section>


      {/* ===================================================
          PAYMENTS
      =================================================== */}

      <section className="new9800-payments">

        <div className="new9800-section-heading product-detail-reveal">

          <span>
            SUPPORTING ALL PAYMENTS
          </span>


          <h2>
            One device.

            <strong>
              Multiple ways to pay.
            </strong>
          </h2>


          <p>
            Flexible payment support for modern
            transaction environments.
          </p>

        </div>


        <div className="new9800-payment-gallery">

          <div className="new9800-payment-large product-detail-reveal">

            <img
              src={new9800Payment1}
              alt="NEW9800 payment interaction"
              loading="lazy"
            />

          </div>


          <div className="new9800-payment-small product-detail-reveal">

            <img
              src={new9800Payment2}
              alt="NEW9800 payment"
              loading="lazy"
            />

          </div>


          <div className="new9800-payment-small product-detail-reveal">

            <img
              src={new9800Payment3}
              alt="NEW9800 mobile payment"
              loading="lazy"
            />

          </div>

        </div>


        <div className="new9800-payment-list product-detail-reveal">

          {product.payments.map(
            (
              payment,
              index
            ) => (

              <div
                key={payment}
                className="new9800-payment-item"
              >

                <span>
                  {
                    String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )
                  }
                </span>

                <strong>
                  {payment}
                </strong>

              </div>

            )
          )}

        </div>

      </section>


      {/* ===================================================
          APPLICATIONS
      =================================================== */}

      <section className="new9800-applications">

        <div className="new9800-section-heading application-heading product-detail-reveal">

          <span>
            FLEXIBLE ADAPTABILITY
          </span>


          <h2>
            One device.

            <strong>
              Many possibilities.
            </strong>
          </h2>


          <p>
            Explore how NEW9800 adapts to different
            business environments.
          </p>

        </div>


        <New9800ApplicationShowcase
          applications={
            product.applications
          }
        />

      </section>


      {/* ===================================================
          TECHNICAL DETAILS
      =================================================== */}

      <section className="new9800-specifications">

        <div className="new9800-spec-heading product-detail-reveal">

          <span>
            SPECIFICATIONS
          </span>


          <h2>
            Technical

            <strong>
              details.
            </strong>
          </h2>


          <p>
            Core information for the NEW9800 platform.
          </p>

        </div>


        <div className="new9800-spec-table product-detail-reveal">

          {product.specifications.map(
            (
              [label, value],
              index
            ) => (

              <div
                className="new9800-spec-row"
                key={
                  `${label}-${index}`
                }
              >

                <span>
                  {label}
                </span>


                <strong>
                  {value}
                </strong>

              </div>

            )
          )}

        </div>

      </section>


      {/* ===================================================
          CTA
      =================================================== */}

      <section className="new9800-cta">

        <div className="new9800-cta-inner product-detail-reveal">

          <span>
            NEWPOS TECHNOLOGY
          </span>


          <h2>
            Ready to explore

            <strong>
              NEW9800?
            </strong>
          </h2>


          <p>
            Contact NEWPOS for product information,
            specifications, samples and business cooperation.
          </p>


          <div className="new9800-cta-actions">

            <Link
              to="/contact"
              className="showcase-primary"
            >
              Contact NEWPOS
              <b>
                →
              </b>
            </Link>


            <Link
              to="/products"
              className="new9800-cta-secondary"
            >
              Back To Products
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   STANDARD PRODUCT PAGE
========================================================= */

function StandardProductPage({
  product,
  relatedProducts,
}) {

  return (
    <main className="product-detail-page">

      <section className="product-showcase-hero">

        <div className="showcase-light" />


        <div className="showcase-content product-detail-reveal">

          <div className="showcase-breadcrumb">

            <Link to="/products">
              PRODUCTS
            </Link>

            <span>
              /
            </span>

            <span>
              {
                product.category.toUpperCase()
              }
            </span>

          </div>


          <span className="showcase-category">
            {product.type}
          </span>


          <h1>
            {product.name}
          </h1>


          <h2>
            {product.officialTagline}
          </h2>


          <p>
            {product.description}
          </p>


          <div className="showcase-actions">

            <Link
              to="/contact"
              className="showcase-primary"
            >
              Request Information
              <b>
                →
              </b>
            </Link>


            <a
              href="#product-features"
              className="showcase-secondary"
            >
              Discover Product
              <span>
                ↓
              </span>
            </a>

          </div>

        </div>


        <div className="showcase-product product-detail-reveal">

          <div className="showcase-product-glow" />

          <div className="showcase-platform-shadow" />


          <img
            src={product.image}
            alt={
              `${product.name} ${product.type}`
            }
            className="showcase-product-image"
          />


          <div className="showcase-product-caption">

            <span>
              NEWPOS
            </span>

            <strong>
              {product.name}
            </strong>

          </div>

        </div>

      </section>


      <section className="product-key-strip">

        <div className="product-key-inner">

          {product.highlights.map(
            (
              [label, value],
              index
            ) => (

              <div
                className="
                  product-key-item
                  product-detail-reveal
                "
                key={
                  `${label}-${index}`
                }
              >

                <div className="product-key-icon">

                  <FeatureIcon
                    label={label}
                  />

                </div>


                <div>

                  <span>
                    {label}
                  </span>

                  <strong>
                    {value}
                  </strong>

                </div>

              </div>

            )
          )}

        </div>

      </section>


      <section className="product-editorial-intro">

        <div className="editorial-intro-left product-detail-reveal">

          <span>
            {
              product.category.toUpperCase()
            }
          </span>


          <h2>
            {product.name}

            <br />

            <strong>
              Built For Payment.
            </strong>
          </h2>

        </div>


        <div className="editorial-intro-right product-detail-reveal">

          <p>
            {product.description}
          </p>


          <p>
            NEWPOS designs its payment hardware around
            practical business deployment, combining payment
            technology with the hardware capabilities required
            for everyday operation.
          </p>

        </div>

      </section>


      <section
        className="product-feature-stories"
        id="product-features"
      >

        {product.featureStories.map(
          (
            story,
            index
          ) => (

            <article
              className={
                `product-story ${story.side}`
              }
              key={
                `${story.title}-${index}`
              }
            >

              <div
                className={
                  `product-story-image ${
                    story.contain
                      ? "contain"
                      : ""
                  } product-detail-reveal`
                }
              >

                <div className="story-image-glow" />

                <img
                  src={story.image}
                  alt={story.title}
                  loading="lazy"
                />

              </div>


              <div className="product-story-copy product-detail-reveal">

                <span>
                  {story.eyebrow}
                </span>


                <h2>
                  {story.title}
                </h2>


                {story.text && (
                  <p>
                    {story.text}
                  </p>
                )}


                <div className="story-line" />


                <small>
                  {product.name}
                </small>

              </div>

            </article>

          )
        )}

      </section>


      <section className="product-options">

        <div className="product-options-heading product-detail-reveal">

          <span>
            MORE CONFIGURATION OPTIONS
          </span>


          <h2>
            Configure It

            <br />

            <strong>
              Your Way.
            </strong>
          </h2>

        </div>


        <div className="product-options-list">

          {product.options.map(
            (
              option,
              index
            ) => (

              <div
                key={option}
                className="
                  product-option
                  product-detail-reveal
                "
              >

                <span>
                  {
                    String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )
                  }
                </span>


                <strong>
                  {option}
                </strong>


                <b>
                  →
                </b>

              </div>

            )
          )}

        </div>

      </section>


      <section className="product-payments">

        <div className="product-payments-copy product-detail-reveal">

          <span>
            SUPPORTING ALL PAYMENTS
          </span>


          <h2>
            One Device.

            <br />

            <strong>
              Multiple Ways To Pay.
            </strong>
          </h2>


          <p>
            {product.name} supports the payment technologies
            available for its product configuration, helping
            merchants handle different transaction methods
            from one terminal.
          </p>

        </div>


        <div className="product-payment-list">

          {product.payments.map(
            (
              payment,
              index
            ) => (

              <div
                key={payment}
                className="
                  product-payment-row
                  product-detail-reveal
                "
              >

                <span>
                  {
                    String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )
                  }
                </span>


                <strong>
                  {payment}
                </strong>


                <b>
                  →
                </b>

              </div>

            )
          )}

        </div>

      </section>


      <section className="product-applications">

        <div className="application-visual product-detail-reveal">

          <div className="application-circle circle-one" />

          <div className="application-circle circle-two" />

          <div className="application-circle circle-three" />


          <img
            src={product.image}
            alt=""
            className="application-product"
          />


          <span>
            {product.name}
          </span>

        </div>


        <div className="application-copy product-detail-reveal">

          <span>
            FLEXIBLE ADAPTABILITY
          </span>


          <h2>
            Built For

            <br />

            <strong>
              Different Environments.
            </strong>
          </h2>


          <p>
            The NEWPOS approach combines payment hardware
            with the practical requirements of real-world
            business environments.
          </p>


          <div className="applications-list">

            {product.applications.map(
              (
                application,
                index
              ) => (

                <div
                  key={application}
                  className="application-item"
                >

                  <span>
                    {
                      String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )
                    }
                  </span>


                  <strong>
                    {application}
                  </strong>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {product.specifications.length > 0 && (

        <section className="product-specifications">

          <div className="specifications-heading product-detail-reveal">

            <span>
              SPECIFICATIONS
            </span>


            <h2>
              Technical

              <br />

              <strong>
                Details.
              </strong>
            </h2>

          </div>


          <div className="specifications-table product-detail-reveal">

            {product.specifications.map(
              (
                [label, value],
                index
              ) => (

                <div
                  className="specification-row"
                  key={
                    `${label}-${index}`
                  }
                >

                  <span>
                    {label}
                  </span>


                  <strong>
                    {value}
                  </strong>

                </div>

              )
            )}

          </div>

        </section>

      )}


      {relatedProducts.length > 0 && (

        <section className="product-related">

          <div className="related-heading product-detail-reveal">

            <span>
              YOU MAY ALSO LIKE
            </span>


            <h2>
              Explore More

              <br />

              <strong>
                NEWPOS Products.
              </strong>
            </h2>

          </div>


          <div className="related-products-grid">

            {relatedProducts.map(
              (item) => (

                <Link
                  key={item.slug}
                  to={
                    `/products/${item.slug}`
                  }
                  className="
                    related-product
                    product-detail-reveal
                  "
                >

                  <div className="related-product-image">

                    <span>
                      {item.category}
                    </span>


                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                    />

                  </div>


                  <div className="related-product-copy">

                    <small>
                      {item.type}
                    </small>


                    <h3>
                      {item.name}
                    </h3>


                    <span>
                      View Product →
                    </span>

                  </div>

                </Link>

              )
            )}

          </div>

        </section>

      )}


      <section className="detail-back-section">

        <Link
          to="/products"
          className="detail-back-link"
        >
          ← Back To Products
        </Link>

      </section>


      <section className="product-detail-cta">

        <div className="cta-glow" />


        <div className="product-cta-copy product-detail-reveal">

          <span>
            NEWPOS TECHNOLOGY
          </span>


          <h2>
            Ready To Explore

            <br />

            <strong>
              {product.name}?
            </strong>
          </h2>


          <p>
            Contact NEWPOS for product information,
            specifications, samples and business cooperation.
          </p>

        </div>


        <Link
          to="/contact"
          className="
            product-cta-button
            product-detail-reveal
          "
        >
          Contact NEWPOS

          <b>
            →
          </b>

        </Link>

      </section>

    </main>
  );
}


/* =========================================================
   MAIN
========================================================= */

function ProductDetail() {

  useProductReveal();

  const {
    productSlug,
  } = useParams();

  const product =
    products.find(
      (item) =>
        item.slug === productSlug
    );


  const relatedProducts =
    useMemo(
      () => {

        if (!product) {
          return [];
        }

        return products
          .filter(
            (item) =>
              item.slug !==
                product.slug &&
              item.category ===
                product.category
          )
          .slice(0, 3);

      },
      [product]
    );


  if (!product) {
    return (
      <main className="product-detail-page">

        <section className="product-detail-not-found">

          <span>
            NEWPOS / PRODUCTS
          </span>


          <h1>
            Product

            <br />

            Not Found.
          </h1>


          <p>
            The requested product is not available
            in the current catalog.
          </p>


          <Link
            to="/products"
            className="not-found-button"
          >
            ← Back To Products
          </Link>

        </section>

      </main>
    );
  }


  if (
    product.slug ===
    "new9800"
  ) {

    return (
      <New9800Page
        product={product}
      />
    );
  }


  if (
    product.slug ===
    "new9830"
  ) {

    return (
      <New9830
        product={product}
      />
    );
  }


  return (
    <StandardProductPage
      product={product}
      relatedProducts={
        relatedProducts
      }
    />
  );
}

export default ProductDetail;