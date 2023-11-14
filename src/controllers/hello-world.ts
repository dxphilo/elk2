import { Request, Response, Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';

const router = Router();

function helloWorld(req: Request, res: Response): void {
    const token = uuidv4();
    const expire = req.query.expire || Math.floor(Date.now() / 1000) + 2400;
    const privateAPIKey = 'your_private_key';
    const signature = crypto
        .createHmac('sha1', privateAPIKey)
        .update(`${token}${expire}`)
        .digest('hex');

    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json({ token, expire, signature });
}

// Routes
router.get('/imagekit', helloWorld);

export default router;
