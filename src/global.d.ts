// src/types/global.d.ts (o en la raíz del proyecto)
declare global {
    interface Window {
      dataLayer: any[];
    }
  
    function gtag(...args: any[]): void;
  }
  
  export {}; // Esto convierte el archivo en un módulo y evita problemas de ámbito global
  