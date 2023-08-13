// http://localhost:3000/api/getblog?slug=how-to-learn-javascript

import * as fs from 'node:fs';

export default function handler(req, res) {
    fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data)=>{
        if(err){
            res.status(500).json({error:"No such blog found"})
        }
        console.log(req.query.slug)
        res.status(200).json(JSON.parse(data))
    });
  }
  