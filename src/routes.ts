import { response } from "express";

import { Request, Response} from 'express';
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
   const user = createUser({
       email: 'caue@caue.com',
       passaword: '1233456',
       techs: [
           'nodejs',
            'ReactJS', 
            'React Native',
            {title: 'Javascript', experience: 100}
        ],
   })
    return response.json({message: 'Hello World'});
}