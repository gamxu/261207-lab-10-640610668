import { readDB } from "../../backendLibs/dbLib";

export default function roomRoute(req, res) {
  if(req.method === "GET"){
    const temp = readDB();
    const rooms = []
    for(const room of temp){
      rooms.push({
        roomId: room.roomId,
        roomName: room.roomName,
      })
    }
    return res.json({ok: true,rooms})
  }
}