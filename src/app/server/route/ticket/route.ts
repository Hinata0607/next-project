import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

interface Ticket {
	ticket_id: number;
	ticket_price: number;
}

export async function GET() {
	const client = await pool.connect();
	try {
		const ret = await client.query('SELECT * FROM "Ticket"', []);
		return NextResponse.json(ret.rows);
	} catch (error) {
		console.error('Error executing query', error);
		return NextResponse.json(
			{ error: 'Error executing query' },
			{ status: 500 }
		);
	} finally {
		client.release();
	}
}

// POSTメソッド
export async function POST(req: NextRequest) {
	try {
		const { ticket_price }: Ticket = await req.json();
		const client = await pool.connect();
		try {
			const query = `
            INSERT INTO "Ticket" (ticket_price)
            VALUES ($1)
            RETURNING *`;
			const values = [ticket_price];
			const result = await client.query(query, values);
			return NextResponse.json(result.rows[0], { status: 201 });
		} catch (error) {
			console.error('Error executing query', error);
			return NextResponse.json(
				{ error: 'Error executing query' },
				{ status: 500 }
			);
		} finally {
			client.release();
		}
	} catch (error) {
		console.error('Invalid request error', error);
		return NextResponse.json(
			{ error: 'Invalid request error' },
			{ status: 400 }
		);
	}
}
