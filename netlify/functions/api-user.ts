import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

interface Response {
    statusCode: number;
    body: string;
}

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext): Promise<Response> => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "User data" }),
    };
};