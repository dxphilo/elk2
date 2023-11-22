import { Request, Response, Router } from 'express';
import ImageKit from 'imagekit';

const router = Router();

function helloWorld(req: Request, res: Response): void {
    const imagekit = new ImageKit({
        publicKey: 'public_Z1+OqJvvxckkpW8x45Kpoj5SQP0=',
        privateKey: 'private_wHGWYlGuflK27YCAgAJKmoS3JTA=',
        urlEndpoint: 'https://ik.imagekit.io/mljbvpxzd'
    });

    const authenticationParameters = imagekit.getAuthenticationParameters();
    console.log(authenticationParameters);
    res.status(200).json(authenticationParameters);
}

// Routes
router.get('/imagekit', helloWorld);

export default router;
