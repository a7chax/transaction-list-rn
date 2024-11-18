import { useEffect, useState } from 'react';
import { useMemo } from 'react';

export const isEmptyObject = (obj: object): boolean => Object.keys(obj).length === 0;

export const mapBankName = (bankName: string): string => {
    const bankNameByLowerCase: { [key: string]: string } = {
        bni: 'BNI',
        bca: 'BCA',
        bri: 'BRI',
        mandiri: 'Mandiri',
        btpn: 'BTPN',
        danamon: 'Danamon',
        cimb: 'CIMB',
        muamalat: 'Muamalat',
        bsm: 'BSM',
    };

    return bankNameByLowerCase[bankName.toLowerCase()] || bankName;
};



export const formatDateByLocale = (date: string, locale  :  Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string => {
    const dateObj = new Date(date);
    if (isNaN(dateObj.getDate())) {
      return '-';
    }
    return dateObj.toLocaleDateString(locale, options);
  };

export const formatCurrency = (number: number, currency: string): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  export function useDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        if (value !== debouncedValue) {
          setDebouncedValue(value);
        }
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, debouncedValue, delay]);

    return useMemo(() => debouncedValue, [debouncedValue]);
  }
