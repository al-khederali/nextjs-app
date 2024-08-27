import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
// Export the Lusitana font with the Latin subset and specific weights
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['700'], // Specify weights for Lusitana as well
});