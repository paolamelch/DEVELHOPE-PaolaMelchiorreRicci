import { Request, Response } from "express";
import { db } from "../db.js";

const getAll = async (req : Request, res: Response) => {
    const planets = await db.many('SELECT * FROM planets')
    res.status(200).json({planets})
  };

  const getOnebyId = async (req : Request, res: Response) => {
    const {id} = req.params
    const planet = await db.one('SELECT * FROM planets WHERE id = $1', Number(id))
    res.status(200).json(planet);
  };

  const create = async  (req : Request, res: Response) => {
    const {name} = req.body;
    await db.none('INSERT INTO planets (name) VALUES ($1)', name)

    res.status(201).json({msg : "New planet was created"});
  };


  const updateById = async (req : Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    await db.none('UPDATE planets SET name=$2 WHERE id=$1',[id, name])
    
    res.status(200).json({msg : " Planet was updated"});
  }


  const deleteById = async (req : Request, res: Response) => {
  const { id } = req.params;
  await db.none('DELETE FROM planets WHERE id = $1',Number(id))
  
  res.status(200).json({msg : " Planet was deleted"});
}

const createImage = async (req : Request, res: Response) => {
  const {id} = req.params;
  const fileName = req.file?.path;
  if(fileName){
    db.none('UPDATE planets SET image=$2 WHERE id=$1',[id,fileName])
    res.status(201).json({msg : "Planet image uploaded successfully"})
  }else{
    res.status(400).json({msg : "planet image failed to upload"})
  }
}

export { getAll,getOnebyId,create,updateById,deleteById,createImage};