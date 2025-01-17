import { Router } from 'express'
import { AvaModelsORRentedOfModel, getAvaSpecModel, getHondaORToyota, getRenANDSpecModel } from './special.controller.js';

const specialRouter = Router();

specialRouter.get('/hondaORToyota', getHondaORToyota)
specialRouter.get('/available/specficModel', getAvaSpecModel)
specialRouter.get('/renterdAND/specficModel', getRenANDSpecModel)
specialRouter.get('/specficModel', AvaModelsORRentedOfModel)


export default specialRouter