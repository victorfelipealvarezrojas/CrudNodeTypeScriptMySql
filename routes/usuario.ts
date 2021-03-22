import { Router } from 'express';
import {
    deletetUsuario,
    getUsuario,
    getUsuarios,
    postUsuario,
    puttUsuario
} from '../controller/usuarios';

const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', postUsuario);
router.put('/:id', puttUsuario);
router.delete('/:id', deletetUsuario);

export default router;