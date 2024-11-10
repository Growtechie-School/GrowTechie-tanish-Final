// utils/parseForm.ts
import formidable from 'formidable';
import type { NextApiRequest } from 'next';

export const parseForm = (req: NextApiRequest): Promise<{ fields: any; files: any }> =>
  new Promise((resolve, reject) => {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });

export const config = {
  api: {
    bodyParser: false, // Disables Next.js default body parsing
  },
};
