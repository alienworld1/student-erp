import { Router } from "express";
import{
    fetchAllParents,
    fetchParentById,
    createParent
} from '../controllers/parent';

const parentRouter = Router();

parentRouter.get('/',fetchAllParents);
parentRouter.get('/:id', fetchParentById);
parentRouter.post('/', createParent);

export default parentRouter;