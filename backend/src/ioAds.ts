// noinspection RedundantConditionalExpressionJS

import {io} from "./server";

export const checkRoom = (room: string): boolean => {
    const roomSockets = io.of('/').adapter.rooms.get(room);
    return roomSockets && roomSockets.size > 0 ? true : false;
}