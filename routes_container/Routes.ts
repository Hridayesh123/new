import * as express from 'express';
import { Request, Response } from 'express';
import * as  client from '../config/db_config';
import { login, verifyToken, getSubject, getSubjectsById, createSubject, updateSubject, deleteSubject, getProfile} from '../function_container/Functions';
import * as jwt from 'jsonwebtoken';
import { NextFunction } from 'connect';
import { AuthenticatedRequest } from '../function_container/Functions';

const router = express.Router();


router.post('/login', login);

router.get('/getAll', verifyToken, getSubject);

router.get('/:id',verifyToken, getSubjectsById);

router.post('/',verifyToken, createSubject);

router.put('/:id',verifyToken, updateSubject);

router.delete('/:id',verifyToken, deleteSubject);

export default router;
