import { NextApiResponse } from "next";

type DataResponse = {
  isLogin : boolean
}



export default function handler(req : NextApiResponse, res : NextApiResponse<DataResponse>) {

    res.status(200).json({ isLogin: true  })
  }