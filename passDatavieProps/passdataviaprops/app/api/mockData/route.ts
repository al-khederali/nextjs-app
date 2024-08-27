import { products } from '@/app/api/mockData/testdada';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
    res.status(200).json(products);
}