import { Lusitana } from 'next/font/google';
import { Inter } from 'next/font/google';

export const lusitana = Lusitana({
    weight: ['400', '700'], // Ajusta los pesos según tus necesidades
    subsets: ['latin'],
});

export const inter = Inter({ subsets: ['latin'] });