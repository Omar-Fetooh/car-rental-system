import { Router } from 'express'
import { getAvaSpecModel, getHondaORToyota, getRenANDSpecModel, getSpecModel } from './special.controller.js';

const specialRouter = Router();

specialRouter.get('/hondaORToyota', getHondaORToyota)
specialRouter.get('/available/specficModel', getAvaSpecModel)
specialRouter.get('/renterdAND/specficModel', getRenANDSpecModel)
specialRouter.get('/specficModel', getSpecModel)


export default specialRouter