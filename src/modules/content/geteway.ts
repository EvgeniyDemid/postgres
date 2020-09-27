import { OnGatewayConnection, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";

@WebSocketGateway(4001)
export class AppGeteway implements OnGatewayConnection {
    @WebSocketServer()
    wss;

    handleConnection(client){
        client.emit('connection',"Сокет подключен к серверу");
    }
}