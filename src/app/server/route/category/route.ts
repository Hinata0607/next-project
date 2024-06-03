// categoryモデルのAPIを定義
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";
import { Pool, Query } from "pg";
import bcrypt from "bcrypt";
import { withCoalescedInvoke } from "next/dist/lib/coalesced-function";

// db接続
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

interface Category {
    category_id: number;
    category_name: string;
}

// getメソッド
export async function GET() {
    const client = await pool.connect();
    try{
        const ret = await client.query('SELECT * FROM "CATEGORY"',[]);
        return NextResponse.json(ret.rows);
    } catch (error) {
        console.error("Error executing query",error);
        return NextResponse.json(
            { error: "Error executing query" },
            { status: 500 }
        );
    } finally {
        client.release();
    }
}

// postメソッド
export async function POST(req:NextRequest) {
    try {
        const {category_name}: Category =
            await req.json();
        const client = await pool.connect();
        try {
            const query =`
            INSERT INTO "Category" (category_name)
            VALUES ($1)
            RETURNING *`;
            const values = [category_name];
            const result = await client.query(query,values);
            return NextResponse.json(result.rows[0], { status: 201 });
        } catch (error) {
            console.error("Error executing query", error);
            return NextResponse.json(
                { error: "Error executing query" },
                { status: 500 }
            );
        } finally {
            client.release();
        }
    } catch (error) {
        console.error("Invalid request error",error);
        return NextResponse.json(
            {error: "Invalid request error"},
            { status: 400 }
        );
    }
}

// updateメソッド
export async function PATCH(req:NextRequest) {
    try {
        const { category_id, category_name }:Category = await req.json();
        const client = await pool.connect();
        try {
            const query = `
            UPDATE "Category"
            SET category_name = $1
            WHERE category_id = $2
            RETURNING *`;
            const values = [category_name, category_id];
            const result = await client.query(query, values);
            return NextResponse.json(result.rows[0], { status: 201 });
        } catch (error) {
            console.error("Error executing query",error);
            return NextResponse.json(
                { error: "Error executing query" },
                { status: 500 }
            );
        } finally {
            client.release();
        }
    } catch (error) {
        console.error("Invalid request error", error);
        return NextResponse.json(
            { error: "Invalid request error" },
            { status: 400 }
        );
    }
}

// Deleteメソッド
export async function DELETE(req:NextRequest) {
    try {
        const { category_id }: { category_id:number } = await req.json();
        const client = await pool.connect();
        try {
            const query = `
            DELETE FROM "Category"
            WHERE category_id = $1
            RETURNING *`;
            const values = [category_id];
            const result = await client.query(query, values);
            if (result.rowCount == 0) {
                return NextResponse.json(
                    {error: "Category not found"},
                    { status: 404 }
                );
            }
            return NextResponse.json({ message: "Category deleted successfully"});
        } catch (error) {
            console.error("Error executing query",error);
            return NextResponse.json(
                { error: "Error executing query" },
                { status: 500 }
            );
        } finally {
            client.release();
        }
    } catch (error) {
        console.error("Invalid request error", error);
        return NextResponse.json(
            { error: "Invalid request error" },
            { status: 500 }
        );
    }
}