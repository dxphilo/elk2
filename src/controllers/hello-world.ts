import { Request, Response, Router } from 'express';
import ImageKit from 'imagekit';

const router = Router();

function helloWorld(req: Request, res: Response): void {
    const imagekit = new ImageKit({
        publicKey: 'ypublic_Gx/P9NcuYDarBHgstaEms0wk780=',
        privateKey: 'private_Ji6qXhiZ1ziZpvYb5xcaj/NhxTU=',
        urlEndpoint: 'https://ik.imagekit.io/mljbvpxzd'
    });

    const authenticationParameters = imagekit.getAuthenticationParameters();
    console.log(authenticationParameters);
    res.status(200).json(authenticationParameters);
}

// Routes
router.get('/imagekit', helloWorld);

export default router;
