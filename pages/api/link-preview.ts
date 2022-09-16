import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const title = await page.evaluate(() => {
    return document.querySelector('h1')!.innerHTML;
  });

  await browser.close();

  res.status(200).json({
    title,
  });
}
